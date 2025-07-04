// src/lib/constants.ts

// Environment detection
export const isDev = process.env.NODE_ENV === 'development';
export const isStg = process.env.NODE_ENV === 'staging';
export const isProd = process.env.NODE_ENV === 'production';

// Set URLs based on NODE_ENV
export const setSiteUrl = {
  SITE_URL: {
    DEV: 'http://dev.migueliglesias.com/', // o el puerto que uses en dev
    STG: 'https://stg.migueliglesias.com/',
    PROD: 'https://migueliglesias.com/',
  },
  BASE_URL: {
    STATUS: false,
    DEV: '/',
    STG: '/',
    PROD: '/',
  },
  ASSETS_URL: {
    STATUS: false,
    DEV: 'http://dev.migueliglesias.com/assets/',
    STG: 'https://stg.migueliglesias.com/assets/',
    PROD: 'https://migueliglesias.com/assets/',
  },
};

// Get current environment
export const getCurrentEnv = (): 'DEV' | 'STG' | 'PROD' => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return 'DEV';
    case 'staging':
      return 'STG';
    case 'production':
      return 'PROD';
    default:
      return 'DEV';
  }
};

// URL settings
export const SITE_URL = {
  DEV: setSiteUrl.SITE_URL.DEV,
  STG: setSiteUrl.SITE_URL.STG,
  PROD: setSiteUrl.SITE_URL.PROD,
} as const;

export const BASE_URL = {
  STATUS: setSiteUrl.BASE_URL.STATUS,
  DEV: setSiteUrl.BASE_URL.DEV,
  STG: setSiteUrl.BASE_URL.STG,
  PROD: setSiteUrl.BASE_URL.PROD,
} as const;

export const ASSETS_URL = {
  STATUS: setSiteUrl.ASSETS_URL.STATUS,
  DEV: setSiteUrl.ASSETS_URL.DEV,
  STG: setSiteUrl.ASSETS_URL.STG,
  PROD: setSiteUrl.ASSETS_URL.PROD,
} as const;

// Functions to get URLs based on current environment
export const getCurrentSiteUrl = () => SITE_URL[getCurrentEnv()];
export const getCurrentBaseUrl = () => (BASE_URL.STATUS ? BASE_URL[getCurrentEnv()] : '/');
export const getCurrentAssetsUrl = () => (ASSETS_URL.STATUS ? ASSETS_URL[getCurrentEnv()] : '');

// Basic site info (set dynamically according to environment)
export const SITE_CONFIG = {
  name: 'Miguel Iglesias',
  title: 'Portfolio',
  description: "Miguel Iglesias's personal web.",
  url: getCurrentSiteUrl(),
  author: 'Miguel Iglesias',
  locale: 'es-VE',
  defaultLocale: 'es-VE',
} as const;

// Default SEO settings
export const SEO_DEFAULTS = {
  ogType: 'website',
  ogImage: '/assets/common/images/ogp_image.png',
  twitterCard: 'summary_large_image',
} as const;

// Path settings (environment-specific URLs)
export const PATHS = {
  images: {
    favicon: `${getCurrentAssetsUrl()}assets/common/images/favicon`,
    ogp: `${getCurrentAssetsUrl()}assets/common/images/ogp_image.png`,
    appleTouchIcon: `${getCurrentAssetsUrl()}assets/common/images/apple-touch-icon.png`,
  },
} as const;

// Common type definitions
export interface PageMeta {
  title?: string;
  description?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Default metadata values for the entire site
export const DEFAULT_PAGE_META: PageMeta = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  ogType: SEO_DEFAULTS.ogType,
  ogImage: SEO_DEFAULTS.ogImage,
};

// SNS links (as needed)
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/mgliglesias',
  linkedin: 'https://www.linkedin.com/in/miguel-iglesias-09117a356/',
  github: 'https://github.com/IglesiasMiguel',
} as const;

// Theme settings (as needed)
export const THEME_CONFIG = {
  defaultTheme: 'light',
  themeStorageKey: 'theme-preference',
} as const;
