import React from 'react'
import styles from './shipping.module.css'
import Image from 'next/image'

const Shipping = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/shipping.png" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Footwear: Where Fashion Meets Comfort</h3>
        <p className={styles.desc}>
          Enjoy fashion freedom with DivaSteps! We offer free shipping on every
          order, bringing your favorite pairs straight to your doorstep without
          any extra cost. Shop guilt-free and step into style effortlessly.
          Because at DivaSteps, we {`don't`} just send shoes; we deliver fashion,
          free of charge.
        </p>
        <button className={styles.btn}>order now</button>
      </div>
    </div>
  );
}

export default Shipping