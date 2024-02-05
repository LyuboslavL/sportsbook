import PageContent from "../components/PageContent";
import coverImg from "../assets/cover_image.jpg";

function HomePage() {
  return (
    <PageContent title="SportsBook">
      <img src={coverImg} alt="Sports" />
      <h2>Your Sport, Your Passion, Your Rules</h2>
      <p>
        Find and book a place, gather your team and enjoy your favorite sport.
      </p>
    </PageContent>
  );
}

export default HomePage;
