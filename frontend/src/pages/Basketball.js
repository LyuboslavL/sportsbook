"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";

function BasketballPage() {
  const basketballPlaces = useLoaderData();

  return <PlacesList places={basketballPlaces} />;
}

export default BasketballPage;

export async function loader({ request }) {
  const searchParams = new URL(request.url);
  console.log(searchParams.pathname.includes("Sofia"));
  console.log(searchParams.pathname);

  const querySnapshot = await getDocs(collection(db, "basketball"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return data;
}
