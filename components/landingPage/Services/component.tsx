import styles from './styles.module.css';
import Image from 'next/image';
import ServiceCard from '../../shared/ServiceCard/component'




export default function ServicesSection() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>Website Services</h1>
                <div className={styles.cardBackground}>
                    <div className={`${styles.cardItemsContainer} `}>
                        <div className={styles.firstContainer}>
                            <div className={styles.smallCardContent}>
                                <ServiceCard/>
                            </div>
                        </div>
                        <div className={styles.secondContainer}>
                            <Image src='/icons/webDesignImage.png' className={styles.SVG} alt={'Image of a laptop computer'} width={843} height={562}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
