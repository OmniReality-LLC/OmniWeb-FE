import styles from './styles.module.css';
import Image from 'next/image';
import ServiceCard from '../../shared/ServiceCard/component'


const cloudComputingServices = [
    {
        subTitle: "Boost your performance with Cloud Based Computing",
        smallCard: {
            iconSrc: 'icons/CloudIcon.svg',
            subSubTitle: 'Remote Development Service',
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
                                <ServiceCard carouselItems={cloudComputingServices} />
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                            <Image src='/pictures/CloudImage.png' className={styles.SVG} alt={'Image of a laptop computer'} width={843} height={562}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
