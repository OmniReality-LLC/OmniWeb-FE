// Custom 'service' tier offering.
// You can only use 3 tiers unless you modify the css to take more dor less.
import styles from './styles.module.css';

export default function ComingSoon() {

    return (
        <div className={styles.servicesMain} id='comingSoon'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} >Coming Soon</h1>
                <div className={styles.blockBackground}>

                    <video autoPlay loop muted playsInline preload="auto" className={styles.comingSoonVideo}>
                        <source src="https://res.cloudinary.com/omnirealitycloud/video/upload/f_auto,o_25,q_auto/v1696618928/Omni%20Website/Videos/Under%20Development%20Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>




                </div>
            </div>
        </div>
    );
};
