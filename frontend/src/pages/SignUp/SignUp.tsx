import React, {useState} from "react";
import styles from "./SignUp.module.scss";
import hide from '../../img/eye-password-hide.svg';
import show from '../../img/eye-password-show.svg';
import page from '../../img/login-page-img.png';
import { Link } from 'react-router-dom';


const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <main className={styles.signUp}>
      <div className={styles.login_page_main}>
      <div className={styles.login_block}>
        <form className={styles.login_form}>
          <h1>Sign Up</h1>
          <div className={styles.form_group_name}>
            <div className={styles.form_name}>
              <p>First Name</p>
              <input className={styles.form_control2} type="text" name="username" pattern="^[a-zA-Z0-9_.-]*$" id="firstName" placeholder="Type Here" required/>
            </div>
            <div className={styles.form_name}>
              <p>Last Name</p>
              <input className={styles.form_control2} type="text" name="username" pattern="^[a-zA-Z0-9_.-]*$" id="firstName" placeholder="Type Here" required/>
            </div>
          </div>
          <div className={styles.form_group}>
            <p>Phone</p>
            <input className={styles.form_control1} type="text" name="username" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Type Here" required/>
          </div>
          <div className={styles.form_group}>
            <p>Email</p>
            <input className={styles.form_control1} type="text" name="username" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Type Here" required/>
          </div>
          <div className={styles.form_group}>
            <p>Password</p>
            <input className={styles.form_control} type={showPassword ? "text" : "password"} name="Пароль" id="password" placeholder="Type Here" required/>
            <img src={showPassword ? hide : show} alt="toggle password visibility" onClick={togglePasswordVisibility} className={styles.password_toggle} />
          </div>
          <div className={styles.form_group}>
            <button className={styles.create_account} type="submit">Sign Up</button>
          </div>
        </form>
        <div className={styles.login_page_signup_block}>
          <p className={styles.login_dont_have}>Have an Account?</p>
          <Link to="/login" className={styles.login_signup_link}>Login Here</Link>
        </div>
      </div>
      <img src={page} alt="page" className={styles.page_img}/>
    </div>
    <div className={styles.login_footer}>
    <p>©Copyright 2022 All Rights Are Reserved.</p>
    </div>
    </main>
    </>
  );
};

export default SignUp;