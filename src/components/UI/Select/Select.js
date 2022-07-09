import { useState, useRef, useEffect } from "react";

import styles from "./Select.module.scss";

const Select = ({ title, options, id, name, handleValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [currentTitle, setCurrentTitle] = useState(value ? value : title);
  const [isFirstPageLoad, setIsFirstPageLoad] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        openHandler();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    handleValue(value);
    setCurrentTitle(value ? value : title);
  }, [value]);

  const openHandler = () => {
    setIsOpen((prevState) => !prevState);
    setIsFirstPageLoad(false);
  };

  const valueChangeHandler = (value) => {
    setValue(value);
    openHandler();
  };

  const mappedOptions = options.map((option) => {
    return (
      <div
        className={styles.option}
        key={Math.random()}
        onClick={() => valueChangeHandler(option)}
      >
        <input
          type="radio"
          className={styles.radio}
          id={id.toLowerCase()}
          name={name}
        />
        <label htmlFor={name.toLowerCase()}>{option}</label>
      </div>
    );
  });

  return (
    <div
      className={`${styles.wrapper} ${isOpen && styles.active} ${
        mappedOptions.length === 0 && styles.disabled
      }`}
      ref={ref}
    >
      <h3 className={styles.header} onClick={openHandler}>
        {currentTitle}
      </h3>
      <div
        className={`${styles.optionsList} ${
          isOpen ? styles.active : isFirstPageLoad ? "" : styles.closed
        }`}
      >
        {mappedOptions}
      </div>
    </div>
  );
};

export default Select;
