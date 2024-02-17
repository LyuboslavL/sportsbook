import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import logoImg from "../assets/logo3.png";
import ProfileButton from "./ProfileButton";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/basketball"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              &#127936; Basketball
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/football"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              &#9917; Football
            </NavLink>
          </li>
          <li className={classes["centered-logo"]}>
            <NavLink to="/" end>
              <div className={classes.logo}>
                <img src={logoImg} alt="Site logo" />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="volleyball"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              &#127952; Volleyball
            </NavLink>
          </li>
          <li>
            <NavLink
              to="tennis"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              &#127934; Tennis
            </NavLink>
          </li>
        </ul>
      </nav>
      <ProfileButton />
    </header>
  );
}

export default MainNavigation;
