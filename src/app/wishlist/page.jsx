import React from 'react'
import styles from './wishlist.module.css'
import Card from '@/components/card/Card';

const wishList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>your wishList</div>
      <div className={styles.products}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default wishList