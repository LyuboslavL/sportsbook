import { Link } from "react-router-dom";

import classes from "./Town.module.css";

function Town({ town }) {
  return (
    <li className={classes.town} id={town.id}>
      <Link to="/football">
        <article>
          <img src={town.img} alt="City" />
          <h3>{town.name}</h3>
        </article>
      </Link>
    </li>
  );
}

export default Town;
