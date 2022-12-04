/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: false,
  },
}

module.exports = nextConfig
