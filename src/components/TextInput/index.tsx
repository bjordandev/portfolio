import React, { ChangeEvent, FC, InputHTMLAttributes } from "react"
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

  let inputStateClassName = "";
  let iconStateClassName = "";

  if (valid === true) {
    inputStateClassName = styles.textInputValid;
    iconStateClassName = styles.iconValid
  } else if (valid === false) {
    inputStateClassName = styles.textInputError;
    iconStateClassName = styles.iconError
  }
  
  const textInputElement = iconName ? (
    <div className={`${styles.textInputWrapper}`}>
      <input
        {...mergedAttrs}
        className={`${styles.textInput} ${inputStateClassName}`}
        value={value}
        onChange={handleChange}
      />
      <i className={`${styles.textInputIcon} ${iconStateClassName} fas fa-${iconName}`} aria-hidden="true"></i>
    </div>
  ) : (
    <input
        {...mergedAttrs}
        className={`${styles.textInput} ${inputStateClassName}`}
        value={value}
        onChange={handleChange}
      />
  )

  return textInputElement
}
export default TextInput;