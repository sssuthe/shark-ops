var express = require('express');
var router = express.Router();
const OktaJwtVerifier = require('@okta/jwt-verifier');
var HealthcheckController = require('../Controllers/healthcheckController');
const sampleConfig = require('../.samples.config.js');


const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: sampleConfig.resourceServer.oidc.clientId,
    issuer: sampleConfig.resourceServer.oidc.issuer,
    assertClaims: sampleConfig.resourceServer.assertClaims,
    testing: sampleConfig.resourceServer.oidc.testing
  });

router.get('/api/accounts', HealthcheckController.getAccounts);
router.get('/api/healthcheck', HealthcheckController.getHealthcheck);
router.get('/api', function (req, res) {
    res.redirect('/healthcheck');
});

router.get('/api/newHealthcheck', (req, res) => {
    res.json({
      message: 'Hello!  There\'s not much to see here :) Please grab one of our front-end samples for use with this sample resource server'
    });
  });

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */
router.get('/api/messages', (req, res) => {
    res.json({
      messages: [
        {
          date:  new Date(),
          text: 'I am a robot.'
        },
        {
          date:  new Date(new Date().getTime() - 1000 * 60 * 60),
          text: 'Hello, world!'
        }
      ]
    });
  });

/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
router.get('/secure', authenticationRequired, (req, res) => {
    res.json(req.jwt);
  });

  function authenticationRequired(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);
  
    if (!match) {
      res.status(401);
      return next('Unauthorized');
    }
  
    const accessToken = match[1];
  
    return oktaJwtVerifier.verifyAccessToken(accessToken)
      .then((jwt) => {
        req.jwt = jwt;
        next();
      })
      .catch((err) => {
        res.status(401).send(err.message);
      });
  }

module.exports = router;