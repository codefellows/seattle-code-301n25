import React from "react";
import "./App.css";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Can-of-Books Lite Demo</h1>
        {this.props.auth0.isAuthenticated ? (
          <>
            <LogoutButton />
            <Profile />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    );
  }
}

export default withAuth0(App);
