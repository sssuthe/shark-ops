export const environment = {
  production: true,

  oidc: {
    clientId: '0oalqrcqbptWL1ZLA356',
    issuer: 'https://dev-686145.okta.com/oauth2/default',
    redirectUri: 'http://35.245.248.84:80/implicit/callback',
    scope: 'openid profile email',
    testing: {
      disableHttpsCheck: false
    }
  },
  resourceServer: {
    messagesUrl: 'http://35.221.27.78:80/api/messages',
    accountsUrl: 'http://35.221.27.78:80/accounts'
  }
};