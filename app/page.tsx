
import styles from './page.module.css';
import TopSection from '../components/landingPage/Top/component';
import ParticleBackground from '../components/shared/Particles/component'
import ServiceTest from '../components/landingPage/Services/component'
import XRServices from '../components/landingPage/ServiceXR/component'
import CloudServices from '../components/landingPage/ServiceCloud/component'
import FeaturedSection from '../components/landingPage/FeaturedProjects/component'
import TechnologySection from '../components/landingPage/TechnologyStack/component'
import Spacer from '../components/shared/PageSpacer/component'
import PageConnector from '../components/shared/PageConnector/component'

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
        <PageConnector/>
        <XRServices />
        <PageConnector/>
        <CloudServices />
        <PageConnector whiteConnector={true}/>
        <FeaturedSection />
        <PageConnector/>
        <TechnologySection />
      </div>
    </main>
  )
}
//<ParticleBackground/>
//<Spacer height='clamp(75px, 7vw, 150px)' />
