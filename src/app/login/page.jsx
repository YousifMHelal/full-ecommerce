import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

const login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>login with your email</h2>
      <form className={styles.form} action="">
        <input className={styles.input} type="text" placeholder="Your Email" />
        <input
          className={styles.input}
          type="password"
          placeholder="Your Password"
        />
        <div className={styles.registration}>
          <p className={styles.text}>{`Don't`} have an email ?</p>
          <Link className={styles.link} href="/registration">
            Sign up
          </Link>
        </div>
        <button className={styles.btn} type="submit">
          login
        </button>
        <div className={styles.google}>
          or login in with : <FaFacebookF className={styles.go} />
        </div>
      </form>
    </div>
  );
};

export default login;
