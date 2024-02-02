import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={(isActive) => (isActive ? classes.active : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/basketball"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              Basketball
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/football"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              Football
            </NavLink>
          </li>
          <li>
            <NavLink
              to="volleyball"
              className={(isActive) => (isActive ? classes.active : undefined)}
            >
              Volleyball
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
