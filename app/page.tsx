
import styles from './page.module.css';
import TopSection from '../components/landingPage/Top/component';
import ParticleBackground from '../components/shared/Particles/component'
import ServiceTest from '../components/landingPage/Services/component'
import XRServices from '../components/landingPage/ServiceXR/component'
import CloudServices from '../components/landingPage/ServiceCloud/component'
import FeaturedSection from '../components/landingPage/FeaturedProjects/component'
import TechnologySection from '../components/landingPage/TechnologyStack/component'
import Spacer from '../components/shared/PageSpacer/component'




//<Lottie animationData={construction} autoplay loop />
//import Lottie from 'lottie-react'
//import construction from '../public/lottie/construction.json';




export default function Home() {

  return (
    <main className={styles.main}>
      <ParticleBackground />


      <div className={styles.mainContainer}>
      <TopSection />
        <Spacer height='clamp(75px, 7vw, 150px)'/>



        <ParticleBackground />

        <ServiceTest />
        <Spacer height='clamp(75px, 7vw, 150px)'/>
        <XRServices/>
        <Spacer height='clamp(75px, 7vw, 150px)'/>
        <CloudServices/>
        <Spacer height='clamp(75px, 7vw, 150px)'/>
        <FeaturedSection/>
        <Spacer height='clamp(75px, 7vw, 150px)'/>
        <TechnologySection/>

      </div>
    </main>
  )
}
//<ParticleBackground/>
