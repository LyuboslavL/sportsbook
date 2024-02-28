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

export async function loader({ request }) {
  const searchParams = new URL(request.url);

  const querySnapshot = await getDocs(collection(db, "football"));
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

  return data;
}
