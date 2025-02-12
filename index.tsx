import Navbar from "@/components/Navbar/navbar";
import AuthBox from "@/components/AuthBox/AuthBox";
import CryptoPriceBox from "@/components/CryptoPriceBox/CryptoPriceBox";
import styles from "@/styles/Index.module.css";
import CryptoDashboard from "../components/CryptoDashboard";
import Sidebox from '../components/Sidebox'
import TradeBox from "../components/TradeBox";


export default function Home() {
  return (
    <div className={styles["container"]}>
      <Navbar />
      <AuthBox />
      <div className={styles.mainContent}>
        <div className={styles.dashboardSection}>
          <CryptoPriceBox />
          <CryptoDashboard />
        </div>
        <TradeBox />
      </div>
      <Sidebox />
    </div>

    
  );
}

