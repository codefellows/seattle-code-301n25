# Class 15 Lecture Notes

- Authentication
  - the process of verifying who someone is

- Authorization
  - the process of verifying what specific applications, files, and data a user has access to.

- "Plug & Play" Code
  - you don't necessarily need to understand every lil thing happening under the hood.
  - the library did a lot of the heavy lifting for us so that we don't have to understand every line of code.

- Auth0 (pronounced "auth zero")
  - <https://auth0.com/docs/get-started/auth0-overview>
  - Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that come with building your own solution to authenticate and authorize users.
  - uses OAuth (oh-auth) under the hood
    - needs us to write lots of code to make it work in our app
  - is protecting sensitive data off the shoulders of smaller companies/smaller apps
  - leverage the security that other larger companies put into protecting data
  - gives us lots of prewritten code to "plug and play" in our app
  - client uses some tool to bridge the login gap between you and Google/Pinterest/Amazon/Paypal/GitHub/Facebook
  - a "handshake" occurs between google (or someone similar) and the client and a token is created
  - the client uses the token when requesting data from the backend
  - the backend verifies the token
    - FYI tokens can expire after some time

- Understand the concept of OAuth
  - OAuth, which is pronounced "oh-auth," enables an end user's account information to be used by third-party services, such as Facebook and Google, without exposing the user's account credentials to the third party.
  - Auth0 generates access tokens for API authorization scenarios, in JSON web token (JWT) format. The permissions represented by the access token, in OAuth terms, are known as scopes. When an application authenticates with Auth0, it specifies the scopes it wants. If those scopes are authorized by the user, then the access token will represent these authorized scopes.

- Important Links:
  - Quick Start: <https://auth0.com/docs/quickstarts>
  - Auth0 React SDK for Single Page Apps: <https://auth0.com/docs/libraries/auth0-react#use-with-a-class-component>
  - jsonwebtoken docs: <https://www.npmjs.com/package/jsonwebtoken>

- How to use with a class component
  - Use the `withAuth0` Higher Order Component to add the auth0 property to class components instead of using the hook, `useAuth0`.
