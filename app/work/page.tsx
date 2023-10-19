
import styles from './page.module.css';
import Footer from '@/components/shared/Footer/component';
import ParticleBackground from '@/components/shared/Particles/component';
import ComingSoon from '@/components/workPage/ComingSoon/component';

export default function WebsiteService() {
  return (
    <main className={styles.main}>
      <ParticleBackground />
      <div className={styles.mainContainer}>
        <ComingSoon/>
        <Footer/>
      </div>
    </main>
  )
}
