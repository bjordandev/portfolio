import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-s.module.css";

import { getCSSVariable } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  color?: string;
}

const HeadingS: React.FC<TypographyProps> = ({
  as: Tag = 'h4',
  children,
  color = getCSSVariable("--theme-color-text")
}) => {
  return (
    <Tag className={styles.headingS} style={{color}}>
      { children }
    </Tag>
  );
}

export default HeadingS;