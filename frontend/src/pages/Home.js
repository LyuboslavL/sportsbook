import PageContent from "../components/PageContent";
import coverImg from "../assets/cover_image.jpg";

function HomePage() {
  return (
    <PageContent title="SportsBook">
      <img src={coverImg} alt="Sports" />
      <p>Choose Your Sport</p>
      <p>Your Sport, Your Passion, Your Rules</p>
    </PageContent>
  );
}

export default HomePage;
