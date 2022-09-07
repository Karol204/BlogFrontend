import React from "react";
import { Link } from "react-router-dom";
import Picture from "../../assets/img/maldives.jpg";
import styles from "./BlogPost.module.scss";

const BlogPost = (props) => (
  <Link to="about" className={styles.singlePost}>
    <img src={Picture} className={styles.postImage} alt="pic" />
    <div className={styles.postContent}>
      <p className={styles.postContentData}>Data</p>
      <h3 className={styles.postContentTitle}>The Mexico Diary, Day 1: Oaxaca</h3>
      <p className={styles.postContentParagraph}>
        Welcome to your blog post. Use this space to connect with your readers and potential
        customers in a way that’s current and interesting. Think of it as an ongoing conversation
        where you can share updates about business, trends, news, and more.
      </p>
    </div>
  </Link>
);

export default BlogPost;
