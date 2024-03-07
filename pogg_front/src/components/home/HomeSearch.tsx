import Image from 'next/image';
import styles from './HomeSearch.module.css';
import SearchBar from './SearchBar';

export default function HomeSearch() {
  return (
    <div className={styles.searchContainer}>
      <Image
        src="/logo-home-set-10.jpg"
        alt="TFT.PO.GG"
        width={400}
        height={320}
      />
      <SearchBar />
    </div>
  );
}
