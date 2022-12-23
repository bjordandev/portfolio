import React, { ChangeEvent, FC, InputHTMLAttributes } from "react"
import classnames from "classnames";

import * as styles from "./text-input.module.css";

type TextInputProps = {
  value?: string;
  valid?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  attrs?: InputHTMLAttributes<HTMLInputElement>,
  iconName?: string | null
}

const TextInput: FC<TextInputProps> = ({
  value,
  valid = null,
  handleChange,
  attrs = {},
  iconName = null
}) => {
  const defaultAttrs = { type: "text" };
  const mergedAttrs = Object.assign({}, defaultAttrs, attrs);

  const inputStateClassName = classnames(styles.textInput, {
    [styles.textInputValid]: valid === true,
    [styles.textInputError]: valid === false,
  });

  const iconStateClassName = classnames(styles.textInputIcon, {
    [styles.iconValid]: valid === true,
    [styles.iconError]: valid === false,
  });

  const inputElement = (
    <input
      {...mergedAttrs}
      className={inputStateClassName}
      value={value}
      onChange={handleChange}
    />
  );

  const iconElement = iconName ? (
    <i
      className={`${iconStateClassName} fas fa-${iconName}`}
      aria-hidden="true"
    />
  ) : null;

  return iconName ? (
    <div className={styles.textInputWrapper}>
      {inputElement}
      {iconElement}
    </div>
  ) : inputElement;
}
export default TextInput;