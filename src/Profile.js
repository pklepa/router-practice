import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Alo from Profile.js</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Profile;
