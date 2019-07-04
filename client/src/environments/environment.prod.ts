export const environment = {
  production: true,

  oidc: {
    clientId: '0oalqrcqbptWL1ZLA356',
    issuer: 'https://dev-686145.okta.com/oauth2/default',
    redirectUri: 'http://104.198.141.243/implicit/callback',
    scope: 'openid profile email',
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    messagesUrl: 'http://104.198.141.243/api/messages',
    accountsUrl: 'http://104.198.141.243/accounts'
  }
};