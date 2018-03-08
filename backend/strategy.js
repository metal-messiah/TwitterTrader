const Auth0Strategy = require('passport-auth0');
const config = require(`${__dirname}/config.js`);
const { domain, clientID, clientSecret } = config;

module.exports = new Auth0Strategy({
    domain: domain,
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: '/api/auth/setUser',
    scope: 'openid profile'
},
    function (accessToken, refreshToken, extraParams, profile, done) {
        //console.log(profile)
        done(null, profile)
    }
);