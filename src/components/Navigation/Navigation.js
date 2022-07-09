import useMediaQuery from "../../hooks/useMediaQuery";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Logo from "../UI/Logo/Logo";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);
  const isDesktop = useMediaQuery("(min-width:896px)");

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className={styles.header}>
      <Logo />
      {user ? (
        <button className={styles.signOut} onClick={handleSignOut}>
          Sign out
        </button>
      ) : isDesktop ? (
        <div className={styles.actions}>
          <Link to="./login">
            <button className={styles.login}>Login</button>
          </Link>

          <Link to="./register">
            <button className={styles.register}>Register </button>
          </Link>
        </div>
      ) : (
        <div className={styles.actions}>
          <Link to="./login">
            <button className={styles.login}>Login</button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navigation;
