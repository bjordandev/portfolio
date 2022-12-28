import React, { FC } from "react"
import * as styles from "./button-medium.module.css";

type ButtonMediumProps = {
  children?: string;
  customStyles: React.CSSProperties;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => true;
}

const ButtonMedium: FC<ButtonMediumProps> = ({
  children,
  customStyles = {},
  handleClick
}) => {
  return (
    <button
      style = {customStyles} 
      className={styles.buttonMedium} 
      onClick={handleClick}>
      { children }
    </button>
  );
}

export default ButtonMedium;