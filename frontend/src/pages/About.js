import PageContent from "../components/PageContent";

import photo from "../assets/Photo.PNG";

function AboutPage() {
  return (
    <PageContent title="About Us">
      <p>We offer a solution for all sports enthusiasts.</p>
      <p>
        Our app allows users to book basketball courts, football pitches, tennis
        courts, and volleyball halls.
      </p>
      <p>Choose the sport you love, gather your friends and book your place.</p>
      <p>
        We operate in <bold>3 cities in Bulgaria</bold> and cover{" "}
        <bold>4 sports</bold>.
      </p>

      <h2>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="" alt="" />
            <div className="container">
              <h2>Lyuboslav Lozanov</h2>
              <img src={photo} alt="Lyuboslav Lozanov" />
              <p className="title">CEO & Founder</p>
              <p>lyuboslav.v.lozanov@gmail.com</p>
              <p>
                <button>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  );
}

export default AboutPage;
