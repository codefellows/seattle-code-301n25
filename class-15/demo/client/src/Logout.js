// this component is copied/pasted from the Auth0 Docs
// feel free to refactor if it makes sense to you and it works

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;