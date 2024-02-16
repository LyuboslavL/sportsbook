"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";
import TownsList from "../components/TownsList";

const TOWNS = [
  {
    id: "Sofia",
    img: "https://i.ytimg.com/vi/zc32qU1qH2c/maxresdefault.jpg",
    name: "Sofia",
  },
  {
    id: "Plovdiv",
    img: "https://www.dianamariscostea.ro/public/uploads/904/conversions/large/PLOVDIV-COPERTA.jpeg",
    name: "Plovdiv",
  },
  {
    id: "Varna",
    img: "https://kongres-magazine.eu/wp-content/uploads/2020/03/varna-bulgaria_1054165976-1.jpg",
    name: "Varna",
  },
];

function BasketballPage() {
  const basketballPlaces = useLoaderData();

  // return <TownsList towns={TOWNS} />;
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
