

import styles from './page.module.css';
import TopSection from '../components/landingPage/Top/component';
import ParticleBackground from '../components/shared/Particles/component'
import ServiceTest from '../components/landingPage/Services/component'

//<Lottie animationData={construction} autoplay loop />
//import Lottie from 'lottie-react'
//import construction from '../public/lottie/construction.json';
export default function Home() {

  return (
    <main className={styles.main}>
      <ParticleBackground />

      <div className={styles.mainContainer}>
        <TopSection />
        <ServiceTest />




      </div>
    </main>
  )
}
//<ParticleBackground/>
