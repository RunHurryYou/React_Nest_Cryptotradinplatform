import React, { useState } from 'react';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css'

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className={styles.app_header}>
        <div className={styles.logolink}>
            <Link to="/"><img src={logo} alt="" className={styles.headimg} /></Link>
            <div className={styles.create_line}></div>
        </div>
        <div className={styles.navbar}>
            <div className={styles.link}>
            <Link to="/market">Market</Link>
            </div>
            <div className={styles.link}>
                <Link to="/trade">Trade</Link>
            </div>
            <div className={styles.link}>
                <Link to="/earn">Earn</Link>
            </div>
            <div className={styles.link}>
                <Link to="/about">About</Link>
            </div>
            <div className={styles.link}>
                <Link to="/career">Career</Link>
            </div>
        </div>
        <div className={styles.reg}>
            {isLoggedIn ? (
            <a className={styles.logout} onClick={toggleLogin}>Log Out</a>
            ) : (
            <>  
                <Link to="/login" className={styles.login} onClick={toggleLogin}>Log In</Link>
                <Link to="/signup" className={styles.sign} onClick={toggleLogin}>Sign Up</Link>
            </>
            )}
        </div>   
    </header>
  );
};

export default Header;
