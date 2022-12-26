import React, { FC } from "react"
import * as styles from "./header.module.css";

import Hamburger from "./Hamburger";
import ButtonMedium from "../buttons/ButtonMedium";
import HeaderLogo from "./HeaderLogo";

type HeaderProps = {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.Header}>
      <HeaderLogo />
      <Hamburger open={false}/>
      <div className={styles.HeaderContact}>
        <ButtonMedium>Contact Me</ButtonMedium>
      </div>
    </header>
  );
}

export default Header;