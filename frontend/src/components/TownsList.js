import Town from "./Town";

import classes from "./TownsList.module.css";

function TownsList({ towns }) {
  console.log(towns);
  return (
    <ul id={classes.towns}>
      {towns.map((town) => (
        <Town key={town.id} town={town} />
      ))}
    </ul>
  );
}

export default TownsList;
