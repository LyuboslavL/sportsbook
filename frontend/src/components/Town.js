import { Link } from "react-router-dom";

import classes from "./Town.module.css";

function Town({ town }) {
  const address = "/basketball?key=" + town.name;
  return (
    <li className={classes.town} id={town.id}>
      <Link to={address}>
        <article>
          <img src={town.img} alt="City" />
          <h3>{town.name}</h3>
        </article>
      </Link>
    </li>
  );
}

export default Town;
