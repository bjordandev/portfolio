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
        <nav className={styles.HeaderSocial}>
          <a className={styles.socialIcon} href="https://github.com/bjordandev"> 
            <i className={mergeClasses(["fa-brands", "fa-github"])}></i>
          </a>
          <a className={styles.socialIcon} href="https://bjordandev.hashnode.dev/"> 
            <i className={mergeClasses(["fa-brands", "fa-hashnode"])}></i>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;