import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>who we are</h2>
      <p className={styles.text}>
        {`Welcome to DivaSteps,where we redefine footwear as a blend of style and comfort. Born out of a passion for fashion, our brand is your destination for on-trend shoes that don't compromise on wearability.
      At DivaSteps
      , we believe that every step should be a statement, a reflection of your unique style. Our curated collection brings together the latest designs and superior comfort, ensuring that each pair is not just footwear but an expression of your individuality.
      Crafted with precision and attention to detail, our shoes seamlessly marry fashion-forward aesthetics with practical comfort. From everyday essentials to standout pieces for special occasions, DivaSteps
      is your go-to for elevating your every stride.
      Join us on a journey where style meets ease, and your shoes become an extension of your personality. DivaSteps
      because every step matters, and so does how you take it.`}
      </p>
    </div>
  );
};

export default About;
