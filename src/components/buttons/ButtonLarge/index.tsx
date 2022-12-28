import React, { FC } from "react"
import * as styles from "./button-large.module.css";

type ButtonLargeProps = {
  children?: string;
  customStyles?: React.CSSProperties
  handleClick?: (event: React.MouseEvent<HTMLElement>) => true;
}

const ButtonLarge: FC<ButtonLargeProps> = ({
  children,
  customStyles = {},
  handleClick
}) => {
  return (
    <button
      style = {customStyles}
      className={styles.buttonLarge} 
      onClick={handleClick}>
      { children }
    </button>
  );
}

export default ButtonLarge;