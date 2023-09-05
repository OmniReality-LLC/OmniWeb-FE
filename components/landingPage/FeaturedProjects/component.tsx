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
                                    largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940719/Omni%20Website/Main%20Page/Featured%20Websites/CherryPickedSPeechTherapy_qiq8vv.png',
                                    thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940719/Omni%20Website/Main%20Page/Featured%20Websites/CherryPickedSPeechTherapy_qiq8vv.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 6693,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940727/Omni%20Website/Main%20Page/Featured%20Websites/CafeChinoWebsite_f1dc3m.png',
                                    thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940727/Omni%20Website/Main%20Page/Featured%20Websites/CafeChinoWebsite_f1dc3m.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 3719,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945593/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite02_sh9ws6.png',
                                    thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945593/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite02_sh9ws6.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 5744,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945932/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite_bzkgzy.png',
                                    thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945932/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite_bzkgzy.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 5591,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940726/Omni%20Website/Main%20Page/Featured%20Websites/MochaMagic_ld9hub.png',
                                    thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940726/Omni%20Website/Main%20Page/Featured%20Websites/MochaMagic_ld9hub.png',
                                    width: 1920,  // Replace with actual width in pixels
                                    height: 3020,  // Replace with actual height in pixels
                                },
                                {
                                    largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940728/Omni%20Website/Main%20Page/Featured%20Websites/Oak_IronTavernWebsite_pgn0lk.png',
                                    thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940728/Omni%20Website/Main%20Page/Featured%20Websites/Oak_IronTavernWebsite_pgn0lk.png',
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
