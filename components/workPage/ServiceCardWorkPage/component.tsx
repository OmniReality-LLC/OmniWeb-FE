"use client"
import styles from './styles.module.css';
import SlideGlowLinkBtn from '../../shared/Buttons/component'

interface ListItem {
    mainText: string;
    specialText: string;
}

interface SmallCardProps {
    iconSrc: string;
    subSubTitle: string;
    description: string;

}

interface CarouselItemProps {
    subTitle: string;
    smallCard?: SmallCardProps;
    listItems?: ListItem[];

}

interface ServiceCardProps {
    carouselItems: CarouselItemProps;
    linkTo?: string;
    buttonText?: string;
}



export default function ServiceCard({ carouselItems, linkTo, buttonText }: ServiceCardProps) {
    return (

        <div className={styles.mainCar}>



            <div className={styles.carouselItem}>
                <h2 className={styles.subTitle}>{carouselItems.subTitle}</h2>

                {carouselItems.smallCard && (
                    <div className={styles.centerSmallCardContainer}>
                        <div className={styles.smallCardContainer}>
                            <div className={styles.iconContainer}>
                                <img src={carouselItems.smallCard.iconSrc} className={styles.svgIcon} loading='lazy' />
                            </div>
                            <div className={styles.textContainer}>
                                <h3 className={styles.subSubTitle}>{carouselItems.smallCard.subSubTitle}</h3>
                                <p className={styles.description}>{carouselItems.smallCard.description}</p>
                            </div>
                        </div>
                    </div>
                )}

                {carouselItems.listItems && (
                    <div className={styles.listContainer}>
                        <ul className={styles.bulletList}>
                            {carouselItems.listItems.map((listItem, liIndex) => (
                                <li key={liIndex} className={styles.listItem}>
                                     <span className={styles.specialText}>{listItem.specialText}</span> {listItem.mainText}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {buttonText && <div className={styles.button}>
                <SlideGlowLinkBtn text={buttonText} linkTo={linkTo} textColor='#D4D4D4' bgColor='transparent' marginL='0' marginB='0px' marginR='0px' marginT='20px' />
            </div>}
        </div>

    );
}
