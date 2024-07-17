import React from "react";
import styles from "./Blog.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Blog: React.FC = () => {
  
  return (
    <>
      <Header></Header>
      <main className={styles.blog}>
          Blog Component
      </main>
      <Footer></Footer>
    </>
  )
};

export default Blog;