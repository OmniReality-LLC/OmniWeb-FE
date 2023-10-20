// Custom 'service' tier offering.
// You can only use 3 tiers unless you modify the css to take more dor less.
import styles from './styles.module.css';

export default function ComingSoon() {

    return (
        <div className={styles.servicesMain} id='comingSoon'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} >Coming Soon</h1>
                <div className={styles.blockBackground}>
                    <div className={styles.overlayText}>Under Development</div>
                    <video autoPlay loop muted playsInline preload="auto" className={styles.comingSoonVideo}>
                        <source src="https://omnireality.us/Coming Soon Video.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </div>
    );
};
