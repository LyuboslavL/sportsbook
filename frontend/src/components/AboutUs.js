import classes from "./AboutUs.module.css";

import photo from "../assets/Photo.PNG";

function AboutUs() {
  return (
    <>
      <div className={classes.about}>
        <p>We offer a solution for all sports enthusiasts.</p>
        <p>
          Our app allows users to book basketball courts, football pitches,
          tennis courts, and volleyball halls.
        </p>
        <p>
          Choose the sport you love, gather your friends and book your place.
        </p>
        <p>
          We operate in <strong>3 cities in Bulgaria</strong> and cover{" "}
          <strong>4 sports</strong>.
        </p>
      </div>

      <h2>Our Team</h2>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.card}>
            <img src="" alt="" />
            <div className={classes.container}>
              <h2>Lyuboslav Lozanov</h2>
              <img src={photo} alt="Lyuboslav Lozanov" />
              <p className={classes.title}>CEO & Founder</p>
              <p>lyuboslav.v.lozanov@gmail.com</p>
              <p>
                <button className={classes.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
