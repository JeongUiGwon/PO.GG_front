import HomeBoard from './HomeBoard';
import HomeSearch from './HomeSearch';
import styles from './HomeTemplate.module.css';

export default function HomeTemplate() {
  return (
    <main className={styles.main}>
      <HomeSearch />
      <HomeBoard />
    </main>
  );
}
