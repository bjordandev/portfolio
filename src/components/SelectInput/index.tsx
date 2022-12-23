import React, { FC, ChangeEvent } from "react"
import * as styles from "./select-input.module.css";

type SelectInputProps = {
  options: string[];
  value?: string;
  defaultValue?: string;
  handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  attrs?: React.SelectHTMLAttributes<HTMLSelectElement>;
}

const SelectInput: FC<SelectInputProps> = ({
  options,
  value,
  defaultValue,
  handleChange,
  attrs
}) => {
  const optionsList = options.map(option => (
    <option key={option} value={option}>
      {option}
    </option>
  ))

  const selectInput = (value && handleChange)  ? (
    <select className={styles.selectInput} value={value} onChange={handleChange} {...attrs}>
      {optionsList}
    </select>
  ) : (
    <select className={styles.selectInput} defaultValue={defaultValue || options[0]} {...attrs}>
      {optionsList}
    </select>
  );

  return selectInput;
}


export default SelectInput;