import React, { FC } from "react"
import * as styles from "./button-small.module.css";

type ButtonSmallProps = {
  children?: string;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => true;
}

const ButtonSmall: FC<ButtonSmallProps> = ({
  children,
  handleClick
}) => {
  return (
    <button className={styles.buttonSmall} onClick={handleClick}>
      { children }
    </button>
  );
}

export default ButtonSmall;