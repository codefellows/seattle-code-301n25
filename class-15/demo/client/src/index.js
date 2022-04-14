import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// once you sign up for an Auth0 account, they will provide you with the domain and clientId
// to install Auth0 in React v18, use `--force` at the end of the install command.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    // this is the change we are going to keep
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>,
);

