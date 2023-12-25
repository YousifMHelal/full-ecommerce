"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { CiSearch, CiUser } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const status = "unauthenticated";

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          home
        </Link>
        <Link href="/products" className={styles.link}>
          products
        </Link>
        <Link href="/about" className={styles.link}>
          about
        </Link>
        <Link href="/shop" className={styles.link}>
          shop
        </Link>
      </div>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link onClick={() => setOpen(!open)} href="/">
            home
          </Link>
          <Link onClick={() => setOpen(!open)} href="/products">
            products
          </Link>
          <Link onClick={() => setOpen(!open)} href="/about">
            about
          </Link>
          <Link onClick={() => setOpen(!open)} href="/shop">
            shop
          </Link>
        </div>
      )}

      <Link href="/" className={styles.logo}>
        DivaSteps
      </Link>
      <div className={styles.option}>
        {status === "unauthenticated" ? (
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        ) : (
          <CiUser />
        )}
        <CiSearch />
        <Link href="/cart" className={styles.cart}>
          <p>cart</p>
          <BsCartDash className={styles.cartIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
