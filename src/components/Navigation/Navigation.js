import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.wrapper}>
      <li className={styles.navItem}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.navItemLinkActive : styles.navItemLink)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.navItemLinkActive : styles.navItemLink)}
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.navItemLinkActive : styles.navItemLink)}
          to="/my-blog"
        >
          My Blog
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.navItemLinkActive : styles.navItemLink)}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
