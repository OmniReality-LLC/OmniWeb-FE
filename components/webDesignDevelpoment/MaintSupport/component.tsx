'use client'
import styles from './styles.module.css';
import Button from '../../shared/Buttons/component'
import Tooltip from './tooltip/component';
import { useEffect, useState } from 'react';

interface TitleBoxProps {
    title: string;
    mostPopular?: boolean;
}

const benefitsData = {
    title: 'Benefits',
    benefits: [
        { name: "Backups", infoIcon: true, info: "Automated backups safeguard your data, ensuring availability and recoverability.", tierCutoff: false },
        { name: "Software Update", infoIcon: true, info: "Ensure your platform is operating at peak performance with the latest software enhancements and security updates.", tierCutoff: false },
        { name: "Security Monitoring", infoIcon: true, info: "Continuous surveillance of your platform's security to preemptively address vulnerabilities and protect against malicious activities.", tierCutoff: false },
        { name: "Analytics", infoIcon: true, info: "Unlock user engagement insights and strategically enhance your user experience with analytics integration.", tierCutoff: false },
        { name: "Support", infoIcon: true, info: "Reliable, round-the-clock technical support to address inquiries and resolve issues promptly.", tierCutoff: false },
        { name: "Maintenance Report", infoIcon: true, info: "Receive detailed reports outlining performed maintenance activities and the ongoing health of your digital platform.", tierCutoff: false },
        { name: "Hosting", infoIcon: true, info: "Secure, high-performance hosting ensures your website remains accessible, fast, and reliable.", tierCutoff: false },
        { name: "Content Updates", infoIcon: true, info: "Leverage dedicated hours every month for design and development amendments, keeping your content fresh and relevant.", tierCutoff: false },
        {
            name: "C.L.A.R.A. Add-Ons",
            infoIcon: true,
            info: "Boost your platform's potential with C.L.A.R.A.—an AI-driven powerhouse. Experience revolutionary chat support, content creation, and image manipulation. Designed for impeccable user experience and unmatched operational efficiency.",
            tierCutoff: true
        },
        { name: "OmniDesk", infoIcon: true, info: "Harness the power of OmniDesk, providing live analytics, AI enhancements, and real-time support capabilities.", tierCutoff: false },
        { name: "Beta Add-ons", infoIcon: true, info: "Enjoy complimentary access to our in-development AI add-ons, experiencing the latest features before anyone else.", tierCutoff: false },
        { name: "Speed Insight", infoIcon: true, info: "Access critical data concerning website performance and acquire optimization recommendations for enhanced user experiences.", tierCutoff: false },
        { name: "Pro Support Queue", infoIcon: true, info: "Experience prioritized support with shorter wait times and rapid resolutions, ensuring minimal disruption to your operations.", tierCutoff: true },
        { name: "A/B Testing", infoIcon: true, info: "Utilize A/B testing to identify optimal user experiences and strategically refine interface and content effectiveness.", tierCutoff: false },
        { name: "Annual Web Refresh", infoIcon: true, info: "Keep your platform fresh and competitive with an annual overhaul, updating aesthetics and functionality to remain at the forefront of digital trends.", tierCutoff: false },
    ],



    tiers: [
        {
            name: "Tier 1",
            price: "$249",
            mostPop: false,
            benefits: [
                { name: "Backups", included: true, content: 'Weekly' },
                { name: "Software Update", included: true, content: 'CHECKBOX' },
                { name: "Security Monitoring", included: true, content: 'CHECKBOX' },
                { name: "Analytics", included: true, content: 'Monthly Newsletter' },
                { name: "Support", included: true, content: 'Email' },
                { name: "Maintenance Report", included: true, content: 'CHECKBOX' },
                { name: "Hosting", included: true, content: 'CHECKBOX' },
                { name: "Content Updates", included: true, content: '1 Hour Design & Development' },
                { name: "C.L.A.R.A. Add-Ons", included: true, content: 'CHECKBOX' },
                { name: "OmniDesk", included: false, content: 'CHECKBOX' },
                { name: "Free Beta Add-ons", included: false, content: 'CHECKBOX' },
                { name: "Speed Insight", included: false, content: 'CHECKBOX' },
                { name: "Pro Support Queue", included: false, content: 'CHECKBOX' },
                { name: "A/B Testing", included: false, content: 'CHECKBOX' },
                { name: "Annual Website Revitalization", included: false, content: 'CHECKBOX' }
            ]
        },
        {
            name: "Tier 2",
            price: "$599",
            mostPop: true,
            benefits: [
                { name: "Backups", included: true, content: 'Daily' },
                { name: "Software Update", included: true, content: 'CHECKBOX' },
                { name: "Security Monitoring", included: true, content: 'CHECKBOX' },
                { name: "Analytics", included: true, content: 'Real-time Analytics' },
                { name: "Support", included: true, content: 'Email + Live Support' },
                { name: "Maintenance Report", included: true, content: 'CHECKBOX' },
                { name: "Hosting", included: true, content: 'CHECKBOX' },
                { name: "Content Updates", included: true, content: '5 Hours Design & Development' },
                { name: "C.L.A.R.A. Add-Ons", included: true, content: 'CHECKBOX' },
                { name: "OmniDesk", included: true, content: 'CHECKBOX' },
                { name: "Free Beta Add-ons", included: true, content: 'CHECKBOX' },
                { name: "Speed Insight", included: true, content: 'CHECKBOX' },
                { name: "Pro Support Queue", included: true, content: 'CHECKBOX' },
                { name: "A/B Testing", included: false, content: 'CHECKBOX' },
                { name: "Annual Website Revitalization", included: false, content: 'CHECKBOX' }
            ]
        },
        {
            name: "Tier 3",
            price: "$899",
            mostPop: false,
            benefits: [
                { name: "Backups", included: true, content: 'Daily + On-demand' },
                { name: "Software Update", included: true, content: 'CHECKBOX' },
                { name: "Security Monitoring", included: true, content: 'CHECKBOX' },
                { name: "Analytics", included: true, content: 'Advanced Real-time Analytics + Reports' },
                { name: "Support", included: true, content: 'Priority Email + Live Support' },
                { name: "Maintenance Report", included: true, content: 'CHECKBOX' },
                { name: "Hosting", included: true, content: 'CHECKBOX' },
                { name: "Content Updates", included: true, content: '10 Hours Design & Development' },
                { name: "C.L.A.R.A. Add-Ons", included: true, content: 'CHECKBOX' },
                { name: "OmniDesk", included: true, content: 'CHECKBOX' },
                { name: "Free Beta Add-ons", included: true, content: 'CHECKBOX' },
                { name: "Speed Insight", included: true, content: 'CHECKBOX' },
                { name: "Pro Support Queue", included: true, content: 'CHECKBOX' },
                { name: "A/B Testing", included: true, content: 'CHECKBOX' },
                { name: "Annual Website Revitalization", included: true, content: 'CHECKBOX' }
            ]
        }
    ]
}



