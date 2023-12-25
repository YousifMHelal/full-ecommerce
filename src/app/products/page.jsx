import React from "react";
import styles from "./products.module.css";
import Card from "@/components/card/Card";

const products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>our products</div>
        <div className={styles.categories}>
          <div className={styles.cat}>popular</div>
          <div className={styles.cat}>new collection</div>
          <div className={styles.cat}>sports wear</div>
          <div className={styles.cat}>Air Max</div>
          <div className={styles.cat}>nike</div>
        </div>
      </div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default products;
