//styles
import styles from "./Logo.module.scss";

//routing
import { Link } from "react-router-dom";

//images
import logo from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="../" className={styles.logo}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
