import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, toggleValue, checked }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label}>{label}</label>
      <input
        type="checkbox"
        name={label}
        onClick={toggleValue}
        checked={checked}
      />
    </div>
  );
};

export default Checkbox;
