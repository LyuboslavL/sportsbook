import classes from "./Place.module.css";

function Place({ place }) {
  return (
    <li className={classes.place}>
      <article>
        <img src={place.img} alt="Sports Field" />
        <div>
          <h3>{place.name}</h3>
          <p className={classes["place-price"]}>{place.price} BGN / hour</p>
          <p className={classes["place-address"]}>{place.address}</p>
        </div>
      </article>
    </li>
  );
}

export default Place;
