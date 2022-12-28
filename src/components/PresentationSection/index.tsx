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
        <div style={{marginBottom: '53px'}}></div>
        <BodyText>
          Lorem ipsum dolor sit amet. 
          Qui consequatur modi sit voluptas 
          totam in aspernatur sint 
          et quasi nihil et impedit adipisci 
          sed quis cumque 
          33 iure voluptatum. 
        </BodyText>
        <div style={{marginBottom: '96px'}}></div>
        <ButtonLarge customStyles={{
          width: '100%'
        }}>Learn More</ButtonLarge>
      </div>
      <img src={illustration}
          className={styles.presentationSectionIllustration}>
      </img>
      <span className={styles.presentationSectionBackground}>
      </span>
    </section>
  );
}

export default PresentationSection;