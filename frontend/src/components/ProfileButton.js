import classes from "./ProfileButton.module.css";
import profileLogo from "../assets/profile.png";

import { checkTokenLoader } from "../util/auth";

function ProfileButton() {
  const token = checkTokenLoader();

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
          <button>Logout</button>
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
