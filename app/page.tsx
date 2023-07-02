"use client"

import Lottie from 'lottie-react'
import styles from './page.module.css'
import construction from '../public/lottie/construction.json';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>
        <Lottie animationData={construction} autoplay loop />
      </div>
    </main>
  )
}
