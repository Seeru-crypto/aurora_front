module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  swcMinify: true,
  env: {
    REVALIDATE_VALUE: 7 * 86400,
  },
  compiler: {
    styledComponents: true,
  },
};
