import styles from "./Logo.module.scss";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="../" className={styles.logo}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
