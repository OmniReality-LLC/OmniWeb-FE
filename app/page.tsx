"use client"

import Lottie from 'lottie-react'
import styles from './page.module.css'
import construction from '../public/lottie/construction.json';
import TopSection from '../components/landingPage/Top/component'
import ServiceSection from '../components/landingPage/Services/component'
//<Lottie animationData={construction} autoplay loop />

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>

        <TopSection/>
        <ServiceSection/>
      </div>
    </main>
  )
}
