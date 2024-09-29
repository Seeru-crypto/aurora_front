const getLastCommitDate = require('./src/getCommitInfo');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    LAST_COMMIT_DATE: getLastCommitDate(),
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
