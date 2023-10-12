'use client';
import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';
import Spacer from '@/components/shared/PageSpacer/component';
import OmniButtonGroup from '@/components/shared/Buttons/OmniCircleBtn/component'
import React from 'react';

// Define data structure types
type DataPoint = {
    subTitle: string;
    dataPoints: string[];
};

type PageData = {
    name: string;
    pagePicture: string;
    data: DataPoint[];

};

const data: PageData[] = [
    {
        name: "Dashboard",
        pagePicture: "testFolder/AdminPanelDashboard.png",
        data: [
            { subTitle: "Live Website Analytics:", dataPoints: ["Website metrics at a glance.", "Monitor real-time growth."] },
            { subTitle: "Graphical Representations:", dataPoints: ["Metrics simplified visually.", "Transition from numbers to visuals."] }
        ]
    },
    {
        name: "Account",
        pagePicture: "testFolder/AdminPanelAccount.png",
        data: [
            { subTitle: "Personal Details:", dataPoints: ["Edit account information.", "View plans and renewals."] },
            { subTitle: "Purchases & Payments:", dataPoints: ["Track your past purchases.", "Edit payment details and view plans."] }
        ]
    },
    {
        name: "Messages",
        pagePicture: "testFolder/AdminPanelMessages.png",
        data: [
            { subTitle: "Message Management:", dataPoints: ["Never miss important notifications.", "Organized messages in one place."] },
            { subTitle: "Features & Functionalities:", dataPoints: ["Download and store attachments.", "Stay updated, avoid clutter."] }
        ]
    },
    {
        name: "Add-ons",
        pagePicture: "testFolder/AdminPanelAddons.png",
        data: [
            { subTitle: "Add-on Management:", dataPoints: ["Manage your active add-ons.", "Request cancellations easily."] },
            { subTitle: "Acquire New Add-ons:", dataPoints: ["Discover new feature additions.", "Upgrade your site easily."] }
        ]
    }
];


export default function OmniDesk() {

    //This is the index to display and the sub-card which will have a glowing background
    const [indexToDisplay, setIndexToDisplay] = useState<number>(0);
    const [displayContent, setDisplayContent] = useState<PageData>(data[0]);
    const omniDeskMainViewRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const currentElem = omniDeskMainViewRef.current;

        if (currentElem) {
            setDisplayContent(data[indexToDisplay]); // change the content
            // Apply the fade-in animation to the new content
            currentElem.classList.remove(styles.fadeInAnimation); // ensure any previous animation is removed
            void currentElem.offsetWidth; // trigger a reflow
            currentElem.classList.add(styles.fadeInAnimation);
        }
    }, [indexToDisplay]);

    const decrementIndex = () => {
        setIndexToDisplay(prev => (prev > 0 ? prev - 1 : 3));
    }

    // Increase the indexToDisplay by 1, but don't go above 2
    const incrementIndex = () => {
        setIndexToDisplay(prev => (prev < 3 ? prev + 1 : 0));
    }

    return (
        <div className={styles.servicesMain} id='omniDesk'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`}>OmniDesk</h1>
                <div className={styles.blockBackground}>

                    <div className={styles.omniDeskContentMain}>


                        <div className={styles.omniDeskBlockDisplay}>
                            <Spacer height='25px' className={styles.mySpacerHeight} />
                            <div className={styles.omniDeskTitleContainer}>
                                <h2 className={styles.omniDeskSubtitle}>COMING SOON</h2>
                            </div>
                            {/* Render subviews based on data */}
                            <div className={styles.omniDeskSubviewsContainer}>
                                {data.map((myData, index) =>
                                    <div className={styles.subViewBorder} style={indexToDisplay == index ? { border: '2px solid #3EDCFF', background: '#202325' } : {}}>
                                        <OmniDeskSubview title={myData.name} image={myData.pagePicture} onClick={() => setIndexToDisplay(index)} key={myData.name} />
                                    </div>
                                )}
                            </div>
                            <div className={styles.omniDeskBottomDesc}>
                                <h3 className={styles.omniDeskBlockDesc}>And easy access to live support</h3>
                            </div>



                        </div>
                        {/* Render main view based on current index */}

                        <Spacer width='25px' className={styles.mySpacer} />
                        <div className={styles.omniDeskBlockDisplay}>
                            <OmniDeskMainView ref={omniDeskMainViewRef} {...displayContent} />
                            <OmniButtonGroup onClickLeft={decrementIndex} onClickRight={incrementIndex}/>
                        </div>
                    </div>






                </div>
            </div>
        </div>
    );
}

interface SubviewInterface {
    title: string;
    image: string;
    onClick: () => void;
}

function OmniDeskSubview(props: SubviewInterface) {

    const active = '2px solid #3EDCFF';

    return (
        <div className={styles.deskSubview} onClick={props.onClick}>
            <h1 className={styles.deskSubiewTitle}>{props.title}</h1>
            <img src={props.image} alt='OmniDesk Subview Image' className={styles.omniDeskImage} />
        </div>
    );
}

const OmniDeskMainView = React.forwardRef<HTMLDivElement, PageData>((props, ref?) => {
    return (
        <div className={styles.deskMainBorder} >
            <div className={styles.deskMainView} ref={ref}>
                <h1 className={styles.deskMainViewTitle}>{props.name}</h1>

                <div className={styles.blockBackground2}>
                    <div className={styles.imageContainer}>
                        <img className={styles.omniDeskImage2} src={props.pagePicture} alt='OmniDesk Main Image Display' />
                        <div className={styles.overlay}></div>
                    </div>
                </div>
                <div className={styles.omniDeskMainViewText}>

                    {props.data.map((myData, index) =>
                        <OmniDeskTextBlock  {...myData} key={'textblock' + index} />
                    )}

                </div>
            </div>
        </div>
    );
});

function OmniDeskTextBlock(props: DataPoint) {
    return (
        <div className={styles.omniDeskTextBlockMain}>
            <h2 className={styles.omniDeskTextBlockTitle}>{props.subTitle}</h2>
            {props.dataPoints.map((myData) =>
                <ul className={styles.omniTextBlockUL} key={'listblock: ' + myData}>
                    <li className={styles.omniTextBlockLI} key={'listitem' + myData}>
                        {myData}
                    </li>
                </ul>
            )}
        </div>
    );
}
