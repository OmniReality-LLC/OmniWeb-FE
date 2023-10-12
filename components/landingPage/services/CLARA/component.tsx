import styles from './styles.module.css';
import ServiceCard from '../../../shared/ServiceCard/component'
import CloudImgHelper from '../../../shared/ServiceImageCloud/component';

const xrServices = [
    {
        subTitle: "Elevate user interactions with intelligent conversations.",
        smallCard: {
            iconSrc: 'icons/BrainIcon.svg',
            subSubTitle: 'C.L.A.R.A. AI Chatbot',
            description: 'Introducing C.L.A.R.A. – a cutting-edge AI chatbot designed to offer real-time, personalized interactions, making your digital presence feel more human and accessible.'
        }
    },
    {
        subTitle: "What C.L.A.R.A. Offers",
        listItems: [
            { mainText: "Dynamic Conversations:", specialText: "Feels natural and intuitive." },
            { mainText: "Seamless Integration: ", specialText: "Fits any platform or site." },
            { mainText: "Custom Responses:", specialText: "Tailor-made for your brand." },
            { mainText: " 24/7 Support: ", specialText: " Ensures uninterrupted service." },
            { mainText: "Performance Insights: ", specialText: "Track bot interactions and performance." },
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
