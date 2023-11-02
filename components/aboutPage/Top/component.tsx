import BackgroundVideoFullScreen from '@/components/shared/BgVideoFullScreen/component';
import BGDownloadVideo from '@/components/shared/BgVideoFullScreen/NoneStream/component';
import styles from './styles.module.css';

export default function LandingTopSection() {
    return (
        <div className={`${styles.topMain} align-items-center  `}>
            <BGDownloadVideo src={'https://cdn.omnireality.us/AboutUsVideo.mp4'}
            placeholderSrc={'/loadingImages/AboutUs.webp'} />
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
