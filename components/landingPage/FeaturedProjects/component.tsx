import styles from './styles.module.css';

import MyImageViewer from '../../shared/ImageViewer/component';





export default function FeaturedSection() {


    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} data-text="Featured Designs">Featured Designs</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <MyImageViewer
                            galleryID='my-test-gallery'
                            images={[
                                {
                                    largeURL: '/LandingFeaturedImages/CherryPickedSPeechTherapy.png',
                                    thumbnailURL: '/LandingFeaturedImages/CherryPickedSPeechTherapy.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 6693,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: '/LandingFeaturedImages/CafeChinoWebsite.png',
                                    thumbnailURL: '/LandingFeaturedImages/CafeChinoWebsite.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 3719,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: '/LandingFeaturedImages/LandscapingWebsite02.png',
                                    thumbnailURL: '/LandingFeaturedImages/LandscapingWebsite02.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 5744,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: '/LandingFeaturedImages/LandscapingWebsite04.png',
                                    thumbnailURL: '/LandingFeaturedImages/LandscapingWebsite04.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 5591,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: '/LandingFeaturedImages/MochaMagic.png',
                                    thumbnailURL: '/LandingFeaturedImages/MochaMagic.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 3020,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: '/LandingFeaturedImages/Oak&IronTavernWebsite.png',
                                    thumbnailURL: '/LandingFeaturedImages/Oak&IronTavernWebsite.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 3677,  // Replace with actual height in pixels
                                },
                            ]}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};
