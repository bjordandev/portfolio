import React, { FC } from "react"
import * as styles from "./button-medium.module.css";

type ButtonMediumProps = {
  children?: string;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => true;
}

const ButtonMedium: FC<ButtonMediumProps> = ({
  children,
  handleClick
}) => {
  return (
    <button className={styles.buttonMedium} onClick={handleClick}>
      { children }
    </button>
  );
}

export default ButtonMedium;