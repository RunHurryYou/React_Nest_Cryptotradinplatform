import React from "react";
import styles from "./ForgivePassword.module.scss";
import page from '../../img/login-page-img.png';


const ForgivePassword: React.FC = () => {

  return (
      <>
        <main className={styles.forgive_main}>
        <div className={styles.forgive_page_main}>
        <div className={styles.forgive_block}>
          <form className={styles.forgive_form}>
            <h1>Forgot Password</h1>
            <div className={styles.form_group}>
              <p>Email or Phone</p>
              <input className={styles.form_control} type="text" name="username" pattern="^[a-zA-Z0-9_.-]*$" id="username" placeholder="Type Here" required/>
              <p className={styles.ver_code}>Send Code</p>
            </div>
            <div className={styles.form_group}>
              <p>Verification Code</p>
              <input className={styles.form_control1} type="password" name="Пароль" id="password" placeholder="Type Here" required/>
            </div>
            <div className={styles.form_group}>
              <button className={styles.submit_code} type="submit">Submit Code</button>
            </div>
          </form>
        </div>
        <img src={page} alt="page" className={styles.page_img}/>
      </div>
      <div className={styles.forgive_footer}>
      <p>©Copyright 2022 All Rights Are Reserved.</p>
      </div>
    </main>
  </>
  );
};

export default ForgivePassword;