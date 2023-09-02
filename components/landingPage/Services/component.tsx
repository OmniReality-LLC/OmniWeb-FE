import styles from './styles.module.css';
import Image from 'next/image';
import ServiceCard from '../../shared/ServiceCard/component'


const webServices = [
    {
        subTitle: "Build your digital identity, increase traffic and boost revenue.",
        smallCard: {
            iconSrc: 'icons/WebDev.svg',
            subSubTitle: 'Web Design / Development',
            description: 'Using innovative design and modern development tools, we craft compelling, user-friendly websites giving accessible online presence on all devices.'
        }
    },
    {
        subTitle: "What We Offer",
        listItems: [
            { mainText: "Free Domain* ", specialText: ".com, .net, .org, and more" },
            { mainText: "Custom Designs ", specialText: "branding, infographics and more" },
            { mainText: "Free Website Analytics ", specialText: "page views, top referrers + more" },
            { mainText: "Support Packages: ", specialText: "Email support, website updates" },
            { mainText: "Security Checks: ", specialText: "Active monitoring" },
        ]
    }
];
export default function ServicesSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>Website Services</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={webServices} />
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                            <Image src='/pictures/WebDesign.png' className={styles.SVG} alt={'Image of a laptop computer'} width={843} height={562}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
