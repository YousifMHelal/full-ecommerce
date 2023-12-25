import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const Card = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>air max 2023</h2>
      <p className={styles.price}>120$</p>
      <div className={styles.imgContainer}>
        <Image src="/main.png" alt="" fill />
      </div>
      <div className={styles.action}>
        <div className={styles.btn}>add to cart</div>
        <div className={styles.wishlist}>
          <CiHeart />
        </div>
      </div>
    </div>
  );
};

export default Card;
