require('dotenv').config();
const { auth } = require('express-openid-connect');

module.exports.http = {
  middleware: {
    order: [
      'cookieParser',
      'bodyParser',
      'compress',
      'expressOpenidConnect',
      'poweredBy',
      'router',
      'www',
      'favicon',
    ],

    expressOpenidConnect: (function _configureAuth0 () {
      const custom = {
        auth0: {
          authRequired: false,
          auth0Logout: true,
          idpLogout: true,
          secret: process.env.AUTH0_CLIENT_SECRET,
          baseURL: process.env.BASE_URL,
          clientID: process.env.AUTH0_CLIENT_ID,
          issuerBaseURL: process.env.AUTH0_DOMAIN,
        }
      };
      var middlewareFn = auth(custom.auth0);
      return middlewareFn;
    })(),

    bodyParser: (function _configureBodyParser(){
      var skipper = require('skipper');
      var middlewareFn = skipper({ strict: true });
      return middlewareFn;
    })(),
  },
};
