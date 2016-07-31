let __ENV__
if (typeof(__NODE_ENV__) !== 'undefined') {
  if (__NODE_ENV__ === 'production' && process.env.HEROKU_APP_NAME === 'elementish') {
    __ENV__ = 'production'
  } else if (__NODE_ENV__ === 'production' && process.env.HEROKU_APP_NAME === 'elementish-staging') {
    __ENV__ = 'staging'
  }
} else {
  __ENV__ = 'development'
}
console.log('HEROKU_APP_NAME: ', process.env.HEROKU_APP_NAME)
console.log('Current ENV: ', __ENV__)
export {__ENV__}

export const CLIENT_PORT = 4000
export const SERVER_PORT = 9001
export const STAGING_HOST = 'zensa-staging.herokuapp.com'
export const PRODUCTION_HOST = 'zensaskincare.com'
export const DB_NAME = 'elementish'
export const AUTH0_URL = 'seunggs.auth0.com'

export const IMG_BASE_URL = (__ENV__ === 'production' || __ENV__ === 'staging') ? 'https://elementish.imgix.net' : 'http://127.0.0.1:3000/assets/images'
export const BREAKPOINT_SM = '40em'
export const BREAKPOINT_MD = '52em'
export const BREAKPOINT_LG = '64em'
export const MUI_FONT_FAMILY = 'roboto'
