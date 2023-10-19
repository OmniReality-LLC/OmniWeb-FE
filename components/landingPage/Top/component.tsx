import SlideGlowLinkBtn from '../../shared/Buttons/component'
import styles from './styles.module.css';

export default function LandingTopSection() {
    return (
        <div className={`${styles.topMain} align-items-center  `}>
            <video autoPlay loop muted playsInline preload="auto" className={styles.backgroundVideo}>
            <source src="/videos/BackgroundLanding.mp4" type="video/mp4"/>

                Your browser does not support the video tag.
            </video>
            <div className={` ${styles.myContainer} container`}>
                <div className={styles.contentHolder}>
                    <h1 className={styles.title}>We Turn Dreams Into Reality</h1>
                    <h3 className={styles.subTitle}>
                        <span className={styles.gradientText}>Connecting</span> the world through digital experiences
                    </h3>
                    <p className={styles.paragraph}>
                        <span className={styles.gradientWords}>Website </span>
                        <span className={`${styles.gradientWords} ${styles.absolutePosition} ${styles.fadeInOut}`}>Design </span>
                        <span className={`${styles.gradientWords} ${styles.absolutePosition} ${styles.fadeInOut2}`}>Develop </span>
                        <span className={styles.gradientWords}>| Augmented Reality | </span>
                        <span className={styles.gradientWords}>AI Add-ons </span>
                    </p>
                    <div className={styles.button}>
                        <SlideGlowLinkBtn text={'Get Connected'} linkTo={'/Contact'} textColor='#D4D4D4' bgColor='transparent' marginL='0' marginB='25px' />
                    </div>
                </div>
            </div>
        </div>
    )
}
