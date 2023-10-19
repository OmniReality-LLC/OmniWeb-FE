
import styles from './page.module.css';
import Hero from '../../components/webDesignDevelpoment/Top/component'
import Plans from '../../components/webDesignDevelpoment/Plans/component'
import MaintSupport from '../../components/webDesignDevelpoment/MaintSupport/component'
import PageConnector from '../../components/shared/PageConnector/component'
import OmniDeskService from '../../components/webDesignDevelpoment/OmniDesk/component'
import FeaturedSection from '@/components/webDesignDevelpoment/WebsiteDesigns/component'
import Footer from '@/components/shared/Footer/component';
import Additions from '@/components/webDesignDevelpoment/Additions/component'
import QASection from '@/components/webDesignDevelpoment/QASection/component';
import ParticleBackground from '@/components/shared/Particles/component';

export default function WebsiteService() {
  return (
    <main className={styles.main}>
      <ParticleBackground />
      <div className={styles.mainContainer}>
        <Hero/>
        <Plans/>
        <PageConnector/>
        <OmniDeskService/>
        <PageConnector/>
        <MaintSupport/>
        <PageConnector/>
        <Additions/>
        <PageConnector/>
        <FeaturedSection/>
        <PageConnector/>
        <QASection/>

        <Footer/>
      </div>
    </main>
  )
}
