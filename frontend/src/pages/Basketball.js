"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";
import TownsList from "../components/TownsList";

function BasketballPage() {
  const basketballPlaces = useLoaderData();

  return <PlacesList places={basketballPlaces} />;
}

export default BasketballPage;

export async function loader() {
  const querySnapshot = await getDocs(collection(db, "basketball"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
