import styles from './styles.module.css';
import Image from 'next/image';
import ServiceCard from '../../shared/ServiceCard/component'

import CloudImgHelper from '../../shared/ServiceImageCloud/component';


const xrServices = [
    {
        subTitle: "Enter a new reality & discover innovative solutions",
        smallCard: {
            iconSrc: 'icons/XRIcon.svg',
            subSubTitle: 'Extended Reality (XR)',
            description: 'Explore new realities with our tailored AR, VR, and MR solutions, turning ordinary tasks into immersive digital journeys for work, learning and leisure.'
        }
    },
    {
        subTitle: "What We Offer",
        listItems: [
            { mainText: "Extended Reality Simulations:", specialText: "VR & XR" },
            { mainText: "Variety of design styles ", specialText: "low poly to hyper-realistic" },
            { mainText: "XR solutions:", specialText: "training, convert safety video and more" },
            { mainText: "Deployment on multiple devices ", specialText: "Quest, Vive, HoloLens" },
            { mainText: "Custom Exhibit Design Experiences in ", specialText: "VR or XR" },
        ]
    }
];


export default function ServicesSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>XR Services</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={xrServices} linkTo=''/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                            <CloudImgHelper quality={25} width={843} height={562} src="https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693946907/Omni%20Website/Main%20Page/Service%20Images/XRImage_oeau6n.png" alt="Image of a person wearing a VR headset" className={styles.SVG}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
