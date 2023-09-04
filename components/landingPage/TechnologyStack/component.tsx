import styles from './styles.module.css';


export default function TechStackSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
            <h1 className={`${styles.title}`} data-text="Integration">Integrations</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                    </div>
                </div>
            </div>
        </div>
    );
};
