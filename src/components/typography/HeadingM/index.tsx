import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./heading-m.module.css";

import { mergeClasses } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  customClasses?: string;
}

const HeadingM: FC<TypographyProps> = ({
  as: Tag = 'h3',
  children,
  customClasses = ""
}) => {
  return (
    <Tag className={mergeClasses([styles.headingM, customClasses])} >
      { children }
    </Tag>
  );
}

export default HeadingM;