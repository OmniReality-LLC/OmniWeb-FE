//Push to git
import styles from './page.module.css';
import TopSection from '../components/landingPage/Top/component';
import ParticleBackground from '../components/shared/Particles/component'
import WebsiteService from '../components/landingPage/services/Website/component'
import EcommerceService from '../components/landingPage/services/Ecommerce/component'
import AIAddonsService from '../components/landingPage/services/AiAddons/component'
import CLARAService from '../components/landingPage/services/CLARA/component'
import FeaturedSection from '../components/landingPage/FeaturedProjects/component'
import TechnologySection from '../components/landingPage/TechnologyStack/component'
import PageConnector from '../components/shared/PageConnector/component'
import FooterSection from '../components/shared/Footer/component'
import CLARA from '@/components/CLARA/component';


//<Lottie animationData={construction} autoplay loop />
//import Lottie from 'lottie-react'
//import construction from '../public/lottie/construction.json';

export default function Home() {

  return (
    <main className={styles.main} id='home'>
      <ParticleBackground />


      <div className={styles.mainContainer}>
        <CLARA />
        <TopSection />
        <WebsiteService />
        <PageConnector />
        <EcommerceService />
        <PageConnector />
        <AIAddonsService />
        <PageConnector />
        <CLARAService />
        <PageConnector whiteConnector={true} />
        <FeaturedSection />
        <PageConnector />
        <TechnologySection />
        <FooterSection />
      </div>
    </main>
  )
}
//<ParticleBackground/>
//<Spacer height='clamp(75px, 7vw, 150px)' />



{/* <TopSection />
        <ServiceTest />
        <PageConnector/>
        <XRServices />
        <PageConnector/>
        <CloudServices />
        <PageConnector whiteConnector={true}/>
        <FeaturedSection />
        <PageConnector/>
        <TechnologySection />
        <FooterSection/> */}
