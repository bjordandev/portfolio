import React, { FC } from "react"
import * as styles from "./header.module.css";

import Hamburger from "./Hamburger";
import HeaderLogo from "./HeaderLogo";

import { mergeClasses } from "../../helpers";

type HeaderProps = {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContent}>
        <HeaderLogo />
        <Hamburger open={false}/>
      </div>
    </header>
  );
}

export default Header;