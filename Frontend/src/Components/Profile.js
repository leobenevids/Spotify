import React from "react";
import { useAuth } from "../Providers/Auth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <>
      <hr />
      <p>Profile</p>
      <div>Olá, {user.username}</div>
    </>
  );
};

export default Profile;
