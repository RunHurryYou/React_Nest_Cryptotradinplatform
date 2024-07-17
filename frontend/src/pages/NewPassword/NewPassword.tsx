import React, {useState} from "react";
import styles from "./NewPassword.module.scss";
import hide from '../../img/eye-password-hide.svg';
import show from '../../img/eye-password-show.svg';
import page from '../../img/login-page-img.png';


const NewPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <main className={styles.new_password_main}>
      <div className={styles.new_password_page_main}>
      <div className={styles.new_password_block}>
        <form className={styles.new_password_form}>
          <h1>New Password</h1>
          <div className={styles.form_group}>
            <p>New Password</p>
            <input className={styles.form_control} type={showPassword ? "text" : "password"} name="username" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Type Here" required/>
          </div>
          <div className={styles.form_group}>
            <p>Confirm New Password</p>
            <input className={styles.form_control1} type={showPassword ? "text" : "password"} name="Пароль" id="password" placeholder="Type Here" required/>
            <img src={showPassword ? hide : show} alt="toggle password visibility" onClick={togglePasswordVisibility} className={styles.password_toggle} />
          </div>
          <div className={styles.form_group}>
            <button className={styles.save_pass} type="submit">Save New Password</button>
          </div>
        </form>
      </div>
      <img src={page} alt="page" className={styles.page_img}/>
    </div>
    <div className={styles.new_password_footer}>
    <p>©Copyright 2022 All Rights Are Reserved.</p>
    </div>
  </main>
</>)
};

export default NewPassword;