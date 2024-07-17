import React from "react";
import styles from "./Career.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Career: React.FC = () => {
  
  return (
    <>
    <Header></Header>
    <main className={styles.career}>
        Career Component
    </main>
    <Footer></Footer>
    </>
    )
};

export default Career;