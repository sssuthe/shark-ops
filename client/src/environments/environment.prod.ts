export const environment = {
  production: true,

  oidc: {
    clientId: '0oalqrcqbptWL1ZLA356',
    issuer: 'https://dev-686145.okta.com/oauth2/default',
    redirectUri: 'http://192.168.99.100/implicit/callback',
    scope: 'openid profile email',
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    messagesUrl: 'http://192.168.99.100/api/messages',
    accountsUrl: 'http://192.168.99.100/accounts'
  }
};