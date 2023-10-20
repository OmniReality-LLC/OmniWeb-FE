'use client'
import { useState } from 'react';
import styles from './styles.module.css';

type QA = {
    question: string;
    answer: string;
};

const data: QA[] = [
    { question: 'Do you offer custom website and admin panel solutions?', answer: "Yes, we do! At OmniReality, we understand that every business has unique needs. Our team of experts specializes in crafting custom websites and admin panels tailored to your specific requirements. Whether it's a unique user interface, specialized functionality, or a one-of-a-kind admin dashboard, we have you covered. Our goal is to ensure your platform not only stands out but also offers a seamless user experience." },
    { question: 'How does payment work?', answer: 'Payments are processed through our secure online platform. We accept a variety of payment methods including credit cards, bank transfers, and PayPal. We also offer flexible payment plans to meet your budgetary needs.' },
    { question: 'Will my website be mobile-responsive?', answer: 'Of course! When OmniReality creates website designs, we start with a mobile-first approach ensuring our clients get the best experience no matter what device you are using.' },
    { question: 'Do you offer any design services?', answer: 'Absolutely! OmniReality offers a wide range of design services, from branding and graphics design to user interface and experience design. Our team of professionals is equipped to transform your ideas into reality.' },
    { question: 'Do you handle website hosting?', answer: 'OmniReality LLC provides everything you need from design to hosting so you can focus on the important part of your business, making money.' },
    { question: 'Are Third-party integrations possible?', answer: 'Yes, we can integrate a wide range of third-party services and APIs into your website, ensuring you get the functionality and features you require.' },
    { question: 'How do I track website performance?', answer: 'We provide you with analytical tools and regular performance reports. You can monitor website traffic, user engagement, and other key metrics to ensure optimal performance.' },
    { question: 'Can I upgrade my maintenance tier?', answer: "Definitely! You can upgrade your maintenance tier at any time. Just reach out to our support team, and they'll guide you through the process." },
    { question: 'How long do I have my domain for?', answer: "When you register a domain with OmniReality, it's typically valid for one year. However, you have the option to renew it annually or opt for long-term registration based on your preference." },
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
