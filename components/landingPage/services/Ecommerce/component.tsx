import styles from './styles.module.css';
import ServiceCard from '../../../shared/ServiceCard/component'
import CloudImgHelper from '../../../shared/ServiceImageCloud/component';

const xrServices = [
    {
        subTitle: "Revolutionize your website with the power of Augmented Reality.",
        smallCard: {
            iconSrc: 'icons/ARIcon.svg',
            subSubTitle: 'AR Integration',
            description: 'Capture imaginations with AR Integration. Offer customers a 3D, hands-on look at your products from the comfort of their homes.'
        }
    },
    {
        subTitle: "What We Offer",
        listItems: [
            { mainText: "Immersive Shopping:", specialText: "Lifelike 3D product replicas" },
            { mainText: "Interactive Preview: ", specialText: "Rotate & Zoom for interactive viewing" },
            { mainText: "AR Interaction:", specialText: "Real-time AR interactions for quicker decision-making" },
            { mainText: "Spatial Awareness: ", specialText: "Enable customers to visualize product in their own space" },
        ]
    }
];

export default function Ecommerce() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>E-commerce</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={xrServices} linkTo=''/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                            <CloudImgHelper quality={75} width={628} height={646} src="https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1695673541/Omni%20Website/Main%20Page/Service%20Images/ARImage_ne66tc.png" alt="Image of a person wearing a VR headset" className={styles.displayImg}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
