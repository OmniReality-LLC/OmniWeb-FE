/* Work Page */
import styles from './page.module.css';
import Footer from '@/components/shared/Footer/component';
import ParticleBackground from '@/components/shared/Particles/component';
import ImageViewerSection from '@/components/workPage/ImageViewerSection/component';
import DesignSectionThreeD from '@/components/workPage/DesignSectionThreeD/component';
import PageConnector from '@/components/shared/PageConnector/component';
export default function WebsiteService() {
  return (
    <main className={styles.main}>
      <ParticleBackground />
      <div className={styles.mainContainer}>

        <ImageViewerSection/>
        <PageConnector/>
        <DesignSectionThreeD/>

        <Footer/>
      </div>
    </main>
  )
}
