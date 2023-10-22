import styles from './styles.module.css';
import ServiceCard from '../../../shared/ServiceCard/component'
import CloudImgHelper from '../../../shared/ServiceImageCloud/component';

const offeringTitle = 'AI Enhancements'

const aiAddons = [
    {
        subTitle: "Unleash C.L.A.R.A.'s Full Potential",
        smallCard: {
            iconSrc: 'icons/BrainIcon.svg',
            subSubTitle: 'Conversational Language and Response Algorithm',
            description: "Discover C.L.A.R.A. – not just a chatbot, but your AI-driven powerhouse. From engaging conversations to content creation and innovative image manipulations, redefine what's possible."
        }
    },
    {
        subTitle: "Key Capabilities",
        listItems: [
            { mainText: "Natural Conversations & Content Creation:", specialText: "Deliver human-like interactions and automate content creation." },
            { mainText: "Generative Image Manipulation:", specialText: "Replace, edit, and create visuals with AI precision." },
            { mainText: "24/7 Availability:", specialText: "Always on, always engaging." },
            { mainText: "Easy Embed Integration:", specialText: "Seamlessly introduce C.L.A.R.A. to any digital space." },
            { mainText: "Performance & Customization:", specialText: "Get insights and mold C.L.A.R.A. to your brand's voice." },
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
                                <ServiceCard carouselItems={aiAddons} linkTo='/websolutions' buttonText='View Service'/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                        <CloudImgHelper quality={75} width={628} height={646} src="https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto:best/v1695673540/Omni%20Website/Main%20Page/Service%20Images/AIBotImage_mkxngz.png" alt="Image of a laptop computer" className={styles.displayImg}/>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};
