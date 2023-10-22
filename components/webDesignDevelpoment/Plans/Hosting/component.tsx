// Hosting Plans
// The CSS only allows for two.  Didnt have time for making it universal.
import styles from './styles.module.css';

interface hostData {
    title: string;
    subTitle: string;
    description: string;
    mostPop: boolean;
}

const advertBanner: hostData[] = [
    {
        title: 'Self-Hosting',
        subTitle: 'Absolute Control, Independence & Licensure',
        description: 'Maintain full control, ownership, and direct access to your data with the added benefit of a licensed codebase. Respond instantly to updates, ensuring timely adjustments tailored to your needs. With self-hosting, you dictate the pace, the rules, and have the option for licensed ownership of the codebase, ensuring clear rights and defined terms.',
        mostPop: false
    },
    {
        title: 'Managed Hosting',
        subTitle: 'Yearly Commitment, Hassle-Free Experience',
        description: 'Benefit from our pre-purchased annual server rates on both AWS and Azure. With managed hosting, you receive consistent backups, security monitoring, and premium support. Maintenance and other technical needs are all catered for by us.',
        mostPop: true
    },
]

export default function Hosting() {

    const normBoxBorder = '2px solid rgba(62, 220, 255, 0.25)';
    const mostPopBoxBorder = '2px solid #3EDCFF';
    const boxShadow = '0px 0px 10px 0px rgba(62, 220, 255, 0.50), 0px 3px 3px 0px rgba(0, 0, 0, 0.3)';

    return (

        <div className={styles.hostDataContainer}>
            {advertBanner.map((data, index) => (
                <div key={'host: ' + index} className={styles.hostBorder} style={data.mostPop ?
                    {
                        border: mostPopBoxBorder,
                        boxShadow: boxShadow,
                        background: "#202325",

                    } : {
                        border: normBoxBorder,
                        background: "#1B1D1E"
                    }}>
                    <div className={styles.hostBackground}>
                        <div className={styles.hostData}>
                            <h1 className={styles.title}> {data.title}</h1>
                            <h2 className={styles.subTitle}> {data.subTitle}</h2>
                            <hr className={styles.lineSeperator} />
                            <p className={styles.description}>{data.description}</p>
                        </div>
                    </div>
                </div>
            ))}






        </div>



    )
}
