import Link from "next/link";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <nav className={styles.container}>
      <div>
        <Link href="/">아바타</Link>
      </div>
      <div className={styles.centerNav}>
        <Link href="/">매칭</Link>
        <Link href="/">친구</Link>
        <Link href="/">mbti</Link>
      </div>
      <div>
        <Link href="/">회원정보</Link>
      </div>
    </nav>
  );
};

export default Sidebar;
