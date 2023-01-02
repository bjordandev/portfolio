import React, { FC, useState } from "react";
import { Link } from "gatsby";
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
        <Link 
          className={styles.HamburgerLink} 
          to="/contact"
          activeClassName={styles.HamburgerLinkActive}
          >Contact</Link>
      </nav>
    </>
  )
}

export default Hamburger;


