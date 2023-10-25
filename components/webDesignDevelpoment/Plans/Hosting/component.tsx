// Hosting Plans
// The CSS only allows for two.  Didnt have time for making it universal.
import Spacer from '@/components/shared/PageSpacer/component';
import styles from './styles.module.css';

interface hostData {
    title: string;
    subTitle: string;
    description: string;
    note?: string;
    mostPop: boolean;
}

const advertBanner: hostData[] = [
    {
        title: 'Managed Hosting',
        subTitle: 'Hassle-Free Hosting & Full Support',
        description: 'With Managed Hosting, not only do you retain ownership of your code, but you also benefit from a robust 99.99% uptime, top-tier security, and automatic updates.\n\n Our 24/7 dedicated support complements monthly allocated hours for tailored design & dev adjustments.\n\n Let us handle the intricacies, freeing you to focus on your core business.',
        mostPop: true
    },
    {
        title: 'Self-Hosting',
        subTitle: 'Ownership, Flexibility & Control',
        description: "Self-Hosting offers the flexibility and autonomy of controlling your environment. While you naturally own your code, this option grants you direct access to your data and the codebase. Modify and customize at your own pace.",
        note: "Note: Maintenance and support is not included but can be purchased hourly via our Alumni services at discounted rates.",
        mostPop: false
    }
]


export default function Hosting() {

    const normBoxBorder = '2px solid rgba(62, 220, 255, 0.25)';
    const mostPopBoxBorder = '2px solid #3EDCFF';
    const boxShadow = '0px 0px 10px 0px rgba(62, 220, 255, 0.50), 0px 3px 3px 0px rgba(0, 0, 0, 0.3)';

    return (

        <div className={styles.hostMain}>
            <div className={styles.titleContainer}>
                <div className={styles.titleContent}>

                    <h1 className={styles.hostingTitle}>Hosting</h1>
                </div>
            </div>

            <div className={styles.hostDataContainer}>

                {advertBanner.map((data, index) => {
                    const descriptionParagraphs = data.description.split('\n');
                    const paraCount = descriptionParagraphs.length;
                    return (
                        <div key={'host: ' + index} className={styles.hostBorder} style={data.mostPop ?
                            {
                                border: mostPopBoxBorder,
                                boxShadow: boxShadow,
                                background: "#202325"
                            } : {
                                border: normBoxBorder,
                                background: "#1B1D1E"
                            }}>
                            <div className={styles.hostBackground}>
                                <div className={styles.hostData} style={{ marginBottom: (data.note ? '0px' : '30px') }}>
                                    <h1 className={styles.title}> {data.title}</h1>
                                    <h2 className={styles.subTitle}> {data.subTitle}</h2>
                                    <hr className={styles.lineSeperator} />
                                    {descriptionParagraphs.map((paragraph, idx) => (
                                        <>
                                        <p key={idx} className={styles.description}>{paragraph}</p>
                                        {paraCount !== (idx + 1) && <Spacer height='5px'/>}
                                        </>
                                    ))}
                                    {data.note && <p className={styles.note}>{data.note}</p>}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
