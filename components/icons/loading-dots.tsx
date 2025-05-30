import styles from "./loading-dots.module.css";

export default function LoadingDots() {
  return (
    <span className={styles.loading}>
      <span className={styles.dot1} />
      <span className={styles.dot2} />
      <span className={styles.dot3} />
    </span>
  );
}
