import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import PlacesList from "../components/PlacesList";

// const DUMMY_PLACES = [
//   {
//     id: "1111",
//     name: "Arena Sofia",
//     img: "https://sportenkalendar.bg/uploads/pages/zala-tsska-63a72b3037b23339097506.jpg",
//     price: "60.00 BGN / hour",
//     address: "bul. Tsarigradsko Shose 114",
//   },
//   {
//     id: "2222",
//     name: "Lyulin Court",
//     img: "https://sport.stgeorgeschool.eu/wp-content/uploads/2021/10/DSC_3872.jpg",
//     price: "40.00 BGN / hour",
//     address: "bul. Slivnitsa 114",
//   },
//   {
//     id: "3333",
//     name: "Mladost",
//     img: "https://www.bgbasket.com/pictures/pic_big/gallery/Arenas/Lokomotiv%20Hall%20Sofia.jpg",
//     price: "55.00 BGN / hour",
//     address: "bul. Alexander Malinov 23",
//   },
//   {
//     id: "4444",
//     name: "NSA",
//     img: "https://nalb.bg/wp-content/uploads/2021/08/%D0%A3%D0%B8%D0%BD%D0%B1%D0%B5%D1%82-%D0%90%D1%80%D0%B5%D0%BD%D0%B0.jpg",
//     price: "60.00 BGN / hour",
//     address: "Studentski grad 13",
//   },
// ];

function BasketballPage() {
  const { places } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={places}>
        {(loadedPlaces) => <PlacesList places={loadedPlaces} />}
      </Await>
    </Suspense>
  );
}

export default BasketballPage;

async function loadBasketballPlaces() {
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
    places: loadBasketballPlaces(),
  });
}
