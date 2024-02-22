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

function CitiesPage() {
  const cityPickHandler = () => {
    console.log("clicked");
  };

  return <TownsList towns={TOWNS} onClick={cityPickHandler} />;
}

export default CitiesPage;
