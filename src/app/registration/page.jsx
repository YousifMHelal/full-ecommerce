import Link from 'next/link';
import styles from './registration.module.css'
import React from 'react'
import { FaFacebookF } from 'react-icons/fa';

const registration = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create a new email</h2>
      <form className={styles.form} action="">
        <input className={styles.input} type="text" placeholder="Your Name" />
        <input className={styles.input} type="text" placeholder="Your Email" />
        <input
          className={styles.input}
          type="password"
          placeholder="Your Password"
        />
        <div className={styles.registration}>
          <p className={styles.text}>Already have an email ?</p>
          <Link className={styles.link} href="/login">
            Sign in
          </Link>
        </div>
        <button className={styles.btn} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
}

export default registration