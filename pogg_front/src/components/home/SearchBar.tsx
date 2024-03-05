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
          <label className="text-white select-none mb-1">지역</label>
          <select>
            {options.map((option: SelectItem) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
}
