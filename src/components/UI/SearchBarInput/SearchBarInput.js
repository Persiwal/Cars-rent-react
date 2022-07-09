import classes from "./SearchBarInput.module.scss";
import magnifierIcon from "../../../assets/icons/magnifier-icon.png";
import xIcon from "../../../assets/icons/x-icon.svg";

const SearchBarInput = (props) => {
  const handleInputValue = (e) => {
    props.valueHandler(e.target.value);
  };

  const handleInputClear = (e) => {
    props.valueHandler("");
  };

  return (
    <div className={classes.wrapper}>
      <input
        className={classes.input}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleInputValue}
        value={props.value}
      />
      {props.renderMagnifier &&
        (!props.value ? (
          <img className={classes.icon} src={magnifierIcon} alt="" />
        ) : (
          <img
            className={classes.icon}
            src={xIcon}
            onClick={handleInputClear}
            alt="clear input icon"
          />
        ))}
    </div>
  );
};

export default SearchBarInput;
