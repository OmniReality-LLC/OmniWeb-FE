import styles from './styles.module.css';

interface ConnectorProps {
  whiteConnector?: boolean;
}

export default function PageConnector({ whiteConnector }: ConnectorProps) {
  const whiteImages = (
    <>
      <img src='/pageConnector/WhitePageConnection.svg' className={styles.myImg} />
      <img src='/pageConnector/WhitePageConnection.svg' className={styles.myImg} />
    </>
  );

  const defaultImages = (
    <>
      <img src='/pageConnector/PageConnectionV2.svg' className={styles.myImg} />
      <img src='/pageConnector/PageConnectionV2.svg' className={styles.myImg} />
    </>
  );

  return (
    <div className={styles.imageViewerMain}>
      {whiteConnector ? whiteImages : defaultImages}
    </div>
  );
}
