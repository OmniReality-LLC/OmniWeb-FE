import styles from './styles.module.css';
import Image from 'next/image';

export default function Footer() {

        const data = {
            textColor: '#7E7E7E', // replace with your desired value
            textHoverColor: 'red', // replace with your desired value
            backgroundColor: '#161616', // replace with your desired value
            logoSrc: '/icons/OmniLogoFooter.svg', // replace with your logo path
            enableOpacity: false,
            navigationLinks: [
                { href: '/', text: 'Home' },
                { href: '/#services', text: 'Services' },
                { href: '/work', text: 'Our Work' },
                { href: '/about', text: 'About' },

            ],
            getInTouchItems: [
                { text: "Contact Us", href: '/contact' },
                { text: "Schedule A Call", href: 'https://calendly.com/omnireality/free-consultation' },
                { text: "hello@omnireality.us", href: 'mailto:hello@omnireality.us' },
                "Owned And Operated In The U.S"
            ]
        }
    const backgroundColorWithOpacity = data.enableOpacity ? `${data.backgroundColor.slice(0, -1)}, 0.5)` : data.backgroundColor;


return (
    <div className={styles.bannerContainer} style={{ background: backgroundColorWithOpacity }}>
        <div className={styles.items}>
            <div className={`${styles.navContainer} ${styles.itemMargin}`}>
                <h1 className={styles.navTitle} style={{ color: 'white' }}>Navigation</h1>
                {data.navigationLinks.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.navItem}
                        style={{ color: data.textColor }}
                    >
                        {link.text}
                    </a>
                ))}
            </div>
            <div className={`${styles.copyrightContainer} ${styles.itemMargin}`}>
                <div className={styles.copyrightTitleContainer}>
                    <div className={styles.testing}>
                        <Image
                            src={data.logoSrc}
                            alt='Logo'
                            width={1920}
                            height={1080}
                            className={styles.bottomLogo}
                        />

                    </div>
                </div>
                <div className={styles.copyrightText} style={{ color: data.textColor }}>
                    Copyright © 2023 OmniReality LLC
                </div>
            </div>
            <div className={styles.contactDetailsContainer}>
                <div className={`${styles.contactDetailsContent} ${styles.mobileLine}`}>
                    <h1 className={styles.contactTitle} style={{ color: 'white' }}>Get In Touch</h1>
                    {data.getInTouchItems.map(item => (
                        typeof item === 'string'
                        ? <p key={item} className={styles.contactItemString} style={{ color: data.textColor }}>{item}</p>
                        : <p key={item.text} className={styles.contactItem} style={{ color: data.textColor }}>
                            <a href={item.href} className={styles.emailLink} style={{ color: data.textColor }}>
                                {item.text}
                            </a>
                          </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
)
}
