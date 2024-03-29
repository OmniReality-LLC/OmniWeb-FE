
import styles from './page.module.css';
import Hero from '../../components/aboutPage/Top/component'
import Footer from '@/components/shared/Footer/component';
import ParticleBackground from '@/components/shared/Particles/component';
import ComingSoon from '@/components/shared/ComingSoon/component'
//
export default function WebsiteService() {
  return (
    <main className={styles.main}>
      <ParticleBackground />
      <div className={styles.mainContainer}>
        <Hero/>

        <ComingSoon/>
        <Footer/>
      </div>
    </main>
  )
}
