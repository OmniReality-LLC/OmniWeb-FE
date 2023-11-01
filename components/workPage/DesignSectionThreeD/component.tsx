import ModelViewer from '@/components/shared/ModelViewer/component';
import styles from './styles.module.css';
import ServiceCard from '../ServiceCardWorkPage/component';


//https://store.steampowered.com/app/2380910/Not_The_North_Pole/
const xrServices = [
    {
        subTitle: "Seeburg’s 1974 Quadraphinic Sound Jukebox Replica",
        listItems: [
            { specialText: 'Interactive ', mainText: 'keypad with moveable buttons' },
            { specialText: 'Illuminated ', mainText: 'numbers' },
            { specialText: '160 interactive ', mainText: 'songs to play' },
            { specialText: 'Hyper-realistic, ', mainText: 'functional replica' },
        ],
        glb: 'https://cdn.omnireality.us/jukebox.glb',
        alt: 'Picture of a 3D Quadrophonicsound Jukebox',
        minOrbit: 'auto auto 2.5m',
        flipped: false
    },
    {
        subTitle: "Not The North Pole VR Experience",
        listItems: [
            { specialText: 'Northern Winter Survival Game', mainText: '' },
            { specialText: 'Adventure/Survival', mainText: '' },
            { specialText: 'Upgradable items, Hot-Swap Menu ', mainText: '' },
            { specialText: 'Throwables, Scare tactics, Projectiles', mainText: '' },
        ],
        glb: 'https://cdn.omnireality.us/MechaSanta_IdleAnim.glb',
        alt: 'Picture of a 3D MechaSanta for the video game Not The North Pole',
        minOrbit: 'auto auto 2.5m',
        flipped: true
    },
    {
        subTitle: "Hyper Realistic WIFI Receiver Replica",
        listItems: [
            { specialText: 'Replica ', mainText: 'of BrosTrend WIFI Receiver' },
            { specialText: 'Grabbable, Throwable ', mainText: ' within VR' },
            { specialText: 'Interactive lights ', mainText: 'power up upon plugin' },
            { specialText: 'Realistic ', mainText: 'PBR materials' },
        ],
        glb: 'https://cdn.omnireality.us/WiFiReciever_Model.glb',
        alt: 'Picture of a 3D WiFi Reciever',
        minOrbit: 'auto auto 2.5m',
        flipped: false
    }

];


export default function DesignSectionThreeD() {

    return (
        <div className={styles.servicesMain}>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title} `}>3D Designs</h1>
                <div className={styles.cardBackground}>
                    {xrServices.map((item, index) =>
                        item.flipped ?

                            <div className={`${styles.cardItemsContainer} `} key={item.subTitle + index}>
                                <div className={styles.firstContainerFlipped} >
                                    <div className={styles.smallCardContent}>
                                        <ServiceCard carouselItems={item} />
                                    </div>


                                </div>
                                <div className={styles.secondContainerFlipped}>

                                    <ModelViewer glbSrc={item.glb} alt={item.alt} minOrbit={item.minOrbit} />

                                </div>
                            </div>

                            :
                            <div className={`${styles.cardItemsContainer} `} key={item.subTitle + index}>
                                <div className={styles.firstContainer} >
                                    <div className={styles.smallCardContent}>
                                        <ServiceCard carouselItems={item} />
                                    </div>
                                </div>
                                <div className={styles.secondContainer}>
                                    <ModelViewer glbSrc={item.glb} alt={item.alt} minOrbit={item.minOrbit} />
                                </div>
                            </div>
                    )}
                </div>
            </div>
        </div>
    );
};
