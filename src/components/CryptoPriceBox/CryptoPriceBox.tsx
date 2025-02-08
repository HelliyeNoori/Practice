import React, { useEffect, useState } from "react";
import CryptoBox from "./CryptoBox";

// تعریف نوع داده‌ای برای ارز دیجیتال
interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
}

const CryptoPriceBox: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]); // استفاده از نوع دقیق

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc")
      .then((res) => res.json())
      .then((data: CryptoData[]) => setCryptoData(data.slice(0, 4))) // فقط ۴ ارز اول
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="crypto-price-box">
      {cryptoData.map((coin) => (
        <CryptoBox
          key={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          price={coin.current_price}
          image={coin.image}
        />
      ))}
    </div>
  );
};

export default CryptoPriceBox;

