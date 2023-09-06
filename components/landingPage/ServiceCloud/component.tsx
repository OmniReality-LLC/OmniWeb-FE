import styles from './styles.module.css';
import ServiceCard from '../../shared/ServiceCard/component'
import CloudImgHelper from '../../shared/ServiceImageCloud/component';

const cloudComputingServices = [
    {
        subTitle: "Boost your performance with Cloud Based Computing",
        smallCard: {
            iconSrc: 'icons/CloudIcon.svg',
            subSubTitle: 'Remote Dev Service',
            description: 'Providing secure, anytime access to cloud-based development environments from any device. Save costs on hardware, and develop with your favorite software.'
        }
    },
    {
        subTitle: "What We Offer",
        listItems: [
            { mainText: "Develop games on a virtual computer ", specialText: "via the cloud" },
            { mainText: "Use your favorite engine: ", specialText: "Unreal Engine, Unity, or Godot" },
            { mainText: "Ability to upgrade your virtual computer ", specialText: "via plans" },
            { mainText: "Access applications & remote desktops ", specialText: "anywhere" },
            { mainText: "Secure access point ", specialText: "via the cloud" },
        ]
    }
];

export default function ServicesSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>Virtual Computer</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={cloudComputingServices} linkTo=''/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                        <CloudImgHelper width={843} height={562} src="https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693946906/Omni%20Website/Main%20Page/Service%20Images/CloudImage_yhis5z.png" alt="Image of a laptop computer" className={styles.displayImg}/>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};
