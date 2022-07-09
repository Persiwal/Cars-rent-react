import LoginForm from "./LoginForm/LoginForm";
import Logo from "../../components/UI/Logo/Logo";
import styles from "./Login.module.scss";

const Login = () => {
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
      <LoginForm />
    </div>
  );
};

export default Login;