export default function WebsiteService() {

    const MOBILE_SCREEN_WIDTH = 850; // adjust as per your mobile design breakpoint

    const borderColor = "2px solid rgba(62, 220, 255, 0.50)";
    const borderColorNone = "none";

    // Initializing isMobile as false and updating it in a useEffect that runs client-side.
    const [isMobile, setIsMobile] = useState(false);
    const benefitsTierCount = benefitsData.tiers.length;
    const generateNumberArray = (length: number): number[] => Array.from({ length }, (_, i) => i);
    const numArray: number[] = generateNumberArray(benefitsTierCount);
    const namesList: string[] = benefitsData.tiers.map(tier => tier.name);

    // useEffect runs in the browser, after render. So window will be defined.
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= MOBILE_SCREEN_WIDTH);
        };

        // Initially check and set if it is mobile
        checkScreenSize();

        // Add event listener for resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []); // Empty dependency array means this useEffect runs once when component mounts.

    const [renderList, setRenderList] = useState<number[]>(numArray);

    useEffect(() => {
        if (isMobile) {
            setRenderList([0]);
        } else {
            setRenderList(numArray);
        }
    }, [isMobile]);

    const updateRenderList = (newRenderList: number[]) => {
        setRenderList(newRenderList);
    };

    return (
        <div className={styles.servicesMain} id='maintenance'>
            <div className={styles.contentMain}>
                <h1 className={`${styles.title}`}>Maintenance & Support</h1>
                <div className={styles.blockBackground}>

                    <h1 className={styles.comparePlansText} >Compare Monthly Plans</h1>
                    <h4 className={styles.yearlyPlanText} >*Yearly commitment required</h4>

                    {isMobile && <Button text={'Get In Touch'} linkTo={''} marginT='20px' className={styles.buttonMobile} textSize='24px' bgColor='transparent' decoratorBgColor='#191A1B' />}
                    {isMobile && <DiamondArrowButton listOfNames={namesList} updateRenderList={updateRenderList} />}

                    <div className={styles.plansContainerMain}>


                        <div className={styles.planContainerShadow}>
                            <div className={styles.titleContainer}>
                                {/* Benefits Title */}
                                <PlansTitle title={benefitsData.title} mostPopular={false} />
                                {
                                    renderList.map((index) =>
                                        /* Benefits Tier Titles */
                                        <PlansTitle
                                            title={benefitsData.tiers[index].name}
                                            key={benefitsData.tiers[index].name}
                                            mostPopular={benefitsData.tiers[index].mostPop}
                                        />
                                    )
                                }
                            </div>
                            {/* Price Row */}
                            <div className={styles.priceContainer}>
                                {/* Blank cell for the benefits column */}
                                <TableTierCell name={''} included={false} content={''} leftBorder={borderColorNone} rightBorder={borderColorNone} mostPop={false} benefitsIcon={false} benefitsString={''} benefitInfo={''} />
                                {
                                    renderList.map((index) =>
                                        <TableTierCell
                                            key={benefitsData.tiers[index].price}
                                            name={benefitsData.tiers[index].price}
                                            included={true}
                                            content={benefitsData.tiers[index].price}
                                            leftBorder={borderColor}
                                            rightBorder={borderColorNone}
                                            mostPop={benefitsData.tiers[index].mostPop}
                                            benefitsIcon={false}
                                            benefitsString={''}
                                            benefitInfo={''}
                                            isPrice={true}
                                        />
                                    )
                                }

                            </div>
                            <Spacer darkerSpacer={true} />
                            <div className={styles.tableContainer}>
                                {benefitsData.benefits.map((myBenefit, myIndex) =>
                                    <div key={"row" + myIndex} className={styles.rowContainer}>
                                        <div className={styles.tableRow}>
                                            {/* Benefits Column */}
                                            <TableTierCell name={myBenefit.name} included={true} content={myBenefit.name} leftBorder={borderColorNone} rightBorder={borderColorNone} mostPop={false} benefitsIcon={myBenefit.infoIcon} benefitsString={myBenefit.info} benefitInfo={myBenefit.info} benefitsColumn={true} />
                                            {
                                                renderList.map((index) =>
                                                    /* Tier rows/columns */
                                                    <TableTierCell
                                                        key={'benefitTier' + index}
                                                        name={benefitsData.tiers[index].benefits[myIndex].name}
                                                        included={benefitsData.tiers[index].benefits[myIndex].included}
                                                        content={benefitsData.tiers[index].benefits[myIndex].content}
                                                        leftBorder={borderColor}
                                                        rightBorder={borderColorNone}
                                                        mostPop={benefitsData.tiers[index].mostPop}
                                                        benefitsIcon={false}
                                                        benefitsString={''}
                                                        benefitInfo={''}
                                                    />
                                                )
                                            }

                                        </div>
                                        <Spacer darkerSpacer={myBenefit.tierCutoff} />
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                    {!isMobile &&
                        <Button
                            className={styles.myButton}
                            text={'Coming Soon'}
                            linkTo={''}
                            marginB='50px'
                            bgColor='transparent'
                        />}




                </div>
            </div>
        </div>
    );
};

interface SpacerProps {
    darkerSpacer: boolean;
}

function Spacer(props: SpacerProps) {

    return (
        <div className={props.darkerSpacer ? styles.darkSpacer : styles.spacer} />
    )
}

function MostPopularTag(props: TitleBoxProps) {

    return (
        <div className={styles.mostPopTagContainer}>
            <div className={styles.firstInnerBox}>
                <div className={styles.secondInnerBox}>
                    <div className={styles.box}>
                        <div className={styles.innerBox}>
                            <h1 className={styles.tagTitle}>Most Popular</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



function PlansTitle(props: TitleBoxProps) {

    return (

        (props.mostPopular ?

            <div className={styles.plansTitleContainer}>
                <MostPopularTag title={'Most Popular'} />
                <div className={styles.plansTitlefirstInnerBox}>
                    <div className={styles.plansTitlesecondInnerBox}>
                        <h1 className={styles.plansTitleboxTitle}>{props.title}</h1>
                    </div>
                </div>
            </div>

            :

            <div className={styles.plansTitleContainer}>
                <div className={styles.plansTitlefirstInnerBox}>
                    <div className={styles.plansTitlesecondInnerBox}>
                        <h1 className={styles.plansTitleboxTitle}>{props.title}</h1>
                    </div>
                </div>
            </div>
        )
    );
}

interface TableTierCell {
    name: string,
    included: boolean,
    content: string;
    leftBorder: string;
    rightBorder: string;
    mostPop: boolean;
    benefitsIcon: boolean;
    benefitsString: string;
    benefitInfo: string;
    benefitsColumn?: boolean;
    isPrice?: boolean;

}

function TableTierCell(props: TableTierCell) {
    const mostPopCellColorMobile = 'linear-gradient(90deg, transparent, #191A1B)';
    const mostPopCellColor = '#202325';

    return (

        <div className={styles.tableTierCell} style={{ borderLeft: props.leftBorder, borderRight: props.rightBorder }}>
            <div className={props.mostPop && props.included ? styles.tableTierCellContentPop : styles.tableTierCellContent} style={props.isPrice ? { backgroundColor: 'transparent' } : props.benefitsColumn ? { justifyContent: 'left' } : {}}>
                {props.included ?
                    (props.content == "CHECKBOX" ?
                        <img src='/icons/CheckmarkIcon.svg' className={styles.checkMarkSVG} />
                        :
                        (props.benefitsIcon ?
                            <>
                                <h1 className={props.benefitsColumn ? styles.tableTierCellTextBenefitsColumn : styles.tableTierCellText}>
                                    {props.content}
                                </h1>
                                <Tooltip content={props.benefitInfo}>
                                    <img src='/icons/InformationIcon.svg' className={styles.infoIcon} />
                                </Tooltip>
                            </>
                            : <h1 className={props.benefitsColumn ? styles.tableTierCellTextBenefitsColumn : styles.tableTierCellText} style={(props.mostPop && props.isPrice) ? { textShadow: '0px 0px 6px #3EDCFF' } : { textShadow: 'none' }}>{props.content}</h1>)
                    )

                    :
                    <></>
                }
            </div>
        </div>
    )
}

interface DiamondButtonInterface {
    listOfNames: string[];
    updateRenderList: (newRenderList: number[]) => void;

}

interface DiamondButtonNavInterface {
    listOfNames: string[];
    isOpen: boolean;
    updateRenderList: (newRenderList: number[]) => void;
    toggleMenu: () => void; // Added toggleMenu
}

function DiamondArrowButton(props: DiamondButtonInterface) {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const handleButtonClick = () => setIsMenuVisible(!isMenuVisible);

    const arrow = (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="8" viewBox="0 0 13 8" fill="none">
            <path
                d="M1 7L5.71368 1.00077C6.11406 0.491197 6.88594 0.491197 7.28632 1.00077L12 7"
                stroke="url(#paint0_linear_1182_2222)"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1182_2222"
                    x1="6.21053"
                    y1="7.36842"
                    x2="6.21078"
                    y2="-1.10526"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="0.59375" stopColor="white" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    );

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);

    return (
        <div className={styles.diamondButtonMain}>
            <button
                className={styles.diamondButton}
                onClick={handleButtonClick}
            >
                <span className={styles.arrowUp}>{arrow}</span>
                <span className={styles.arrowDown}>{arrow}</span>
                Select Tier
            </button>

            <BottomNavMenu
                listOfNames={props.listOfNames}
                isOpen={isMenuVisible}
                updateRenderList={props.updateRenderList}

                toggleMenu={toggleMenu}

            />
        </div>
    );
}



function BottomNavMenu(props: DiamondButtonNavInterface) {
    const menuClass = props.isOpen ? styles.bottomNavMenu : `${styles.bottomNavMenu} ${styles.closed}`;
    const [activeTier, setActiveTier] = useState<number>(0);
    const handleTierClick = (index: number) => {
        props.updateRenderList([index]);
        props.toggleMenu();
        setActiveTier(index);
    };

    const handleOverlayClick = () => {
        props.toggleMenu();
    };

    return (
        <>
            {props.isOpen && <div className={styles.overlay} onClick={handleOverlayClick}></div>}
            <div className={menuClass}>
                {props.listOfNames.map((name, index) => (
                    <button
                        key={name}
                        onClick={() => handleTierClick(index)}
                        className={styles.tierButton}
                        style={index == activeTier ? { color: "#3EDCFF" } : { color: '#FFF' }}
                    >
                        {name}
                        {index == activeTier &&
                            <svg className={styles.checkmarkIcon} xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.7472 0.265672C22.0855 0.618674 22.0841 1.1896 21.7441 1.54088L7.75025 16L0.255864 8.25646C-0.084107 7.90519 -0.0854569 7.33426 0.252849 6.98126C0.591155 6.62825 1.14101 6.62685 1.48098 6.97812L7.75025 13.4558L20.519 0.262541C20.859 -0.0887326 21.4088 -0.087331 21.7472 0.265672Z" fill="#3EDCFF" />
                            </svg>
                        }
                    </button>
                ))}
            </div>
        </>
    );
}
