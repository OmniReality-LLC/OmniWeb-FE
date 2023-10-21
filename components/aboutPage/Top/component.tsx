import BackgroundVideoFullScreen from '@/components/shared/BgVideoFullScreen/component';
import SlideGlowLinkBtn from '../../shared/Buttons/component'
import styles from './styles.module.css';

export default function LandingTopSection() {
    return (
        <div className={`${styles.topMain} align-items-center  `}>
            <BackgroundVideoFullScreen src={'https://customer-y3xf1gql15dhgu26.cloudflarestream.com/ca065ce747d77ac3753b558c7c10d71e/manifest/video.m3u8'}
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
