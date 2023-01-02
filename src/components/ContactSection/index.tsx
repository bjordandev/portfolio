import React, { FC } from "react";
import { Link } from "gatsby";
import * as styles from "./contact-section.module.css";

const ContactSection: FC<any> = () => {
  return (
    <section className={styles.contactSection}>
      <Link 
        className={styles.contactSectionLink} 
        to="/contact">Let's work together</Link>
    </section>
  );
}

export default ContactSection;