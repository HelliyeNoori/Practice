
// baraye name class nabayad az mavarede tekrari estefade konam//
// khata babate name classha ziad daryaft shod//

import { useEffect, useState } from "react";
import styles from "../styles/CryptoTable.module.css";
import axios from "axios";

const CryptoTable = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(11);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "usd", order: "market_cap_desc" },
      })
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);


  // Tabe tabdile add b darsad//
  // mosbat bashad alamate + ezafe mishe, baraye navasan//
  const formatPercentage = (value) => {
    return value > 0 ? `+${value.toFixed(2)}%` : `${value.toFixed(2)}%`;
  };


  // taeen range gheymat
  // agar meghdar mosbat bashe tebghe CSS rang migire//
  const getChangeColor = (value) => {
    return value > 0 ? styles.positiveChange : styles.negativeChange;
  };

  return (
    <div className={styles.container}>
        <h1>آخرین تراکنش ها</h1>
      <table className={styles.cryptoTable}>
        <thead>
          <tr>  
            <th className={styles.headerCell}>نام </th>
            <th className={styles.headerCell}> آخرین قیمت(تومان)</th>
            <th className={styles.headerCell}> %24H </th>
            <th className={`${styles.headerCell} ${styles.hideOnMobile}`}>حجم بازار</th>
            <th className={`${styles.headerCell} ${styles.hideOnMobile}`}> 7 روز گذشته </th> 
          </tr>
        </thead>
        <tbody>
        {data.slice(0, visibleCount).map((coin) => (
            <tr key={coin.id}>
              <td className={styles.cell}>
                  <img className={styles.coinLogo} src={coin.image} alt={coin.name} /> {/* tag <Span> inline */}
                  <span className={styles.coinName}>{coin.name}</span>
              </td>
  {/* natoonestam tasvire khat ezafe konam khataye <hydration> dashtam ba taghirat dorost nashod */}

              <td className={styles.cell}>{(coin.current_price * 85000).toLocaleString()}</td>
              <td className={`${styles.cell} ${styles.hideOnMobile}`}>
           {coin.market_cap.toLocaleString()}
           </td>
              <td className={styles.cell}>
                <span
                  className={`${styles.changePercentage} ${getChangeColor(coin.price_change_percentage_24h)}`}
                >
                  {formatPercentage(coin.price_change_percentage_24h)}
                </span>
              </td>
              <td className={`${styles.cell} ${styles.hideOnMobile}`}>
          <img className={styles.defaultImage} src="/Group 3.png" alt="chart"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleCount < data.length && (
        <button className={styles.showMoreButton} onClick={() => setVisibleCount(visibleCount + 20)}>
          مشاهده بیشتر
        </button>
      )}
    </div>
  );
};

export default CryptoTable;




