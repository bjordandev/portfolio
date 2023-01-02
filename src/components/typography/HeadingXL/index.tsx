import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-xl.module.css";

import { mergeClasses } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  customClasses?: string;
}

const HeadingXL: FC<TypographyProps> = ({
  as: Tag = 'h1',
  children,
  customClasses = ""
}) => {
  return (
    <Tag className={mergeClasses([styles.headingXL, customClasses])}>
      { children }
    </Tag>
  );
}

export default HeadingXL;