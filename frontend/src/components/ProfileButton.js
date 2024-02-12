import classes from "./ProfileButton.module.css";

import profileLogo from "../assets/profile.png";

function ProfileButton() {
  return (
    <div className={classes.dropdown}>
      <button className={classes.button}>
        <img className={classes.icon} src={profileLogo} alt="Profile Logo" />
      </button>
      <div className={classes.item}>
        <ul>
          <li>Profile</li>
          <li>Reservations</li>
        </ul>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default ProfileButton;
