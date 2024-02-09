"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";

function TennisPage() {
  const tennisPlaces = useLoaderData();

  return <PlacesList places={tennisPlaces} />;
}

export default TennisPage;

export async function loader() {
  const querySnapshot = await getDocs(collection(db, "tennis"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
