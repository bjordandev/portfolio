import React, { FC } from "react";
import * as styles from "./introduction-section.module.css";

import HeadingXL from "../typography/HeadingXL";

import expressIcon from "../../assets/icons/express.svg";
import nodeIcon from "../../assets/icons/nodejs.svg";
import postgreIcon from "../../assets/icons/postgresql.svg";
import reactIcon from "../../assets/icons/react.svg";
import redisIcon from "../../assets/icons/redis.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";

const IntroductionSection: FC<any> = () => {
  return (
    <section className={styles.introductionSection}>
      <header className={styles.introductionSectionHeading}>
        <HeadingXL as="h2">Here is my toolbox</HeadingXL>
      </header>
      <ul className={styles.technologyGrid}>
        <li className={styles.technologyItem}>
          <img className={styles.technologyIcon} src={typescriptIcon} alt="" />
          <span className={styles.technologyName}>Typescript</span>
        </li>
        <li className={styles.technologyItem}>
          <img className={styles.technologyIcon} src={nodeIcon} alt="" />
          <span className={styles.technologyName}>NodeJS</span>
        </li>
        <li className={styles.technologyItem}>
          <img className={styles.technologyIcon} src={reactIcon} alt="" />
          <span className={styles.technologyName}>ReactJS</span>
        </li>
        <li className={styles.technologyItem}>
          <img className={styles.technologyIcon} src={expressIcon} alt="" />
          <span className={styles.technologyName}>ExpressJS</span>
        </li>
        <li className={styles.technologyItem}>
          <img className={styles.technologyIcon} src={redisIcon} alt="" />
          <span className={styles.technologyName}>Redis</span>
        </li>
        <li className={styles.technologyItem}>
          <img className={styles.technologyIcon} src={postgreIcon} alt="" />
          <span className={styles.technologyName}>PostgreSQL</span>
        </li>
      </ul>
    </section>
  );
}

export default IntroductionSection;