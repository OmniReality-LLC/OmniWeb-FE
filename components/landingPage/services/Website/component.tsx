import styles from './styles.module.css';
import ServiceCard from '../../../shared/ServiceCard/component'
import CloudImgHelper from '../../../shared/ServiceImageCloud/component';

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
export default function WebsiteService() {

    return (
        <div className={styles.servicesMain} id='services'>
            <div className={styles.contentMain}>
            <h1 className={`${styles.title}`} data-text="Website Services">Website Services</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={webServices} linkTo='/websolutions' buttonText='View Service'/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                        <CloudImgHelper quality={75} src={'https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1693946905/Omni%20Website/Main%20Page/Service%20Images/WebDesign_fnazw4.png'} width={628} height={646} alt={'Image of a laptop computer'} className={styles.displayImg}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
