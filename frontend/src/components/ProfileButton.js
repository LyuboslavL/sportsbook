import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { redirect, useRouteLoaderData, Link } from "react-router-dom";

import classes from "./ProfileButton.module.css";
import profileLogo from "../assets/profile.png";

function ProfileButton() {
  const token = localStorage.getItem("token");
  console.log(token);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        // console.log("Signed out successfully");
      })
      .catch((err) => {
        // An error occured
      });

    return redirect("/football");
  };

  return (
    <div className={classes.dropdown}>
      <button className={classes.button}>
        <img className={classes.icon} src={profileLogo} alt="Profile Logo" />
      </button>
      {token && (
        <div className={classes.item}>
          <ul>
            <li>Profile</li>
            <li>Reservations</li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!token && (
        <div className={classes.item}>
          <Link to="/login">Login / Register</Link>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
