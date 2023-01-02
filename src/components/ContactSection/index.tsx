import React, { FC } from "react";
import * as styles from "./contact-section.module.css";

const ContactSection: FC<any> = () => {
  return (
    <section className={styles.contactSection}>
      <a className={styles.contactSectionLink} href="#">Let's work together</a>
    </section>
  );
}

export default ContactSection;