module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REVALIDATE_VALUE: (7 * 86400).toString(),
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
