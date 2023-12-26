"use client";

import Link from "next/link";
import styles from "./registration.module.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Registration = () => {
  const router = useRouter();

  const { err, setErr } = useState(false);
  const [status, setStatus] = useState(null);

  const handelSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (password.length < 8) {
      return setStatus("Wrong!!! Your password must be at least 8 character");
    } else {
      try {
        const res = await fetch("/api/auth/registration", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });

        res.status === 200 && router.push("/login");
      } catch {
        setErr(true);
        console.log(err);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create a new email</h2>
      <p className={styles.wrong}>{status}</p>
      <form className={styles.form} onSubmit={handelSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Your Email"
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Your Password"
          required
        />
        <div className={styles.registration}>
          <p className={styles.text}>Already have an email ?</p>
          <Link className={styles.link} href="/login">
            Sign in
          </Link>
        </div>
        <button className={styles.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
