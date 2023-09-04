import styles from './styles.module.css';

import MyImageViewer from '../../shared/ImageViewer/component';





export default function FeaturedSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
            <h1 className={`${styles.title}`} data-text="Featured Designs">Featured Designs</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <MyImageViewer imageList={['/LandingFeaturedImages/CherryPickedSPeechTherapy.png',
                        '/LandingFeaturedImages/CafeChinoWebsite.png',
                        '/LandingFeaturedImages/LandscapingWebsite02.png',
                        '/LandingFeaturedImages/LandscapingWebsite04.png',
                        '/LandingFeaturedImages/MochaMagic.png',
                        '/LandingFeaturedImages/Oak&IronTavernWebsite.png']}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
