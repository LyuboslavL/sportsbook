import classes from "./Town.module.css";

function Town({ town }) {
  // console.log(town.id);
  const onChosenCity = (event) => {
    console.log(event.target.parentNode.parentNode.id);
  };

  return (
    <li className={classes.town} onClick={onChosenCity} id={town.id}>
      <article>
        <img src={town.img} alt="City" />
        <button>
          <h3>{town.name}</h3>
        </button>
      </article>
    </li>
  );
}

export default Town;
