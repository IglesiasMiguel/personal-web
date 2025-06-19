/**
 * @file htmlFormatter.ts
 * @description Provides functions to format HTML files and an Astro plugin to auto-format after build.
 *              Intended for use in the Astro build process.
 */

// Core modules
import path from 'node:path';
import fs from 'node:fs';
import chalk from 'chalk';
import prettier from 'prettier';
import type { AstroIntegration } from 'astro';

/**
 * Type definition for HTML formatter options.
 * Extends Prettier's option types.
 */
export interface FormatterOptions {
  [key: string]: unknown;
  parser: string;
  tabWidth: number;
  useTabs: boolean;
  printWidth: number;
  htmlWhitespaceSensitivity: 'css' | 'strict' | 'ignore';
  endOfLine?: 'lf' | 'crlf' | 'cr' | 'auto';
  bracketSameLine?: boolean;
  singleAttributePerLine?: boolean;
  embeddedLanguageFormatting?: 'auto' | 'off';
}

/**
 * Default formatting options, optimized for HTML and based on Prettier's config.
 */
export const defaultConfig: FormatterOptions = {
  parser: 'html',
  tabWidth: 2,
  useTabs: true,
  printWidth: 120,
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  bracketSameLine: false,
  singleAttributePerLine: false,
  embeddedLanguageFormatting: 'auto',
};

/**
 * Recursively retrieves all file paths in the specified directory.
 *
 * @param {string} dirPath - Directory path to search
 * @param {string[]} [arrayOfFiles=[]] - Collected file paths (for recursion)
 * @returns {string[]} Array of file paths
 */
export const getAllFiles = function (dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    const fullPath = path.join(dirPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
};

/**
 * Formats the specified HTML file and overwrites it.
 *
 * @param {string} filePath - Path to the HTML file to format
 * @param {FormatterOptions} options - Formatting options
 * @returns {Promise<void>}
 */
export const htmlFormatter = async (filePath: string, options: FormatterOptions): Promise<void> => {
  try {
    const data = fs.readFileSync(filePath, { encoding: 'utf8' });

    const formattingOptions = {
      ...options,
      parser: options.parser || 'html',
    };

    const result = await prettier.format(data, formattingOptions);

    fs.writeFileSync(filePath, result);
    console.log(chalk.green(`Formatted: ${path.basename(filePath)}`));
  } catch (err) {
    console.error(chalk.red(`Error formatting ${filePath}: ${(err as Error).message}`));
  }
};

/**
 * Astro build done hook argument type definition.
 */
interface AstroBuildDoneParams {
  dir: URL;
  pages: { pathname: string }[];
}

/**
 * Astro plugin to auto-format HTML files after build.
 *
 * @param {Partial<FormatterOptions>} [options={}] - Formatting options (extends defaults)
 * @returns {AstroIntegration} Astro plugin object
 */
export default function htmlBeautifier(options: Partial<FormatterOptions> = {}): AstroIntegration {
  const formattingOptions = { ...defaultConfig, ...options };

  return {
    name: 'htmlFormatter',
    hooks: {
      'astro:build:done': async ({ dir }: AstroBuildDoneParams) => {
        try {
          console.log(chalk.blue.bold('\nFormatting HTML files...'));

          const allFiles = getAllFiles(dir.pathname);

          const htmlFiles = allFiles.filter((filePath) => path.extname(filePath) === '.html');

          const promises = htmlFiles.map((filePath) => htmlFormatter(filePath, formattingOptions));

          await Promise.all(promises);

          console.log(chalk.green.bold('\nHTML formatting completed successfully ✓'));
        } catch (error) {
          console.error(chalk.red.bold('\nHTML Formatting Error:'));
          console.error(chalk.red(`${(error as Error).message}`));
        }
      },
    },
  };
}
