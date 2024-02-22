import Town from "./Town";

import classes from "./TownsList.module.css";

function TownsList({ towns }, proceed, chosenCity) {
  const onChosenCity = (event) => {
    console.log(event.target);
  };

  return (
    <ul id={classes.towns}>
      {towns.map((town) => (
        <Town town={town} onClick={onChosenCity} key={town.id} />
      ))}
    </ul>
  );
}

export default TownsList;
