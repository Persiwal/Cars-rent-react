import { useState, useEffect } from "react";

import styles from "./Input.module.scss";

const Input = ({ type, placeholder, step, min, max, width, handleValue }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    handleValue(value);
  }, [value]);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      type={type}
      className={`${styles.input} ${
        width === "wide" ? styles.wide : styles.short
      }`}
      placeholder={placeholder}
      step={step}
      min={min}
      max={max}
      onChange={handleValueChange}
    />
  );
};

export default Input;
