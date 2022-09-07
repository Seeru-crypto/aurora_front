const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  const env = {
    GITHUB_TOKEN: (() => {
      if (isDev) return ''
      if (isProd) {
        return 'prod_token'
      }
      if (isStaging) return 'staging token'
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    GIT_REPO_DATA_URL: (() => {
      if (isDev) return 'https://e469abe1-ffd5-4df1-89d9-d80090a1779b.mock.pstmn.io/'
      if (isProd) return 'https://api.github.com/repos/Seeru-crypto/'
      if (isStaging) return '...'
      return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
    })(),
    REVALIDATE_VALUE: 7 * 86400,
  }

  return {
    env,
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      styledComponents: true,
    },
  }

};
