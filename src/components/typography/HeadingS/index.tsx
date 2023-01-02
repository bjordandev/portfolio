import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-s.module.css";

import { mergeClasses } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  customClasses?: string;
}

const HeadingS: FC<TypographyProps> = ({
  as: Tag = 'h4',
  children,
  customClasses = ""
}) => {
  return (
    <Tag className={mergeClasses([styles.headingS, customClasses])}>
      { children }
    </Tag>
  );
}

export default HeadingS;