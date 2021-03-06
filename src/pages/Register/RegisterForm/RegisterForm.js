//hooks
import { useState, useEffect } from "react";

//styles
import styles from "./RegisterForm.module.scss";

//components
import Input from "../../../components/UI/Input/Input";

//routing
import { Link, useNavigate } from "react-router-dom";

//authentication
import { auth } from "../../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!passwordInputValue.match(/.{5,}/) && passwordInputValue.length > 0) {
        setIsPasswordValid(false);
      } else {
        setIsPasswordValid(true);
      }
      if (
        !emailInputValue.match(/^.+@.{2,5}\..{2,3}/i) &&
        emailInputValue.length > 0
      ) {
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [passwordInputValue, emailInputValue]);

  const handlePasswordInputValue = (value) => {
    setPasswordInputValue(value);
    console.log(isEmailValid);
    console.log(isPasswordValid);
  };

  const handleEmailInputValue = (value) => {
    setEmailInputValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          emailInputValue,
          passwordInputValue
        );
        navigate("../login");
        alert("Sucessfully registered! You can login now.");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Register</h2>
        <div className={styles.formElement}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="Enter email"
            handleValue={handleEmailInputValue}
            width="wide"
          />
          {!isEmailValid && (
            <span className={styles.invalidInput}>
              Please insert valid email adress
            </span>
          )}
        </div>
        <div className={styles.formElement}>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            placeholder="Enter password"
            handleValue={handlePasswordInputValue}
            width="wide"
          />
          {!isPasswordValid && (
            <span className={styles.invalidInput}>
              Password should be at least 5 characters long
            </span>
          )}
        </div>
        <button type="submit">Register</button>
        <p>
          Already have account? <Link to="../login">Click here to login.</Link>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
