# Class 15 Lecture Notes

- LAB 15 IS DUE SATURDAY MORNING BEFORE CLASS STARTS AT 9AM(PST)

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

- Auth0 in the FrontEnd
  - To install Auth0 in React v18, use the force command
    - `npm install @auth0/auth0-react --force`
  - To install Auth0 in React v17, follow the directions in the Quick Start guide.
    - <https://auth0.com/docs/quickstart/spa/react/interactive>
  - In the `index.js` set the `redirectUri={window.location.origin}` and NOT localhost:3001.
    - `window.location.origin` does the same thing but this is more dynamic for deployment.
  - `isAuthenticated` is a hook, meaning that an API call is happening so there is some async functionality happening here upon render. This is why we get 2 different values when we `console.log(isAuthenticated)`. It returns false upon page load but then when the API response returns, it reflects the actual value of either true or false depending on if the user is logged in or not.
  - Best practice is to copy/paste the starter code from the Auth0 docs. Feel free to refactor if it makes sense to you but it will work right out of the box.
  - Don't forget to change the "Token Endpoint Authentication Method" to "None" when creating a new "Single-Page App" using Auth0 React SDK.
    - You won't able to authenticate until you make that change.
    - There is even a warning about it in the Dashboard! Look for it!
    - You have to navigate to the Dashboard > Applications > Applications > can-of-books > scroll down to Application Properties > change Token Endpoint Authentication Method to None.
  - The Dashboard can be found in the hambuger menu where you profile is located at. Look in the top right corner of your screen and click on your name.

- Auth0 in the BackEnd
  - Install the dependencies
    - `npm i jsonwebtoken jwks-rsa`
  - Start by updating your BookModel to include an email
  - clear your database of all current books
  - Update your seed.js to include your email adress associated with Google Account
  - run `node seed.js` in order to repopulate your MongoDB with new books that inlcude the user's email.
    - if you don't include an email, when you go to "get" your books, an empty array will be returned.
  - in the server's `.env` file, you will need a variable like this:
    - `JWKS_URI=https://dev-yb6rt0os.us.auth0.com/.well-known/jwks.json`
    - replace `dev-yb6rt0os.us.auth0.com` with the value that you find in the Auth0 Dashboard under the Domain label.
