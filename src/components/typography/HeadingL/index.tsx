import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-l.module.css";

import { getCSSVariable } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  color?: string;
}

const HeadingL: FC<TypographyProps> = ({
  as: Tag = 'h2',
  children,
  color = getCSSVariable("--theme-color-text")
}) => {
  return (
    <Tag className={styles.headingL} style={{color}}>
      { children }
    </Tag>
  );
}

export default HeadingL;