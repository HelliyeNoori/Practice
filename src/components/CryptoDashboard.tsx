//13Feb b nazaram oomad chart bayad az modele Donut Chart basje//

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "../styles/CryptoDashboard.module.css"; 

ChartJS.register(ArcElement, Tooltip, Legend);

interface Coin {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
    image: string;
}

interface ChartData {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        cutout: string;  //Donut Chart
    }[];
}

const CryptoDashboard: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);
//dadehaye jadval dasti zadam//
    const cryptoData: Coin[] = [
        { id: "1", name: "Bitcoin", symbol: "BTC", current_price: 45000, price_change_percentage_24h: 2.5, market_cap: 850000000000, image: "/bitcoin.webp" },
        { id: "2", name: "Ethereum", symbol: "ETH", current_price: 3200, price_change_percentage_24h: -1.2, market_cap: 370000000000, image: "/ethereum.webp" },
        { id: "3", name: "Binance Smart Chain", symbol: "BNB", current_price: 500, price_change_percentage_24h: 0.8, market_cap: 85000000000, image: "/bnb.webp" },
        { id: "4", name: "Tether", symbol: "USDT", current_price: 1.2, price_change_percentage_24h: -0.5, market_cap: 40000000000, image: "/tether.webp" },
        { id: "5", name: "Ripple", symbol: "XRP", current_price: 0.75, price_change_percentage_24h: 1.1, market_cap: 35000000000, image: "/xrp.webp" },
        { id: "6", name: "Solana", symbol: "SOL", current_price: 0.75, price_change_percentage_24h: 1.1, market_cap: 35000000000, image: "/sol.webp" },
    ];

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");//bar asase marketcap
                const data: Coin[] = await response.json();
                const topCoins = data.slice(0, 6);

                const pieChartData: ChartData = {
                    labels: topCoins.map((coin) => coin.name),
                    datasets: [
                        {
                            data: topCoins.map((coin) => coin.market_cap),
                            backgroundColor: ["#147ad5", "#4fa9b7", "#3b97eb", "#6bafed", "#00c2e7", "#89e7f8"],
                            cutout: "50%",  //Donut Chart//
                        },
                    ],
                };

                setChartData(pieChartData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchMarketData();
    }, []);

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.tableSection}>
                <h3>موجودی سهام شما</h3>
                <table>
                    <thead>
                        <tr>
                            <th>نام ارز</th>
                            <th>قیمت (USD)</th>
                            <th>تغییرات 24h</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoData.map((coin) => (
                            <tr key={coin.id}>
                                <td>
                                    <img src={coin.image} alt={coin.name} className={styles.coinIcon} /> {coin.name}
                                </td>
                                <td>${coin.current_price.toLocaleString()}</td>
                                <td style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>واریز</button>
                    <button className={styles.button}>برداشت</button>
                    <button className={styles.button}>کارت هدیه</button>
                </div>
            </div>

            <div className={styles.chartSection}>
                <h3> موجودی کل دارایی های شما </h3>
                {chartData ? (
                    <div className={styles.chart}>
                        <Pie data={chartData} />
                    </div>
                ) : (
                    <p>در حال بارگذاری...</p>
                )}
            </div>
        </div>
    );
};

export default CryptoDashboard;




