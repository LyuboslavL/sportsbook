import Place from "./Place";

import classes from "./PlacesList.module.css";

function PlacesList({ places }) {
  return (
    <ul id={classes.places}>
      {places.map((place) => (
        <Place key={place.id} place={place} />
      ))}
    </ul>
  );
}

export default PlacesList;
