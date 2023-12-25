import React from "react";
import styles from './about.module.css'

const page = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>who we are</h3>
      <p>
        Welcome to DivaSteps,where we redefine footwear as a blend of style and
        comfort. Born out of a passion for fashion, our brand is your
        destination for on-trend shoes that {`don't`} compromise on wearability.
        At DivaSteps , we believe that every step should be a statement, a
        reflection of your unique style. Our curated collection brings together
        the latest designs and superior comfort, ensuring that each pair is not
        just footwear but an expression of your individuality. Crafted with
        precision and attention to detail, our shoes seamlessly marry
        fashion-forward aesthetics with practical comfort. From everyday
        essentials to standout pieces for special occasions, DivaSteps is your
        go-to for elevating your every stride. Join us on a journey where style
        meets ease, and your shoes become an extension of your personality.
        DivaSteps because every step matters, and so does how you take it.
      </p>
      <br />
      <h2 className={styles.terms}>Terms of Service</h2>
      Welcome to DivaSteps! By using our website, you agree to comply with and
      be bound by the following terms and conditions. Please read the following
      carefully.
      <h3 className={styles.title}>Use of the Website</h3>
      You agree to use this website for lawful purposes only. You may not use
      the website in any manner that could damage, disable, overburden, or
      impair our services.
      <h3 className={styles.title}>Product Information</h3>
      We strive to provide accurate product information, but we do not guarantee
      that all product descriptions, images, and prices are error-free.
      <h3 className={styles.title}>Intellectual Property</h3>
      All content on this website, including text, graphics, logos, and images,
      is the property of DivaSteps and is protected by intellectual property
      laws.
      <h3 className={styles.title}>Privacy</h3>
      We respect your privacy. Our Privacy Policy outlines how we collect, use,
      and safeguard your personal information. Shipping and Returns: Details
      about shipping, delivery times, and our return policy can be found on our
      Shipping & Returns page.
      <h3 className={styles.title}>Shipping and Returns</h3>
      We do not warrant that the website will be error-free or uninterrupted. We
      reserve the right to make changes to the website at any time without
      notice.
    </div>
  );
};

export default page;
