import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <footer>
        <div class={classes.social}>
          <a href="#">
            <i class="icon ion-social-instagram"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-snapchat"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-twitter"></i>
          </a>
          <a href="#">
            <i class="icon ion-social-facebook"></i>
          </a>
        </div>
        <ul class={classes["list-inline"]}>
          <li class={classes["list-inline-item"]}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li class={classes["list-inline-item"]}>
            <NavLink to="/">About</NavLink>
          </li>
          <li class={classes["list-inline-item"]}>
            <NavLink to="/">Terms</NavLink>
          </li>
          <li class={classes["list-inline-item"]}>
            <NavLink to="/">Privacy Policy</NavLink>
          </li>
        </ul>
        <p class={classes.copywright}>SportsBook © 2024</p>
      </footer>
    </div>
  );
}

export default Footer;
