import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-xl.module.css";

import { getCSSVariable } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  color?: string;
}

const HeadingXL: FC<TypographyProps> = ({
  as: Tag = 'h1',
  children,
  color = getCSSVariable("--theme-color-text")
}) => {
  return (
    <Tag className={styles.headingXL} style={{color}}>
      { children }
    </Tag>
  );
}

export default HeadingXL;