// import { Suspense } from "react";
// import { useLoaderData, json, defer, Await } from "react-router-dom";

"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

import PlacesList from "../components/PlacesList";

function BasketballPage() {
  const basketballPlaces = useLoaderData();

  return <PlacesList places={basketballPlaces} />;
  // return (
  //   <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
  //     <Await resolve={places}>
  //       {(loadedPlaces) => <PlacesList places={loadedPlaces} />}
  //     </Await>
  //   </Suspense>
  // );
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

// async function loadBasketballPlaces() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//     throw json({ message: "Could not load places." }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData.events;
//   }
// }

// export function loader() {
//   return defer({
//     places: loadBasketballPlaces(),
//   });
// }
