import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./body.module.css";

import { getCSSVariable } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  color?: string;
}

const BodyText: React.FC<TypographyProps> = ({
  as: Tag = 'p',
  children,
  color = getCSSVariable("--theme-color-text")
}) => {
  return (
    <Tag className={styles.bodyText} style={{color}}>
      { children }
    </Tag>
  );
}

export default BodyText;