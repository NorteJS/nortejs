import styles from './Cube.module.css'

export default function Cube() {
  return (
    <div className={styles.pai}>
      <div className={styles.cube}>
        <div className={styles['face--front']}>J</div>
        <div className={styles['face--right']}>S</div>
        <div className={styles['face--back']}>T</div>
        <div className={styles['face--left']}>S</div>
        <div className={styles['face--top']}>Norte</div>
        <div className={styles['face--bottom']}>Norte</div>
      </div>
    </div>
  );
}
