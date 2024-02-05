import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={classes["footer-content"]}>
        <h3>SportsBook</h3>
        <p>
          SportsBook is a place where individuals can book fields or courts to
          play their favorite sport. We cover 4 sports categories and we operate
          in 3 different cities in Bulgaria.
        </p>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <ul className={classes.socials}>
          <li>
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-youtube"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fa fa-linkedin-square"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes["footer-bottom"]}>
        <p>
          copyright &copy; <Link to="/">SportsBook</Link>
        </p>
        <div className={classes["footer-menu"]}>
          <ul className={classes["f-menu"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
