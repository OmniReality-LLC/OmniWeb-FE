// Custom 'service' tier offering.
// You can only use 3 tiers unless you modify the css to take more dor less.
import styles from './styles.module.css';
import Button from '../../shared/Buttons/component'
import TopBanner from './TopBanner/component';

interface webPlansInterface {
    title: string;
    subTitle: string;
    price: string;
    mostPopular: boolean;
    priceHeaderText: string;
    includedPoints: string[];
}

const advertBanner = [
    { icon: '/icons/OneIcon.svg', phrase: 'Free Domain Name' },
    { icon: '/icons/AnalyticsIcon.svg', phrase: 'Website Analytics' },
    { icon: '/icons/CustomDesignIcon.svg', phrase: 'Custom Design' },
]

const webPlans = [
    {
        title: "Starter",
        subTitle: "Blogs, Portfolios and More",
        price: "$7,500",
        mostPopular: false,
        priceHeaderText: 'Starting At',
        includedPoints: [
            'Up to 5 custom-designed pages',
            'Responsive design on mobile and desktop',
            'Encrypted contact form',
            'Interactive Elements (Boost engagement with custom animations, and dynamic content)',
            'Social media integration (icons, posts)',
            'Basic SEO',
            'SSL Certification (Secured HTTPS)',
            '1-month of FREE T1 hosting & maintenance (after that, maintenance packages are available)'
        ]
    },
    {
        title: "Pro",
        subTitle: "E-commerce Capable",
        price: "$12,500",
        mostPopular: true,
        priceHeaderText: 'Starting At',
        includedPoints: [
            'Everything in Starter +',
            'Up to 10 custom-designed pages',
            'E-commerce Integration',
            '3D Model Integration',
            'Augmented Reality Integration',
            'Social media page optimization',
            'Speed loading and time optimization',
            '2 months of FREE T1 hosting & maintenance (after that, maintenance packages are available)'
        ]
    },
    {
        title: "Enterprise",
        subTitle: "SaaS Capable",
        price: "Custom",
        mostPopular: false,
        priceHeaderText: 'Contact',
        includedPoints: [
            "Everything in Pro +",
            "More than 10 custom-designed pages",
            "Integration with external systems (e.g., CRM, ERP, and third-party APIs)",
            "Option for unlimited additional features and integrations",
            "Tailored maintenance and support package to fit your needs",
            "3 months of custom-tailored support for free. Subsequent maintenance packages are available upon request."
        ]
    }
];


export default function WebsiteService() {

    return (
        <div className={styles.servicesMain} id='services'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`} data-text="Website Services">Website Services</h1>
                <div className={styles.blockBackground}>
                    <TopBanner elements={advertBanner}/>
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
                marginTop: '-5%'
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
                        {props.includedPoints.map((value, index) =>
                            <li key={index} className={styles.pointItem}>{value}</li>
                        )}
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
