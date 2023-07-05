"use client"
import Lottie from 'lottie-react'
import styles from './styles.module.css';
import construction from '../../../public/lottie/construction.json';
import { Section } from '../../../types/interfaces';
import MyInfoCard from '../../shared/carousels/infoCaro/Card/component'

//<Lottie animationData={construction} autoplay={true}  loop={true} className={styles.lottieAnimation}/>

export default function Service({ section }: { section: Section }) {

    const myData: Section = section;

    return (
        <div className={styles.serviceMain}>

            <div className={`${styles.contentContainer} `}>

                    <div className={styles.engravedContainer}>
                        <div className={`${styles.fullHeight} row justify-content-center`}>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center">
                                <MyInfoCard />
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center ">
                                <img src="/icons/OmniHomeWebDesignImage.png" alt="description" className={`${styles.img} img-fluid `}/>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
