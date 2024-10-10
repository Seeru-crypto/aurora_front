const getLastCommitDate = require('./src/getCommitInfo');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    LAST_COMMIT_DATE: getLastCommitDate(),
    NEXT_PUBLIC_VERSION_NUMBER: process.env.NEXT_PUBLIC_VERSION_NUMBER,
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
