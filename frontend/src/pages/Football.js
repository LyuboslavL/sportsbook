import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import PlacesList from "../components/PlacesList";

const DUMMY_PLACES = [
  {
    address: "Alexander Malinov 54",
    id: "eeee",
    img: "https://scontent.fvar1-1.fna.fbcdn.net/v/t1.6435-9/71579602_3093965744009337_1327468086458056704_n.jpg?stp=c0.154.2048.1069a_dst-jpg_s843x403&_nc_cat=111&ccb=1-7&_nc_sid=300f58&_nc_ohc=VXY0a29LA7YAX8SfAIJ&_nc_ht=scontent.fvar1-1.fna&oh=00_AfB4Ux9TJZ5svllYa5EFsz-5IXr6gkZ899in7sFUpqsKEg&oe=65EAB2E2",
    name: "Olema Playground",
    price: 100,
  },
  {
    address: "VSU Lyuben Karavelov",
    id: "qqqq",
    img: "https://www.vambos.com/uploads/bg_/fields/65/%D0%97%D0%B0%D0%BA%D1%80%D0%B8%D1%82%20%D1%82%D0%B5%D1%80%D0%B5%D0%BD%20%D0%BC%D0%B8%D0%BD%D0%B8-%D1%84%D1%83%D1%82%D0%B1%D0%BE%D0%BB%20%D0%A1%D0%BE%D1%84%D0%B8%D1%8F%20%D0%B8%D0%B7%D0%BA%D1%83%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%B0%20%D1%82%D1%80%D0%B5%D0%B2%D0%B0.jpg",
    name: "Winbet Arena",
    price: 100,
  },
  {
    address: "Studentski Grad 12",
    id: "rrrr",
    img: "https://miridrujba.com/img-6.jpg",
    name: "Peace & Friendship",
    price: 70,
  },
  {
    address: "bul. Kliment Ohridski 83",
    id: "wwww",
    img: "https://vlvsport.com/wp-content/galleries/football/img_0599.jpg",
    name: "Malinova Dolina",
    price: 80,
  },
];

function FootballPage() {
  const { places } = useLoaderData();

  return <PlacesList places={DUMMY_PLACES} />;
}

export default FootballPage;

async function loadFootballPlaces() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not load places." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    places: loadFootballPlaces(),
  });
}
