import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./display.module.css";

import { getCSSVariable } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  color?: string;
}

const DisplayText: React.FC<TypographyProps> = ({
  as: Tag = 'h1',
  children,
  color = getCSSVariable("--theme-color-text")
}) => {
  return (
    <Tag className={styles.displayText} style={{color}}>
      { children }
    </Tag>
  );
}

export default DisplayText;