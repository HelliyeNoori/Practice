import Navbar from "@/components/Navbar/navbar";
import AuthBox from "@/components/AuthBox/AuthBox";
import CryptoPriceBox from "@/components/CryptoPriceBox/CryptoPriceBox";
import styles from "@/styles/Index.module.css";
import Sidebox from '../components/Sidebox'


export default function Home() {
  return (
    <div className={styles["container"]}>
      <Navbar />
      <AuthBox />
      <main className={styles["main-content"]}>
        <CryptoPriceBox />
      </main>
      <div>
      <Sidebox />
    </div>
    </div>
    
  );
}

