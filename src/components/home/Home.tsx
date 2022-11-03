import styles from "./Home.module.scss";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <h1>MIM 플젝 시작</h1>
      <p>경축</p>
      <Image src="/vercel.svg" width={200} height={200} alt="logo" />
    </div>
  );
};

export default Home;
