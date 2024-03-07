import styles from './SeasonInfo.module.css';

export default function SeasonInfo() {
  interface BoxItem {
    mainImageUrl: string;
    titleImageUrl: string;
    title: string;
    description: string;
    championImageUrl: string[];
  }

  return (
    <div className={styles.box}>
      <div className={styles['box-header']}>
        <h2>시즌10 신규 시너지 보상</h2>
      </div>
    </div>
  );
}
