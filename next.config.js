module.exports = {
  reactStrictMode: true,
  webpack: config => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
  images: {
    domains: ['apod.nasa.gov', 'img.youtube.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  }
}
