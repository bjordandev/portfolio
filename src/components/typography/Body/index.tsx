import React, { ElementType, HTMLAttributes, FC} from "react"
import * as styles from "./body.module.css";

import { mergeClasses } from "../../../helpers";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  children?: string;
  customClasses?: string;
}

const BodyText: React.FC<TypographyProps> = ({
  as: Tag = 'p',
  children,
  customClasses = ""
}) => {
  return (
    <Tag className={mergeClasses([styles.bodyText, customClasses])} >
      { children }
    </Tag>
  );
}

export default BodyText;