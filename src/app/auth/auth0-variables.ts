interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  audience: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '5lRA1RRlG07eskltTTGBTQltjyeDUNlH',
  domain: 'wyh388.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  // audience: 'https://wyh388.auth0.com/api/v2/'
  audience: 'localhost:3000'
};
