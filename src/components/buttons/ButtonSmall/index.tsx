import React, { FC } from "react"
import * as styles from "./button-small.module.css";

type ButtonSmallProps = {
  children?: string;
  customStyles?: React.CSSProperties
  handleClick?: (event: React.MouseEvent<HTMLElement>) => true;
}

const ButtonSmall: FC<ButtonSmallProps> = ({
  children,
  customStyles = {},
  handleClick
}) => {
  return (
    <button 
      style={customStyles}
      className={styles.buttonSmall} 
      onClick={handleClick}>
      { children }
    </button>
  );
}

export default ButtonSmall;