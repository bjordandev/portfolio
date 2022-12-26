import React, { FC, useState } from "react";
import * as styles from "./hamburger.module.css";


type HamburgerProps = {

}

const Hamburger: FC<HamburgerProps> = () => {
  const [open, setOpen] = useState(false);

  let openClass = open ? styles.HamburgerNavOpen : "";

  function handleClick() {
    setOpen(open => !open);
  }

  return (
    <>
      <button onClick={handleClick} className={styles.Hamburger}>
        {open ?
          <i className={`${styles.HamburgerIcon} fa-solid fa-xmark`}></i> : 
          <i className={`${styles.HamburgerIcon} fa-solid fa-bars`}></i> 
        }
      </button>
      <nav className={`${styles.HamburgerNav} ${openClass}`}>
        <a className={styles.HamburgerLink} href="#">Hello</a>
        <a className={styles.HamburgerLink} href="#">Toto</a>
        <a className={styles.HamburgerLink} href="#">Hello</a>
      </nav>
    </>
  )
}

export default Hamburger;


