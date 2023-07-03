"use client"
import Lottie from 'lottie-react'
import styles from './styles.module.css';
import construction from '../../../public/lottie/construction.json';

export default function Service() {
    return (
        <div className={styles.serviceMain}>
            <Lottie 
                animationData={construction} 
                autoplay={true} 
                loop={true} 
                className={styles.lottieAnimation}
            />
        </div>
    )
}
