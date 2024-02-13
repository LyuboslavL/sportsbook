import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { redirect } from "react-router-dom";

import classes from "./ProfileButton.module.css";
import profileLogo from "../assets/profile.png";

import { checkTokenLoader } from "../util/auth";

function ProfileButton() {
  const token = checkTokenLoader();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        redirect("/");
        console.log("Signed out successfully");
      })
      .catch((err) => {
        // An error occured
      });
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
          <button>Login / Register</button>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
