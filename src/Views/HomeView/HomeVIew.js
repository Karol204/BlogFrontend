import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeView.module.scss";
import BlogPost from "../../components/BlogPost/BlogPost";

const HomeView = () => (
  <div className={styles.wrapper}>
    <section className={styles.baner}>
      <h1 className={styles.banerMotto}>Be brave to explore</h1>
      <p className={styles.banerMottoEnd}>You will not regret it!</p>
    </section>
    <section className={styles.linksWrapper}>
      <Link to="/" className={styles.categoryLink}>
        Travel
      </Link>
      <Link to="/" className={styles.categoryLink}>
        Food
      </Link>
      <Link to="/" className={styles.categoryLink}>
        Culture
      </Link>
    </section>
    <section className={styles.adsSection}>
      <p className={styles.adsSectionParagraph}>reklama</p>
    </section>
    <section className={styles.postsWrapper}>
      <BlogPost />
      <BlogPost />
    </section>
  </div>
);

export default HomeView;
