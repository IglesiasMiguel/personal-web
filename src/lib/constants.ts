// src/lib/constants.ts

// Environment detection
export const isDev = process.env.NODE_ENV === 'development';
export const isStg = process.env.NODE_ENV === 'staging';
export const isProd = process.env.NODE_ENV === 'production';

// Set URLs based on NODE_ENV
export const setSiteUrl = {
  SITE_URL: {
    DEV: 'http://dev.hoge.com/',
    STG: 'http://stg.hoge.com/',
    PROD: 'http://prod.hoge.com/',
  },
  BASE_URL: {
    STATUS: false,
    DEV: '/hoge/',
    STG: '/hoge/',
    PROD: '/hoge/',
  },
  ASSETS_URL: {
    STATUS: false,
    DEV: 'http://dev.hoge.assets.com/',
    STG: 'http://stg.hoge.assets.com/',
    PROD: 'http://prod.hoge.assets.com/',
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
  description: 'This is the description',
  url: getCurrentSiteUrl(),
  author: 'Miguel Iglesias',
  locale: 've_ES',
  defaultLocale: 've',
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
  twitter: 'https://twitter.com/hogehoge',
  facebook: 'https://facebook.com/hogehoge',
  instagram: 'https://instagram.com/hogehoge',
  line: 'https://line.me/ti/p/hogehoge',
  linkedin: 'https://linkedin.com/in/hogehoge',
} as const;

// Theme settings (as needed)
export const THEME_CONFIG = {
  defaultTheme: 'light',
  themeStorageKey: 'theme-preference',
} as const;
