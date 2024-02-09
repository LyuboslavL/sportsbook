import classes from "./ProfileButton.module.css";

import ProfilePicIcon from "./ProfilePicIcon";
import profileLogo from "../assets/profile.png";

function ProfileButton() {
  return (
    <button className={classes.button}>
      <img className={classes.icon} src={profileLogo} alt="Profile Logo" />
    </button>
  );
}

export default ProfileButton;
