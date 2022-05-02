const process = require('process');

const env = process.env.NODE_ENV;

module.exports = {
  async headers() {
    const headers = {
      'Content-Security-Policy': env.includes('dev')
        ? "object-src 'self'; default-src 'self'; frame-src 'self' https://twitter.com https://platform.twitter.com/; script-src 'self' 'unsafe-eval' https://platform.twitter.com/widgets.js https://platform.twitter.com/js/horizon_tweet.c9df2d9b929da727d1e2e137e0482378.js; style-src 'self' 'unsafe-inline'; img-src 'self' res.cloudinary.com; frame-ancestors 'self';"
        : "object-src 'self'; default-src 'self'; frame-src 'self' https://twitter.com https://platform.twitter.com/; script-src 'self' https://platform.twitter.com/widgets.js https://platform.twitter.com/js/horizon_tweet.c9df2d9b929da727d1e2e137e0482378.js; style-src 'self' 'unsafe-inline'; img-src 'self' res.cloudinary.com; frame-ancestors 'self';",
      'Strict-Transport-Security':
        'max-age=3124138248000; includeSubDomains; preload;',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'same-origin',
    };

    const nextHeaders = Object.entries(headers).map(([key, value]) => {
      return {
        key: key,
        value: value,
      };
    });

    return [
      {
        source: '/(.*)',
        headers: nextHeaders,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
