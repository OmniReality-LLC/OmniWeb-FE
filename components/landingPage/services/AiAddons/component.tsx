import styles from './styles.module.css';
import ServiceCard from '../../../shared/ServiceCard/component'
import CloudImgHelper from '../../../shared/ServiceImageCloud/component';

const cloudComputingServices = [
    {
        subTitle: "Boost your experience with the power of AI.",
        smallCard: {
            iconSrc: 'icons/BrainIcon.svg',
            subSubTitle: 'AI Content Creation',
            description: 'From a 24/7 AI Chatbot and compelling AI Copywriter to a smart AI Image Editor, we automate content creation giving you and your customers the best experience.'
        }
    },
    {
        subTitle: "What We Offer",
        listItems: [
            { mainText: "Smart Chat: ", specialText: "24/7 AI Chatbot for instant customer support and engagement." },
            { mainText: "Auto Copywrite: ", specialText: "AI Copywriter that generates compelling and relevant content on-demand." },
            { mainText: "Image AI: ", specialText: "Smart AI Image Editor for seamless photo adjustments and enhancements. Add products to any photo with ease." },

        ]
    }
];

export default function AIAddonSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>AI Add-ons</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard carouselItems={cloudComputingServices} linkTo=''/>
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
