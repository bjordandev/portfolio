import React, { FC } from "react";
import * as styles from "./presentation-section.module.css";

import illustration from "../../assets/presentation-illustration.png";
import ButtonLarge from "../buttons/ButtonLarge";
import Display from "../typography/Display";
import BodyText from "../typography/Body";

type PresentationSectionProps = {

}

const PresentationSection: FC<PresentationSectionProps> = () => {
  return (
    <section className={styles.presentationSection}>
      <div className={styles.presentationSectionLeft}>
        <Display as="h2">
            HI, I’M JORDAN FRONTEND DEVELOPER
        </Display>
        <div style={{marginBottom: '100px'}}></div>
        <ButtonLarge customStyles={{
          width: '100%'
        }}>Learn More</ButtonLarge>
      </div>
      <span className={styles.presentationSectionBackground}>
      </span>
    </section>
  );
}

export default PresentationSection;