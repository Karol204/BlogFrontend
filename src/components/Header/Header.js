import React from "react";
import styles from "./Header.module.scss";

import Navigation from "../Navigation/Navigation";

const Header = () => (
  <header className={styles.wrapper}>
    <Navigation className={styles.nav} />
  </header>
);

export default Header;
