//13Feb b nazaram oomad chart bayad az modele Donut Chart basje//
// 17 Feb jodasazi API 7 CONST + Style components

import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchMarketData } from "../pages/api/cryptoApi";
import { cryptoData } from "../constants/cryptoData";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: nowrap;
    gap: 24px;
    width: 840px;
    height: 495px; 
    margin-top: 20px;
    margin-left: 470px;
    background-color: #101828;
    border: 1px solid #E9E9E9;
    border-radius: 16px;
    box-shadow: -2px 2px 15px -1px rgba(0, 0, 0, 0.1);
    padding: 20px; 
`;

const TableSection = styled.div`
    display: flex;
    flex-direction: column; 
    width: 380px;
    height: 347px;
    margin-left: 20px;
    margin-right: 80px; /* ino dasti ezafe kardam baraye b chap keshidan*/
    gap: 16px; 
`;

const Title = styled.div`
    width: 100%; 
    font-size: 18px;
    text-align: right;
    line-height: 22.5px;
    font-weight: 500;
    color: #FFFFFF;
`;

const Table = styled.table`
    direction: rtl;
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    padding: 10px;
    text-align: right;
    border-bottom: 1px solid #ddd;
    color: white;
`;

const Td = styled.td`
    padding: 10px;
    text-align: right;
    border-bottom: 1px solid #ddd;
    color: white;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const Button = styled.button`
    width: 103px;
    height: 32px;
    padding: 8px 16px;
    border: 1px solid #0257EA;
    color: #0257EA;
    cursor: pointer;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;
    &:hover {
        background-color: #0257EA;
        color: white;
    }
`;

const ChartSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 304px;
    height: 447px;
    gap: 16px;
`;

const ChartContainer = styled.div`
    width: 100%;
    max-width: 500px;
    height: 300px;
`;


interface ChartData {
    labels: string[];
    datasets: {
        data: number[];
        backgroundColor: string[];
        cutout: string;
    }[];
}


const CryptoDashboard: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData | null>(null);


    useEffect(() => {
        const loadData = async () => {
            const topCoins = await fetchMarketData();
            const pieChartData = {
                labels: topCoins.map((coin) => coin.name),
                datasets: [
                    {
                        data: topCoins.map((coin) => coin.market_cap),
                        backgroundColor: ["#147ad5", "#4fa9b7", "#3b97eb", "#6bafed", "#00c2e7", "#89e7f8"],
                        cutout: "50%",
                    },
                ],
            };
            setChartData(pieChartData);
        };

        loadData();
    }, []);

    return (
        <DashboardContainer>
            <TableSection>
                <Title>موجودی سهام شما</Title>
                <Table>
                    <thead>
                        <tr>
                            <Th>نام ارز</Th>
                            <Th>قیمت (USD)</Th>
                            <Th>تغییرات 24h</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoData.map((coin) => (
                            <tr key={coin.id}>
                                <Td>
                                    <img src={coin.image} alt={coin.name} style={{ width: "24px", height: "23px", borderRadius: "50%" }} />
                                    {coin.name}
                                </Td>
                                <Td>${coin.current_price.toLocaleString()}</Td>
                                <Td style={{ color: coin.price_change_percentage_24h > 0 ? "green" : "red" }}>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <ButtonContainer>
                    <Button>واریز</Button>
                    <Button>برداشت</Button>
                    <Button>کارت هدیه</Button>
                </ButtonContainer>
            </TableSection>

            <ChartSection>
                <Title>موجودی کل دارایی‌های شما</Title>
                {chartData ? <ChartContainer><Pie data={chartData} /></ChartContainer> : <p>در حال بارگذاری...</p>}
            </ChartSection>
        </DashboardContainer>
    );
};

export default CryptoDashboard;



