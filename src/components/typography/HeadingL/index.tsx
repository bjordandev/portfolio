import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-l.module.css";

import { mergeClasses } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  customClasses?: string;
}

const HeadingL: FC<TypographyProps> = ({
  as: Tag = 'h2',
  children,
  customClasses = ""
}) => {

  return (
    <Tag className={mergeClasses([styles.headingL, customClasses])}>
      { children }
    </Tag>
  );
}

export default HeadingL;