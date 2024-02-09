"use client";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

function TennisPage() {
  loader();

  return <h1>Tennis</h1>;
}

export default TennisPage;

async function loader() {
  const querySnapshot = await getDocs(collection(db, "tennis"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  console.log(data);
}
