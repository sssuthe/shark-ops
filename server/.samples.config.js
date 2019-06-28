module.exports = {
    webServer: {
      port: 8080,
      oidc: {
        clientId: '0oalqrcqbptWL1ZLA356',
        clientSecret: 'HwC6MBxFn4TyYQzssXGvkHgZO4v8ac4Q36cV1TPt',
        issuer: 'https://dev-686145.okta.com/oauth2/default',
        appBaseUrl: 'http://localhost:8080',
        scope: 'openid profile email',
        testing: {
          disableHttpsCheck: false
        }
      },
    },
    resourceServer: {
      port: 5000,
      oidc: {
        clientId: '0oalqrcqbptWL1ZLA356',
        issuer: 'https://dev-686145.okta.com/oauth2/default',
        testing: {
          disableHttpsCheck: false
        }
      },
      assertClaims: {
        aud: 'api://default',
        cid: '0oalqrcqbptWL1ZLA356'
      }
    }
  };
