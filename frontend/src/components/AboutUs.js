import classes from "./AboutUs.module.css";

import Lyubo from "../assets/Lyubo.jpg";
import Wifey from "../assets/Wifey.jpg";
import Pupesh from "../assets/Pupesh.jpg";

function AboutUs() {
  return (
    <>
      <div className={classes.about}>
        <h1>About Us</h1>
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
            <img src={Lyubo} alt="Lyuboslav Lozanov" />
            <div className={classes.container}>
              <h2>Lyuboslav Lozanov</h2>
              <p className={classes.title}>CEO & Founder</p>
              <p>A bald guy with a passion for sports.</p>
              <p>lyuboslav.v.lozanov@gmail.com</p>
              <p>
                <button className={classes.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.card}>
            <img src={Pupesh} alt="Pupesh" />
            <div className={classes.container}>
              <h2>Pupesh (aka Melon)</h2>
              <p className={classes.title}>President</p>
              <p>Furry fella in charge of eating all the food in the world.</p>
              <p>pupesh_the_dog@gmail.com</p>
              <p>
                <button className={classes.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes.card}>
            <img src={Wifey} alt="Victoria Lozanova" />
            <div className={classes.container}>
              <h2>Victoria Lozanova</h2>
              <p className={classes.title}>The REAL Boss</p>
              <p>The real boss hiding in the shadows.</p>
              <p>viktoria.lozanova@gmail.com</p>
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
