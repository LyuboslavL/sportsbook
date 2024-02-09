"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";

function FootballPage() {
  const footballPlaces = useLoaderData();

  return <PlacesList places={footballPlaces} />;
}

export default FootballPage;

export async function loader() {
  const querySnapshot = await getDocs(collection(db, "football"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
