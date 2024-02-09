import classes from "./ProfileButton.module.css";

import ProfilePicIcon from "./ProfilePicIcon";

function ProfileButton() {
  return (
    <button className={classes.button}>
      <span classname={classes.icon}>
        <ProfilePicIcon />
      </span>
    </button>
  );
}

export default ProfileButton;
