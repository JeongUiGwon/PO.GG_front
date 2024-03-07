import SeasonInfo from './SeasonInfo';
import styles from './HomeBoard.module.css';

export default function HomeBoard() {
  return (
    <div className={styles.HomeBoard}>
      <SeasonInfo />
    </div>
  );
}
