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
        answer: "Yes, at OmniReality, we specialize in creating custom websites and admin panels tailored to your unique business needs. Whether you're looking for a distinct user interface, specialized functionalities, or a custom admin dashboard, we've got you covered."
    },
    {
        question: 'What hosting options do you provide?',
        answer: "We offer two primary hosting options: Self-Hosting and Managed Hosting. With Self-Hosting, you maintain full control and ownership of your data and enjoy a licensed codebase. Our Managed Hosting service provides a hassle-free experience with consistent backups, security monitoring, and premium support. All the technical aspects, including maintenance, are managed by us."
    },
    {
        question: 'Will my website be mobile-responsive?',
        answer: 'Absolutely! OmniReality adopts a mobile-first design approach, ensuring an optimal user experience regardless of the device used.'
    },
    {
        question: 'How does your Managed Hosting stand out?',
        answer: 'Our Managed Hosting allows you to benefit from our pre-purchased annual server rates on both AWS and Azure. We handle backups, security monitoring, and provide premium support, letting you focus on your business.'
    },
    {
        question: 'What does the Self-Hosting option entail?',
        answer: 'Our Self-Hosting option lets you maintain control, ownership, and direct access to your data. Plus, it comes with the added benefit of a licensed codebase. You have the liberty to respond instantly to updates, dictate the rules, and opt for licensed ownership of the codebase for clear rights and defined terms.'
    },
    {
        question: 'Do you provide design services?',
        answer: 'Absolutely! OmniReality offers a variety of design services, ranging from branding and graphic design to user interface and experience design. Our goal is to materialize your vision.'
    },
    {
        question: 'How are the maintenance plans structured?',
        answer: 'We have three tiers for our maintenance plans, each tailored to different needs. From weekly backups, software updates, and security monitoring, to advanced features like A/B Testing and Annual Website Revitalization, we have a plan that fits your requirements.'
    },
    {
        question: 'Can I change or cancel my maintenance plan?',
        answer: "Of course! While our maintenance plans are billed annually, we understand that business needs evolve. If you want to change or cancel your plan, just contact our team, and we'll assist you."
    },
    {
        question: 'How can I monitor website performance?',
        answer: 'Depending on your maintenance tier, we offer real-time analytics, advanced reports, and regular performance updates, allowing you to keep track of website traffic, user engagement, and other vital metrics.'
    },
    {
        question: 'Do you support third-party integrations?',
        answer: 'Yes, we can seamlessly integrate a variety of third-party services and APIs into your website to ensure it meets your desired functionalities and features.'
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
