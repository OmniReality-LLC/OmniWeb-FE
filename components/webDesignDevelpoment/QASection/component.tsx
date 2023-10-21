'use client'
import { useState } from 'react';
import styles from './styles.module.css';

type QA = {
    question: string;
    answer: string;
};

const data: QA[] = [
    {
        question: 'Do you offer custom website and admin panel solutions?',
        answer: "Yes, we do! At OmniReality, we understand that every business has unique needs. Our team specializes in crafting custom websites and admin panels tailored to your specific requirements. Whether you need a unique user interface, specialized functionality, or a distinctive admin dashboard, we've got you covered. Our goal is to ensure your platform stands out and provides a seamless user experience."
    },
    {
        question: 'How does payment work?',
        answer: 'We facilitate payments through an email invoice system. Upon finalizing the terms of our services, you will receive an invoice via email with a payment link that directs you to our trusted payment gateway. Simply click on the link and follow the instructions to complete the payment.'
    },
    {
        question: 'Will my website be mobile-responsive?',
        answer: 'Absolutely! At OmniReality, we adopt a mobile-first design approach. This ensures that our clients receive an optimal experience regardless of the device they use.'
    },
    {
        question: 'Do you provide design services?',
        answer: 'Certainly! OmniReality provides an array of design services. From branding and graphic design to user interface and experience design, our team is well-equipped to bring your vision to life.'
    },
    {
        question: 'Do you handle website hosting?',
        answer: 'Yes, OmniReality LLC offers end-to-end solutions, from design to hosting. This allows you to concentrate on the most crucial aspect of your business: generating revenue.'
    },
    {
        question: 'Is there a requirement for purchasing maintenance plans?',
        answer: 'Yes, to ensure consistent support and optimal performance for your website, all maintenance plans are billed annually and must be purchased upfront. This approach allows us to allocate resources effectively and provide you with uninterrupted service throughout the year.'
    },
    {
        question: 'Can I change or cancel my maintenance plan?',
        answer: "Certainly! While the maintenance plans are billed annually, we understand that businesses evolve. If you need to upgrade, downgrade, or cancel, just reach out to our team. We're here to help and will guide you through the process."
    },
    {
        question: 'How can I monitor website performance?',
        answer: 'We equip you with analytical tools and provide regular performance updates. This enables you to track website traffic, gauge user engagement, and monitor other essential metrics for optimal performance.'
    },
    {
        question: 'How long is my domain valid?',
        answer: "Upon registering a domain with OmniReality, it remains valid for a year. However, you can either renew it annually or choose longer-term registration based on your needs."
    },
    {
        question: 'Are third-party integrations feasible?',
        answer: 'Absolutely. We can incorporate a variety of third-party services and APIs into your website, ensuring it possesses the desired functionalities and features.'
    },
];



const dataCount: number = data.length;
export default function QASection() {
    return (
        <div className={styles.servicesMain} id='work'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} data-text="Featured Designs">Q & A</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.leftContainer}>
                            <div className={styles.QAItemsContainer}>
                                {data.map((myData, index) =>
                                    <QuestionAnswer index={index} qa={myData} />
                                )}
                            </div>
                        </div>
                        <div className={styles.rightContainer}>
                            <div className={styles.questionImage}>
                                <img src='https://res.cloudinary.com/omnirealitycloud/image/upload/f_auto,q_auto/v1697838647/Omni%20Website/Website%20Service%20Page/QuestionMark2.png' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface QAInterface {

    qa: QA;
    index: number;
}

function QuestionAnswer(props: QAInterface) {
    const [isActive, setIsActive] = useState(false);
    let borderRadius;

    switch (true) {
        case (props.index === 0 && dataCount === 1):
            borderRadius = '10px'; // rounded on all sides
            break;
        case (props.index === 0):
            borderRadius = '10px 10px 0 0'; // rounded on top
            break;
        case (props.index === dataCount - 1):
            borderRadius = '0 0 10px 10px'; // rounded on bottom
            break;
        default:
            borderRadius = '0'; // no rounded corners
    }

    const arrowSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="clamp(15px, 2vw, 25px)" height="auto" viewBox="0 0 26 40" fill="none">
            <path d="M5 36L18.8787 22.1213C20.0503 20.9497 20.0503 19.0503 18.8787 17.8787L5 4" stroke="white" stroke-width="3" stroke-linecap="round" />
        </svg>
    );

    return (
        <div className={styles.qaMain}>
            <div className={`${styles.shadowContainer} ${isActive ? styles.shadowContainerActive : ''}`} onClick={() => setIsActive(!isActive)} style={{borderRadius: borderRadius}}>
                <div className={`${styles.backgroundContainer} ${isActive ? styles.backgroundContainerActive : ''}`}>
                    <div className={`${styles.contentContainer}`}>
                        <div className={styles.topContainer}>
                            <div className={styles.question}>
                                <h1 className={styles.questionText}> {props.qa.question}</h1>
                            </div>
                            <div className={`${styles.arrow} ${isActive ? styles.arrowRotate : ''}`}>
                                {arrowSvg}
                            </div>
                        </div>
                        <div className={styles.bottomContainer}>
                        <div className={styles.line} style={props.index === dataCount - 1 && !isActive ? {background: 'transparent'} : {}}></div>
                            <div className={`${styles.description} ${isActive ? styles.descriptionActive : ''}`}>
                                <h2 className={styles.descriptionText} >
                                    {props.qa.answer}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
