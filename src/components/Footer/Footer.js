import React from "react";
import styles from "./Footer.module.scss";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import pinterest from "../../assets/img/pinterest.png";
import pic from "../../assets/img/maldives.jpg";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className={styles.socials}>
      <a href="/">
        <img src={facebook} alt="social" /> <span>Facebook</span>
      </a>
      <a href="/">
        <img src={instagram} alt="social" />
        <span>Instagram</span>
      </a>
      <a href="/">
        <img src={pinterest} alt="social" />
        <span>Pinterest</span>
      </a>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.photos}>
        <img src={pic} alt="pic" />
        <img src={pic} alt="pic" />
        <img src={pic} alt="pic" />
        <img src={pic} alt="pic" />
      </div>
      <div className={styles.aboutWrapper}>
        <div className={styles.about}>
          <h3>About me!</h3>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
            “Edit Text” or double click me to add your own content and make changes to the font.
          </p>
          <Link to="/about">Read more </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
