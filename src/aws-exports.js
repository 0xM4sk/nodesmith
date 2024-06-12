// src/aws-exports.js
const awsmobile = {
    Auth: {
      region: 'us-east-2',
      userPoolId: 'us-east-2_BOxQn3DrD',
      userPoolWebClientId: '4pmalt6c50fjjkjl9n9fn58qd3',
      oauth: {
        domain: 'https://nodesmithlogin.auth.us-east-2.amazoncognito.com',
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: 'http://nodesmith.dev',
        redirectSignOut: 'http://nodesmith.dev',
        responseType: 'code'
      }
    }
  };
  
  export default awsmobile;
  