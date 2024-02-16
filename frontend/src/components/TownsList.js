import Town from "./Town";

import classes from "./TownsList.module.css";

function TownsList({ towns }, proceed, chosenCity) {
  const onChosenCity = (event) => {
    proceed = true;
    chosenCity = event.target.key;
  };

  return (
    <ul id={classes.towns}>
      {towns.map((town) => (
        <Town key={town.id} town={town} onClick={onChosenCity} />
      ))}
    </ul>
  );
}

export default TownsList;
