
import styles from './styles.module.css';
// Define data structure types

type AdditionsData = {
    name: string;
    price: string;
    description: string;
    picture: string;
};

const data: AdditionsData[] = [
    {
        name: "C.L.A.R.A. Conversations",
        price: '$20/M*',
        description: 'Human-like, automated chat for FAQs, site navigation, and support. Engage and assist visitors 24/7.',
        picture: "icons/AIChatbotIcon.svg",
    },


    {
        name: "Support",
        price: '$55/M',
        description: 'Alumni? Benefit from discounted maintenance & support services. Ensure your site runs smoothly.',
        picture: "icons/AlumniSupport.svg",
    },
    {
        name: "C.L.A.R.A. Image Manipulation",
        price: '$20/M*',
        description: "Revolutionize visuals with AI-driven image manipulations. Replace, create, and enhance for stunning visual content.",
        picture: "icons/AIImageIcon.svg",
    },
    {
        name: "SEO Refresh",
        price: '$175/M',
        description: "Optimize your site's SEO monthly. Strategic adjustments to meta tags, content, and backlinks based on performance data.",
        picture: "icons/SEORefreshIcon.svg",
    },
    {
        name: "C.L.A.R.A. AI Copywriter",
        price: '$20/M*',
        description: "Transform your content with AI-driven writing. Perfect for engaging blogs, detailed product descriptions, and SEO-optimized text.",
        picture: "icons/AiCopywriterIcon.svg",
    },
    {
        name: "Omni Mail Guard",
        price: '$35/M',
        description: "Guarantee secure business-customer interactions with our HIPAA-compliant contact form, featuring end-to-end encryption and a custom template.",
        picture: "icons/MailGaurdIcon.svg",
    }
];


export default function OmniDesk() {

    return (
        <div className={styles.servicesMain} >
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`}>Alumni Additions</h1>
                <div className={styles.blockBackground}>
                    <div className={styles.additions}>
                        {data.map((myData, index) =>
                            <Additions {...myData} order={index + 1} key={myData.name} />
                        )}
                    </div>
                    <div className={styles.astriWarning}>

                        <h1 className={styles.warning}>*All AI tools are complimentary for our maintenance and support customers, subject to their monthly usage allowance.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Additions(props: AdditionsData & { order: number }) {
    return (
        <div className={`${styles.additionsMain} ${styles[`order${props.order}`]}`}>
            <div className={styles.additionsContent}>
                <div className={styles.additionsIconContainer}>
                    <div className={styles.additionsInnerIconContainer}>
                        <img src={props.picture} />
                    </div>
                </div>
                <div className={styles.wordContent}>
                    <div className={styles.titleAndPrice}>
                        <div className={styles.additionsTitleContainer}>
                            <h1 className={styles.additionsTitle}>{props.name}</h1>
                        </div>
                        <div className={styles.svgContainer}>
                            <p className={styles.price}>{props.price}</p>
                        </div>
                    </div>
                    <div className={styles.additionsDescription}>
                        <p className={styles.additionsDescription}>{props.description}</p>
                    </div>
                </div>


            </div>

        </div>
    )
}
