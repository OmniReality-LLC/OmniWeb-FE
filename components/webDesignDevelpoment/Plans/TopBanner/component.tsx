// Custom 'service' tier offering.
// You can only use 3 tiers unless you modify the css to take more dor less.
import styles from './styles.module.css';

interface banner {
    icon: string;
    phrase: string;
}

interface bannerInput {
    elements: banner[]
}

const advertBanner:banner[] = [
    { icon: '/icons/OneIcon.svg', phrase: 'Free Domain Name' },
    { icon: '/icons/AnalyticsIcon.svg', phrase: 'Website Analytics' },
    { icon: '/icons/CustomDesignIcon.svg', phrase: 'Custom Design' },
]

export default function TopBanner(props: bannerInput) {

    return (

        <div className={styles.plansBanner}>
            <ul className={styles.plansBannerList}>
                {props.elements.map((myData) =>
                    <li className={styles.plansBannerItem} key={myData.phrase}>
                        <div className={styles.plansBannerItemContent}>
                            <img className={styles.plansBannerItemContentImg} src={myData.icon} alt='Icon resembling service' />
                            <h1 className={styles.plansBannerItemContentText}>{myData.phrase}</h1>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}
