import Link from "next/link";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {

  return (
    <nav className={styles.container}>
      <div className={styles.item}>
        <div className={styles.circle}>
          <Link href="/">🐰</Link>
        </div>
      </div>
      <div className={styles.centerNav}>
        <div className={`${styles.item} ${styles.active}`}>
          <div className={styles.icon}>🎔</div>
          <Link href="/">Matching</Link>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>🎔</div>
          <Link href="/">friends</Link>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>🎔</div>
          <Link href="/">MBTI</Link>
        </div>
      </div>
      <div className={styles.centerNav}>
        <div className={styles.item}>
          <div className={styles.icon}>🎔</div>
          <Link href="/">My Page</Link>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
