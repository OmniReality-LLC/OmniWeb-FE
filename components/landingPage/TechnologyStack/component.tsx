import styles from './styles.module.css';
import Image
 from 'next/image';
export default function TechStackSection() {
  const icons = [
    '3DSmaxIcon',
    'AdobeIcon',
    'AzureIcon',
    'BlenderIcon',
    'CloudinaryIcon',
    'FigmaIcon',
    'GoogleAnalyticsIcon',
    'SanityIcon',
    'ShopifyIcon',
    'StripeIcon',
    'TinaCMSIcon',
    'UnrealEngineIcon',
    'VercelIcon',
    'mailchimpLogo',
    'sendgridLogo',
  ];

  return (
    <div className={styles.servicesMain}>
      <div className={styles.contentMain}>
        <h1 className={`${styles.title}`} data-text="Integration">
          Integrations
        </h1>
        <div className={styles.cardBackground}>
          <div className={`${styles.cardItemsContainer} ${styles.iconContainer}`}>
            {icons.map((icon, index) => (
              <img
                key={index}
                src={`/integrationIcons/${icon}.svg`}
                alt={icon}
                className={styles.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
