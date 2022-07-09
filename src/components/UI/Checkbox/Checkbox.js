import styles from "./Checkbox.module.scss";

const Checkbox = (props) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="checkbox"
        name={props.label}
        onClick={props.toggleValue}
        checked={props.checked}
      />
    </div>
  );
};

export default Checkbox;
