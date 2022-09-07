import React from "react";
import { Link } from "react-router-dom";
import authorImg from "../../assets/img/blogAuthor.jpg";
import styles from "./AboutView.module.scss";

const AboutView = () => (
  <section className={styles.wrapper}>
    <h1 className={styles.header}>About Me!</h1>
    <div className={styles.aboutWrapper}>
      <img className={styles.aboutImg} src={authorImg} alt="blog author" />
      <div className={styles.aboutDescriptionWrapper}>
        <h2>MEET MIKAYLA DELLINGER</h2>
        <p>
          About Me I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just
          click “Edit Text” or double click me to add your own content and make changes to the font.
          Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to
          tell a story and let your users know a little more about you. ​ This is a great space to
          write long text about your company and your services. You can use this space to go into a
          little more detail about your company. Talk about your team and what services you provide.
          Tell your visitors the story of how you came up with the idea for your business and what
          makes you different from your competitors. Make your company stand out and show your
          visitors who you are. Contact Me: Info@mysite.com
        </p>
      </div>
    </div>
  </section>
);

export default AboutView;
