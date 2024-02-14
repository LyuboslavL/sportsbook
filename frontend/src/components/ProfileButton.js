import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { redirect, useRouteLoaderData, NavLink } from "react-router-dom";

import classes from "./ProfileButton.module.css";
import profileLogo from "../assets/profile.png";

function ProfileButton() {
  // const [authToken, setToken] = useState("");

  const token = localStorage.getItem("token");

  // if (token) {
  //   setToken(token);
  // }

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
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/reservations">Reservations</NavLink>
            </li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!token && (
        <div className={classes.item}>
          <NavLink to="/login">Login / Register</NavLink>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
