import React from "react";
import "./App.css";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Testing, Testing...</h1>
        <LoginButton />
        <LogoutButton /> 
        <Profile /> 
      </div>
    );
  }
}

export default withAuth0(App);
