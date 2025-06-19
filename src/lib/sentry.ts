// src/lib/sentry.ts
import * as Sentry from '@sentry/node';

const SENTRY_DSN = process.env.SENTRY_DSN ?? '';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Initializes Sentry.
 * Only initializes if in production and DSN is set.
 *
 * @returns {void}
 */
export const initSentry = (): void => {
  if (isProduction && SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      tracesSampleRate: 1.0,
    });
    console.log('✅ Sentry initialized (Production)');
  } else {
    console.log('ℹ️ Sentry not initialized (Development mode)');
  }
};

/**
 * Sends an exception to Sentry.
 * In production, sends to Sentry; in development, logs to console.
 *
 * @param {Error} error - The Error object to capture
 * @returns {void}
 */
export const captureException = (error: Error): void => {
  if (isProduction && SENTRY_DSN) {
    Sentry.captureException(error);
  } else {
    console.error('[DEV] Captured Exception:', error);
  }
};

/**
 * Sends a warning message to Sentry.
 * In production, sends to Sentry; in development, logs to console.
 *
 * @param {string} message - The warning message
 * @returns {void}
 */
export const captureWarning = (message: string): void => {
  if (isProduction && SENTRY_DSN) {
    Sentry.captureMessage(message, 'warning');
  } else {
    console.warn('[DEV] Captured Warning:', message);
  }
};

/**
 * Sends an HTTP response error to Sentry.
 * For example, API errors with URL, status code, and response body.
 * In production, sends to Sentry; in development, logs to console.
 *
 * @param {string} url - The request URL where the error occurred
 * @param {number} status - HTTP status code
 * @param {any} [responseBody] - (Optional) Response body content
 * @returns {void}
 */
export const captureHttpError = (url: string, status: number, responseBody?: unknown): void => {
  const message = `HTTP Error: ${status} at ${url}`;

  if (isProduction && SENTRY_DSN) {
    Sentry.captureMessage(message, {
      level: 'error',
      extra: {
        url,
        status,
        responseBody,
      },
    });
  } else {
    console.error('[DEV] Captured HTTP Error:', { url, status, responseBody });
  }
};
