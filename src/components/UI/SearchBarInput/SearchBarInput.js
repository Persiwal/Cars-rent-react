//styles
import styles from "./SearchBarInput.module.scss";

//icons
import magnifierIcon from "../../../assets/icons/magnifier-icon.png";
import xIcon from "../../../assets/icons/x-icon.svg";

const SearchBarInput = ({
  type,
  placeholder,
  value,
  valueHandler,
  renderMagnifier,
}) => {
  const handleInputValue = (e) => {
    valueHandler(e.target.value);
  };

  const handleInputClear = (e) => {
    valueHandler("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={handleInputValue}
        value={value}
      />
      {renderMagnifier &&
        (!value ? (
          <img className={styles.icon} src={magnifierIcon} alt="" />
        ) : (
          <img
            className={styles.icon}
            src={xIcon}
            onClick={handleInputClear}
            alt="clear input icon"
          />
        ))}
    </div>
  );
};

export default SearchBarInput;
