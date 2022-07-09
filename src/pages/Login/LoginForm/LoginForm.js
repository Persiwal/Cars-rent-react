import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Input from "../../../components/UI/Input/Input";

import styles from "./LoginForm.module.scss";
import { useEffect } from "react";

const LoginForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/cars");
  }, [user, loading]);

  const handleUsernameInputValue = (value) => {
    setErrorMsg("");
    setUsernameInputValue(value);
  };

  const handlePasswordInputValue = (value) => {
    setErrorMsg("");
    setPasswordInputValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        usernameInputValue,
        passwordInputValue
      );
      navigate("/");
      alert("You are now logged in");
    } catch (err) {
      console.log(err);
      setErrorMsg("Invalid username or password!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Login</h2>
      <span className={styles.invalidInput}>{errorMsg}</span>
      <div className={styles.formElement}>
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          placeholder="Enter username"
          handleValue={handleUsernameInputValue}
          width="wide"
        />
      </div>
      <div className={styles.formElement}>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="Enter password"
          handleValue={handlePasswordInputValue}
          width="wide"
        />
      </div>
      <a href="" className={styles.forgotPassword}>
        Forgot password?
      </a>
      <button type="submit">Login</button>
      <p className={styles.createAccount}>
        Dont have account yet?{" "}
        <Link to="../register">Create new account for free.</Link>
      </p>
    </form>
  );
};

export default LoginForm;
