import Image from "next/image";
import React from "react";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          Step into Style: Elevate Your Every Stride with <span>DivaSteps</span>
        </h1>
        <p className={styles.subTitle}>
          Explore Our Latest Collection and Step into a World of Style
        </p>
        <div className={styles.action}>
          <div className={styles.btn}>more products</div>
          <div className={styles.wishlist}></div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/main2.png" alt="img" fill priority />
      </div>
    </div>
  );
};

export default Featured;
