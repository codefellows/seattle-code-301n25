import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  
  console.log('LogIn: ', isAuthenticated)

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;