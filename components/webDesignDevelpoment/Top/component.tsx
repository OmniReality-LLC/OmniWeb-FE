import TextScrambler from '@/components/shared/TextScramble/component';
import SlideGlowLinkBtn from '../../shared/Buttons/component'
import styles from './styles.module.css';




export default function WebsiteTopSection() {
    return (
        <div className={`${styles.topMain} align-items-center  `}>
            <video autoPlay loop muted playsInline preload="auto" className={styles.backgroundVideo}>
                <source src="/videos/WebServiceMain.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={` ${styles.myContainer} container`}>
                <div className={styles.contentHolder}>
                    <h1 className={styles.title}>Web Design & Development Plans</h1>
                    <h3 className={styles.subTitle}>
                        Creating A <TextScrambler word={'Digital'} className={`${styles.gradientText} ${styles.interMono}`} /> Identity For Your Business By Combining Modern Technology & Designs
                    </h3>


                    <p className={styles.paragraph}>
                        <span className={styles.gradientWords}>Custom </span>
                        <span className={`${styles.gradientWords} ${styles.absolutePosition} ${styles.fadeInOut}`}>Design </span>
                        <span className={`${styles.gradientWords} ${styles.absolutePosition} ${styles.fadeInOut2}`}>Develop </span>
                        <span className={styles.gradientWords}>| Hosting | </span>
                        <span className={styles.gradientWords}>Maintenance </span>
                    </p>
                    <div className={styles.button}>
                        <SlideGlowLinkBtn text={'Coming Soon'} linkTo={''} textColor='#D4D4D4' bgColor='transparent' marginL='0' marginB='25px' />
                    </div>
                </div>
            </div>
        </div>
    )
}
