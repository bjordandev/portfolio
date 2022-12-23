import React, { FC, InputHTMLAttributes } from "react"
import * as styles from "./text-input.module.css";

type TextInputProps = {
  value?: string;
  valid?: boolean;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  attrs?: InputHTMLAttributes<HTMLInputElement>
}

const TextInput: FC<TextInputProps> = ({
  value,
  valid = null,
  handleChange,
  attrs = {}
}) => {

  const _attrs = {
    type: "text",
    ...attrs
  };
  
  let stateClass = "";

  if (valid === true) stateClass = styles.textInputValid;
  else if (valid === false) stateClass = styles.textInputError;

  const classes:string = `${styles.textInput} ${stateClass}`;

  return (
    <input 
      {...attrs} 
      className={classes} 
      value={value} 
      onChange={handleChange} 
    />  
  );
}

export default TextInput;