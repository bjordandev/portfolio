import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-m.module.css";

import { getCSSVariable } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  color?: string;
}

const HeadingM: React.FC<TypographyProps> = ({
  as: Tag = 'h3',
  children,
  color = getCSSVariable("--theme-color-text")
}) => {
  return (
    <Tag className={styles.headingM} style={{color}}>
      { children }
    </Tag>
  );
}

export default HeadingM;