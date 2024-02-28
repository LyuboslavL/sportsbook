"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";

function BasketballPage() {
  const basketballPlaces = useLoaderData();

  return <PlacesList places={basketballPlaces} />;
}

export default BasketballPage;

export async function loader({ request }) {
  const searchParams = new URL(request.url);
  // console.log(searchParams.pathname.includes("Sofia"));

  const querySnapshot = await getDocs(collection(db, "basketball"));

  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  if (searchParams.pathname.includes("Sofia")) {
    data = data.filter((place) => place.city === "Sofia");
  } else if (searchParams.pathname.includes("Plovdiv")) {
    data = data.filter((place) => place.city === "Plovdiv");
  } else if (searchParams.pathname.includes("Varna")) {
    data = data.filter((place) => place.city === "Varna");
  }
  console.log(data);
  return data;
}
