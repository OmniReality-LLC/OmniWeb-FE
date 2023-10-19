import SlideGlowLinkBtn from '../../shared/Buttons/component'
import styles from './styles.module.css';

export default function LandingTopSection() {
    return (
        <div className={`${styles.topMain} align-items-center  `}>
            <video autoPlay loop muted playsInline preload="auto" className={styles.backgroundVideo}>
            <source src="/videos/AboutUsVideo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className={` ${styles.myContainer} container`}>
                <div className={styles.contentHolder}>
                    <h1 className={styles.title}>We Build Solutions Powered By Modern Technology</h1>
                    <h3 className={styles.subTitle}>
                        <span className={styles.gradientText}>Illuminating</span> the path to digital success, one pixel at a time.
                    </h3>
                </div>
            </div>
        </div>
    )
}
