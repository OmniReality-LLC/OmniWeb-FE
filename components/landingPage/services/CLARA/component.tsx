import styles from './styles.module.css';
import ServiceCard from '../../../shared/ServiceCard/component'
import CloudImgHelper from '../../../shared/ServiceImageCloud/component';

const xrServices = [
    {
        subTitle: "Empower Digital Experiences with C.L.A.R.A.",
        smallCard: {
            iconSrc: 'icons/BrainIcon.svg',
            subSubTitle: 'Conversational Language and Response Algorithm',
            description: 'Meet C.L.A.R.A. – an advanced AI-powered platform that transcends traditional chatbot interactions. Elevate your user experiences with dynamic conversations, AI content creation tools, and generative image manipulations.'
        }
    },
    {
        subTitle: "Features & Capabilities",
        listItems: [
            { mainText: "Natural Conversations & Content Creation:", specialText: "Dynamic interactions paired with AI-driven copywriting tools." },
            { mainText: "Generative Image Manipulation:", specialText: "AI-powered capabilities to replace, edit, and innovate visuals." },
            { mainText: "24/7 Availability:", specialText: "Ensuring continuous engagement and uninterrupted support." },
            { mainText: "Embed Integration:", specialText: "Slot C.L.A.R.A. into any website or platform effortlessly." },
            { mainText: "Performance & Customization:", specialText: "Analytics insights and adaptability to reflect your brand." },
        ]

    }
];

export default function CLARASection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>C.L.A.R.A.</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={xrServices} linkTo='' buttonText='Coming Soon'/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                            <CloudImgHelper quality={85} width={628} height={646} src="https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1695673541/Omni%20Website/Main%20Page/Service%20Images/ChatbotImage_bphx6n.png" alt="Image of a person wearing a VR headset" className={styles.displayImg}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
