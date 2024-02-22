import Town from "./Town";

import classes from "./TownsList.module.css";

function TownsList({ towns }) {
  return (
    <ul id={classes.towns}>
      {towns.map((town) => (
        <Town town={town} key={town.id} />
      ))}
    </ul>
  );
}

export default TownsList;
