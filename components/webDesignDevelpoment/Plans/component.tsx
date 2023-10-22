// Custom 'service' tier offering.
// You can only use 3 tiers unless you modify the css to take more dor less.
import styles from './styles.module.css';
import Button from '../../shared/Buttons/component'
import TopBanner from './TopBanner/component';
import Hosting from './Hosting/component';

interface ListItem {
    mainText: string;
    specialText: string;
}

interface webPlansInterface {
    title: string;
    subTitle: string;
    price: string;
    mostPopular: boolean;
    priceHeaderText: string;
    includedPoints: ListItem[];
}

const advertBanner = [
    { icon: '/icons/OneIcon.svg', phrase: 'Free Domain Name' },
    { icon: '/icons/AnalyticsIcon.svg', phrase: 'Website Analytics' },
    { icon: '/icons/CustomDesignIcon.svg', phrase: 'Custom Design' },
]

const webPlans: webPlansInterface[] = [
    {
        title: "Starter",
        subTitle: "Blogs, Portfolios, and More",
        price: "$7,500",
        mostPopular: false,
        priceHeaderText: 'Starting Price',
        includedPoints: [
            { mainText: 'Bespoke page designs:', specialText: 'Up to 5' },
            { mainText: 'Device optimization:', specialText: 'Mobile and desktop' },
            { mainText: 'Contact form:', specialText: 'Secure and encrypted' },
            { mainText: 'Enhance user engagement with', specialText: 'Interactive elements' },
            { mainText: 'Social media:', specialText: 'Integrated icons and live posts' },
            { mainText: 'SEO:', specialText: 'Foundational setup' },
            { mainText: 'Browsing experience:', specialText: 'SSL certified (HTTPS)' },
            { mainText: 'Maintenance & support:', specialText: '1-month off when purchased' }
        ]
    },
    {
        title: "Pro",
        subTitle: "E-commerce Capable",
        price: "$12,500",
        mostPopular: true,
        priceHeaderText: 'Starting Price',
        includedPoints: [
            { mainText: 'Includes everything from', specialText: 'Starter plan' },
            { mainText: 'Bespoke page designs:', specialText: 'Up to 10' },
            { mainText: 'Platform:', specialText: 'Full E-commerce integration' },
            { mainText: 'Visuals:', specialText: 'Incorporate 3D Models' },
            { mainText: 'User experience:', specialText: 'Augmented Reality features' },
            { mainText: 'Social media pages:', specialText: 'Optimized for brand consistency' },
            { mainText: 'Website:', specialText: 'Speed optimized for faster loads' },
            { mainText: 'Maintenance & support:', specialText: '2 months off when purchased' }
        ]
    },
    {
        title: "Enterprise",
        subTitle: "SaaS Capable",
        price: "Custom Quote",
        mostPopular: false,
        priceHeaderText: 'Please Inquire',
        includedPoints: [
            { mainText: 'Includes everything from', specialText: 'Pro plan' },
            { mainText: 'Bespoke page designs:', specialText: '10+' },
            { mainText: 'Integration:', specialText: 'CRM, ERP, and more' },
            { mainText: 'Additional features and integrations:', specialText: 'Unlimited' },
            { mainText: 'Maintenance & support:', specialText: 'Customized to your needs' },
            { mainText: 'Commitment offer:', specialText: '3 months off maintenance & support' }
        ]
    }
];


export default function WebsiteService() {

    return (
        <div className={styles.servicesMain} id='services'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} data-text="Website Services">Website Services</h1>
                <div className={styles.blockBackground}>
                    <TopBanner elements={advertBanner} />
                    <div className={`${styles.plansContainer} `}>
                        {webPlans.map((plan, index) => (
                            <PlanCard
                                key={index}
                                title={plan.title}
                                subTitle={plan.subTitle}
                                price={plan.price}
                                mostPopular={plan.mostPopular}
                                includedPoints={plan.includedPoints}
                                priceHeaderText={plan.priceHeaderText}
                            />
                        ))}
                    </div>

                    <Hosting/>
                    <Button text={'Contact'} linkTo={'/contact'} className={styles.myButton} marginB='2.5%' />
                </div>
            </div>
        </div>
    );
};

function PlanCard(props: webPlansInterface) {
    const normBoxBorder = '2px solid rgba(62, 220, 255, 0.25)';
    const mostPopBoxBorder = '2px solid #3EDCFF';
    const boxShadow = '0px 0px 10px 0px rgba(62, 220, 255, 0.50), 0px 3px 3px 0px rgba(0, 0, 0, 0.3)';
    return (
        <div className={styles.planCardContainer} style={props.mostPopular ?
            {
                border: mostPopBoxBorder,
                boxShadow: boxShadow,
                background: "#202325",
                transform: 'translateY(-5%)'

            } : {
                border: normBoxBorder,
                background: "#1B1D1E"
            }}>
            <MostPopularTag mostPop={props.mostPopular} />
            <div className={styles.planCardMain}>
                {/* Title, Subtitle, and Price Container */}
                <h1 className={styles.startAtText}>{props.priceHeaderText}</h1>
                <div className={styles.titleAndPrice}>

                    {/* Title and Subtitle*/}
                    <div className={styles.titleContainer}>
                        <h1 className={styles.planCardTitle}>{props.title}</h1>
                        <h2 className={styles.planCardSubTitle}>{props.subTitle}</h2>
                    </div>
                    {/* Price */}
                    <div className={styles.priceContainer}>
                        <div className={styles.svgContainer}>
                            <p className={styles.price}>{props.price}</p>
                        </div>
                    </div>
                </div>
                {/* Line Divider */}
                <hr className={styles.lineSeperator} />
                {/* Points Container */}
                <div className={styles.pointsContainer}>
                    <ul className={styles.pointsList}>
                        {/* Points */}
                        {props.includedPoints.map((listItem, liIndex) => (
                            <li key={liIndex} className={styles.pointItem}>
                                {listItem.mainText} <span className={styles.specialText}>{listItem.specialText}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

interface PopProps {
    mostPop: boolean
}
function MostPopularTag({ mostPop }: PopProps) {

    if (!mostPop) {
        return null;
    }
    return (
        <div className={styles.mostPopTagContainer}>
            <div className={styles.firstInnerBox}>
                <div className={styles.secondInnerBox}>
                    <div className={styles.box}>
                        <div className={styles.innerBox}>
                            <h1 className={styles.tagTitle}>Most Popular</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
