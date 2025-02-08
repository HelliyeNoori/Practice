import React from "react";
import styles from "@/styles/CryptoBox.module.css";

interface CryptoBoxProps {
  name: string;
  symbol: string;
  price: number;
  image: string;
}

const CryptoBox: React.FC<CryptoBoxProps> = ({ name, symbol, price, image }) => {
  return (
    <div className={styles["crypto-box"]}>
      <img src={image} alt={name} className={styles["crypto-icon"]} />
      <h3>{name} ({symbol.toUpperCase()})</h3>
      <p>${price.toLocaleString()}</p>
    </div>
  );
};

export default CryptoBox;


