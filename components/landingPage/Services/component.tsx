"use client"
import Lottie from 'lottie-react'
import styles from './styles.module.css';
import construction from '../../../public/lottie/construction.json';
import { Section } from '../../../types/interfaces';
import MyInfoCard from '../../shared/carousels/infoCaro/Card/component'

//<Lottie animationData={construction} autoplay={true}  loop={true} className={styles.lottieAnimation}/>

export default function Service({ section, topShadow }: { section: Section, topShadow: boolean }) {

    const myData: Section = section;
    const shadowData = {
        topBottomShadow: '0 -2px 5px rgba(255, 255, 255, 0.1), 0 2px 5px rgba(0, 0, 0, 1)',
        bottomOnly: '0 3px 6px -2px rgba(0, 0, 0, 1)'
    }

    return (
        <div className={`${styles.serviceMain} `} style={{
            boxShadow: topShadow ? (shadowData.topBottomShadow) : (shadowData.bottomOnly)
        }}>
            <div className={styles.engravedContainer}>
                <div className={`${styles.containerTest} container`}>
                    <div className={`${styles.rowContent} justify-content-center`}>

                        <div className={`${styles.infoCardHolder} d-flex justify-content-center align-items-center`}>
                            <MyInfoCard />
                        </div>
                        <div className={`${styles.imgContainer} d-flex justify-content-center align-items-center`}>
                            <img src="/icons/OmniHomeWebDesignImage.png" alt="description" className={`${styles.img} img-fluid`} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
