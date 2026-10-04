

  import styles from "./Dashboard.module.css";

export default function BoardNumList() {
  const BoardNumArr = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className={styles.pad}>
      {BoardNumArr.map((BoardNum) => (
        <button key={BoardNum} className={styles.BoardNum}>
          {BoardNum}
        </button>
      ))}
    </div>
  );
}