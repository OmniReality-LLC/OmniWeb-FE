import BackgroundVideoFullScreen from '@/components/shared/BgVideoFullScreen/component';
import SlideGlowLinkBtn from '../../shared/Buttons/component'
import styles from './styles.module.css';
import BGDownloadVideo from '@/components/shared/BgVideoFullScreen/NoneStream/component';

export default function LandingTopSection() {
    return (
        <div className={`${styles.topMain} align-items-center  `}>
            <BackgroundVideoFullScreen src={'https://cdn.omnireality.us/BackgroundLanding.mp4'}
            placeholderSrc={'/loadingImages/Main.webp'} />
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
                        <SlideGlowLinkBtn text={'Get Connected'} linkTo={'/contact'} textColor='#D4D4D4' bgColor='transparent' marginL='0' marginB='25px' />
                    </div>
                </div>
            </div>
        </div>
    )
}
