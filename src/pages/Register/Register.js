//styles
import styles from "./Register.module.scss";

//components
import RegisterForm from "./RegisterForm/RegisterForm";
import Logo from "../../components/UI/Logo/Logo";

const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <p>
          Rent best cars from over <span>300</span> companies in Poland.
        </p>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;
