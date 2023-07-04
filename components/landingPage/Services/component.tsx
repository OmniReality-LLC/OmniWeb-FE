"use client"
import Lottie from 'lottie-react'
import styles from './styles.module.css';
import construction from '../../../public/lottie/construction.json';
import { Section } from '../../../types/interfaces';

//<Lottie animationData={construction} autoplay={true}  loop={true} className={styles.lottieAnimation}/>

export default function Service({ section }: { section: Section }) {

    const myData: Section = section;

    return (
        <div className={styles.serviceMain}>
            <div className={`${styles.contentContainer}`}>
                <div className='container'>
                    <h1>{myData.title}</h1>
                </div>
            </div>
        </div>
    )
}
