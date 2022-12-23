import React, { ChangeEvent, FC, InputHTMLAttributes } from "react"
import * as styles from "./text-input.module.css";

type TextInputProps = {
  value?: string;
  valid?: boolean;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  attrs?: InputHTMLAttributes<HTMLInputElement>
}

const TextInput: FC<TextInputProps> = ({
  value,
  valid = null,
  handleChange,
  attrs = {}
}) => {
  const defaultAttrs = { type: "text" };
  const mergedAttrs = Object.assign({}, defaultAttrs, attrs);
  let stateClass = "";

  if (valid === true) stateClass = styles.textInputValid;
  else if (valid === false) stateClass = styles.textInputError;

  const classes:string = `${styles.textInput} ${stateClass}`;

  return (
    <input
      {...mergedAttrs}
      className={classes}
      value={value}
      onChange={handleChange}
    />
  );
}
export default TextInput;