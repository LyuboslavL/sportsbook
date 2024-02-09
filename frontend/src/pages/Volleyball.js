"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";

function VolleyballPage() {
  const volleyballPlaces = useLoaderData();

  return <PlacesList places={volleyballPlaces} />;
}

export default VolleyballPage;

export async function loader() {
  const querySnapshot = await getDocs(collection(db, "volleyball"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
