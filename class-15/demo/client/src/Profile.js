// this component is copied/pasted from the Auth0 Docs

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Content from "./Content";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log("user: ", user);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Content />
      </div>
    )
  );
};

export default Profile;