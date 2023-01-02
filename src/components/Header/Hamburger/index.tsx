import React, { FC, useState } from "react";
import { Link } from "gatsby";
import * as styles from "./hamburger.module.css";

import { mergeClasses } from "../../../helpers";

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
        <div>
            <Link 
              className={styles.HamburgerLink} 
              to="/contact"
              activeClassName={styles.HamburgerLinkActive}
            >Contact</Link>
        </div>
        <div className={styles.HeaderSocial}>
          <a className={styles.socialIcon} href="https://github.com/bjordandev"> 
            <i className={mergeClasses(["fa-brands", "fa-github"])}></i>
          </a>
          <a className={styles.socialIcon} href="https://bjordandev.hashnode.dev/"> 
            <i className={mergeClasses(["fa-brands", "fa-hashnode"])}></i>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Hamburger;


