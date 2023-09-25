import styles from './styles.module.css';

export default function TechStackSection() {
  const icons = [
    'GoogleAnalyticsIcon',
    'CloudflareIcon',
    'AWSIcon',
    'AzureIcon',
    'FigmaIcon',
    'AdobeIcon',
    'VercelIcon',
    'CloudinaryIcon',
    'ShopifyIcon',
    'StripeIcon',
    'UnrealEngineIcon',
    'BlenderIcon',
    '3DsmaxIcon'
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
                loading='lazy'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
