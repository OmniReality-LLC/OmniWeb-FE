
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
        name: "CLARA",
        price: 'FREE *',
        description: 'Add a custom chatbot to your site that can answer FAQs, guide visitors through your site, or even handle basic support tickets, 24/7.',
        picture: "icons/BrainIcon.svg",
    },
    {
        name: "Support",
        price: '$55/Hr',
        description: 'Already built a site with us without support? As an Alumni, get discounted maintenance & support services to ensure smooth operations.',
        picture: "icons/BrainIcon.svg",
    },
    {
        name: "AI Copywriter",
        price: 'FREE *',
        description: "Get top-tier content without the writer's fee. Perfect for creating engaging blogs and detailed product descriptions in line with SEO standards.",
        picture: "icons/BrainIcon.svg",
    },
    {
        name: "SEO Refresh",
        price: '$175/M',
        description: "Monthly in-depth SEO review followed by strategic tweaks to meta tags, content, backlink strategy, and more, based on performance analytics.",
        picture: "icons/BrainIcon.svg",
    },
    {
        name: "AI PhotoMaster",
        price: 'FREE *',
        description: "Optimize visuals with our AI Image Editor, easily enhancing photos and applying themes to products—ideal for dynamic eCommerce and blogs.",
        picture: "icons/BrainIcon.svg",
    },
    {
        name: "Omni Mail Guard",
        price: '$35/M',
        description: "HIPAA-compliant contact form with end-to-end encryption and customizable templates for secure and seamless business-customer interactions.",
        picture: "icons/BrainIcon.svg",
    }
];

export default function OmniDesk() {

    return (
        <div className={styles.servicesMain} >
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`}>Alumni Additions</h1>
                <div className={styles.blockBackground}>
                    <div className={styles.additions}>
                        {data.map((myData) =>
                            <Additions {...myData} key={myData.name}/>
                        )}
                    </div>
                    <div className={styles.astriWarning}>

                    <h1 className={styles.warning}>*Only available under Tier 2. FREE monthly usage limits</h1>
                </div>
                </div>
            </div>
        </div>
    );
}

function Additions(props: AdditionsData) {
    return (
        <div className={styles.additionsMain}>
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
