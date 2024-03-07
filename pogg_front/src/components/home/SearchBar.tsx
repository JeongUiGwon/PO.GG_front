import styles from './SearchBar.module.css';

export default function SearchBar() {
  interface SelectItem {
    value: string;
    name: string;
  }
  const options: SelectItem[] = [{ value: 'korea', name: 'Korea' }];
  return (
    <>
      <form className={styles.searchForm}>
        <div className={styles.searchLocation}>
          <label>지역</label>
          <select>
            {options.map((option: SelectItem) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.searchInput}>
          <label>검색</label>
          <input placeholder="플레이어 이름 + #KR1" />
        </div>
        <button type="submit">검색</button>
      </form>
    </>
  );
}
