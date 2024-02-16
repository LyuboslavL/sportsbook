import classes from "./Town.module.css";

function Town({ town }) {
  return (
    <li className={classes.town}>
      <article>
        <img src={town.img} alt="City" />
        <div>
          <h3>{town.name}</h3>
        </div>
      </article>
    </li>
  );
}

export default Town;
