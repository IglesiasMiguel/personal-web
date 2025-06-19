// Built-in modules
import { URL } from 'node:url';
import { promises as fs } from 'fs';

// External libraries/frameworks
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import glob from 'fast-glob';
import tailwindcss from '@tailwindcss/vite';

// Project modules
import { getCurrentSiteUrl, getCurrentBaseUrl, getCurrentAssetsUrl, ASSETS_URL } from './src/lib/constants.ts';
import htmlBeautifier from './src/lib/htmlFormatter.js';
import { initSentry, captureException } from './src/lib/sentry';

// Initialize Sentry on Astro startup
initSentry();

// Get values according to build environment
const siteUrl = getCurrentSiteUrl();
const baseUrl = getCurrentBaseUrl();
const assetsUrl = getCurrentAssetsUrl();
const outDirUrl = `./dist${getCurrentBaseUrl()}`;

// Set asset output directory if ASSETS_URL is enabled
const assetsDir = ASSETS_URL.STATUS ? 
  new URL(assetsUrl).pathname.replace(/^\//, '') : 
  '_astro';

export default defineConfig({
  site: siteUrl,
  base: baseUrl,
  outDir: outDirUrl,
  compressHTML: false, // Whether to compress HTML. By default, compression is disabled.
  build: {
    inlineStylesheets: 'never',
    assets: assetsDir,
    assetsPrefix: ASSETS_URL.STATUS ? assetsUrl : undefined,
    format: 'file',
  },
  integrations: [
    react(),
    // Add HTML formatting plugin
    htmlBeautifier({
      parser: "html",
      tabWidth: 2,
      useTabs: true,
      printWidth: 120,
      htmlWhitespaceSensitivity: "css"
    }),
    {
      // Plugin name for cleaning up the build folder
      name: 'clean-dist-folder',
      hooks: {
        // Hook executed after Astro build process completes
        'astro:build:done': async ({ dir }) => {
          try {
            // Search for unnecessary system files using glob patterns
            // .DS_Store: macOS folder metadata file
            // Thumbs.db: Windows thumbnail cache
            // Desktop.ini: Windows folder display settings file
            const junkFiles = await glob(`${dir.pathname}/**/{.DS_Store,Thumbs.db,Desktop.ini}`);
            console.log(`Found ${junkFiles.length} junk files to delete`);

            // Delete detected junk files one by one
            for (const file of junkFiles) {
              await fs.unlink(file);
            }

            // Search for macOS-specific hidden directories
            // __MACOSX directory is an unnecessary directory generated when unzipping zip files, etc.
            const macosxDirs = await glob(`${dir.pathname}/**/__MACOSX`);
            console.log(`Found ${macosxDirs.length} __MACOSX directories to delete`);

            // Delete detected __MACOSX directories one by one
            for (const dirPath of macosxDirs) {
              const stats = await fs.stat(dirPath);
              if (stats.isDirectory()) {
                await fs.rm(dirPath, { recursive: true, force: true });
              }
            }

            // Output clean-up success message
            console.log('Clean-up completed successfully');
          } catch (error) {
            // Error handling
            // Output detailed error info to console
            console.error('--- Clean-up Dist Folder Error ---');
            console.error(`Error Message: ${error.message}`);
            console.error(`Stack Trace: ${error.stack}`);
            console.error('-----------------------------------');

            // Send error to Sentry (for detailed error tracking in production)
            // Uses captureException method defined in src/lib/sentry.ts
            captureException(error);
          }
        }
      }
    }
  ],
  devToolbar: {
    enabled: false // Whether to show Astro's built-in toolbar
  },
  server: (e) => ({
    port: e.command === 'dev' ? 3000 : 4321,
    host: true, // Allows access from other devices on the local network
    open: true  // Whether to automatically open the browser when the server starts
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: process.env.NODE_ENV === 'production',
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: (entryInfo) => {
            return `assets/js/[name].js`;
          },
          assetFileNames: (assetInfo) => {
            if (ASSETS_URL.STATUS) {
              const info = assetInfo.name.split('.')
              const extType = info[info.length - 1]
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                return `assets/images/[name][extname]`;
              } else if (/css/i.test(extType)) {
                return `assets/css/[name]-[hash][extname]`;
              } else if (/js/i.test(extType)) {
                return `assets/js/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            } else {
              return `_astro/[name].[hash][extname]`;
            }
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    esbuild: (process.env.NODE_ENV === 'production' ) ? { drop: ['console', 'debugger'] } : {},
  }
});