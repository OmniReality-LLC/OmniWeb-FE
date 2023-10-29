'use client'
import styles from './styles.module.css';
import ImageViewer from '@/components/shared/ImageViewer/ImageViewerWorkPage/component'

export default function ImageViewerSection() {

    return (
        <div className={styles.servicesMain} id='comingSoon'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} >Website Designs</h1>
                <div className={styles.blockBackground}>
                    <ImageViewer
                        galleryID='my-test-gallery'
                        images={[
                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto/v1697931217/Omni%20Website/Main%20Page/Featured%20Websites/CherryPickedSpeechTherapy_blmjdd.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto/v1697931217/Omni%20Website/Main%20Page/Featured%20Websites/CherryPickedSpeechTherapy_blmjdd.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 6693,  // Replace with actual height in pixels
                            },
                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/TipsyTavernWebpage_otxsmf.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/TipsyTavernWebpage_otxsmf.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 3710,  // Replace with actual height in pixels
                            },
                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/LuxeGemBotiqueWebsite_idn6ok.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875920/Omni%20Website/Website%20Service%20Page/LuxeGemBotiqueWebsite_idn6ok.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 5138,  // Replace with actual height in pixels
                            },


                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940727/Omni%20Website/Main%20Page/Featured%20Websites/CafeChinoWebsite_f1dc3m.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693940727/Omni%20Website/Main%20Page/Featured%20Websites/CafeChinoWebsite_f1dc3m.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 3719,  // Replace with actual height in pixels
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
                            {
                                largeURL:'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875912/Omni%20Website/Website%20Service%20Page/BeeverLoomWebsite_epnwqp.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1696875912/Omni%20Website/Website%20Service%20Page/BeeverLoomWebsite_epnwqp.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 3642,  // Replace with actual height in pixels
                            },
                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945932/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite_bzkgzy.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945932/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite_bzkgzy.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 5591,  // Replace with actual height in pixels
                            },
                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945593/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite02_sh9ws6.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693945593/Omni%20Website/Main%20Page/Featured%20Websites/LandscapingWebsite02_sh9ws6.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 5744,  // Replace with actual height in pixels
                            },

                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696876123/Omni%20Website/Website%20Service%20Page/LandscapingWebsite01_z1wlvp.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696876123/Omni%20Website/Website%20Service%20Page/LandscapingWebsite01_z1wlvp.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 7344,  // Replace with actual height in pixels
                            },
                            {
                                largeURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696875918/Omni%20Website/Website%20Service%20Page/ThreadedNeedleWebsite_ss2vnm.png',
                                thumbnailURL: 'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:low/v1696875918/Omni%20Website/Website%20Service%20Page/ThreadedNeedleWebsite_ss2vnm.png',
                                width: 1920,  // Replace with actual width in pixels
                                height: 3497,  // Replace with actual height in pixels
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
