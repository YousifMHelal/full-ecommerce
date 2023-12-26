"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data, status } = useSession();

  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    await signIn("credentials", { email, password });
  };

  if (status === "loading") {
    return <div className={styles.container}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login with your email</h2>

      <form className={styles.form} onSubmit={handelSubmit}>
        <input className={styles.input} type="email" placeholder="Your Email" />
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
          Login
        </button>
        <div className={styles.google}>
          or Login in with :
          <FaGoogle className={styles.go} onClick={() => signIn("google")} />
        </div>
      </form>
    </div>
  );
};

export default Login;
