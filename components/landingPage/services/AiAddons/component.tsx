import styles from './styles.module.css';
import ServiceCard from '../../../shared/ServiceCard/component'
import CloudImgHelper from '../../../shared/ServiceImageCloud/component';

const offeringTitle = 'AI Enhancements'

const aiAddons = [
    {
        subTitle: "What Clara Offers",
        smallCard: {
            iconSrc: 'icons/BrainIcon.svg',
            subSubTitle: 'AI-Driven Conversational Powerhouse',
            description: "Discover C.L.A.R.A. – not just a chatbot, but your AI-driven powerhouse. From engaging conversations to content creation and innovative image manipulations, redefine what's possible."
        }
    },
    {
        subTitle: "Key Capabilities",
        listItems: [
            { mainText: "Conversations & Content:", specialText: "Human-like and automated." },
            { mainText: "Image Manipulation:", specialText: "Replace and create with AI." },
            { mainText: "24/7 Availability:", specialText: "Always on." },
            { mainText: "Embed Integration:", specialText: "Embed C.L.A.R.A. into any space." },
            { mainText: "Performance & Customization:", specialText: "Adapt to your brand's voice." },
        ]

    }
];

export default function AIAddonSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>{offeringTitle}</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={aiAddons} linkTo='' buttonText='Coming Soon'/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                        <CloudImgHelper quality={75} width={628} height={646} src="https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1695673541/Omni%20Website/Main%20Page/Service%20Images/ChatbotImage_bphx6n.png" alt="Image of CLARA, an AI-Driven Powerhouse" className={styles.displayImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
