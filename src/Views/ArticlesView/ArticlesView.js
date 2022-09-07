import React from "react";
import styles from "./ArticlesView.module.scss";
import BlogPost from "../../components/BlogPost/BlogPost";

const ArticlesView = () => (
  <section className={styles.postsWrapper}>
    <h1>Welcome on my blog</h1>
    <BlogPost />
    <BlogPost />
  </section>
);

export default ArticlesView;
