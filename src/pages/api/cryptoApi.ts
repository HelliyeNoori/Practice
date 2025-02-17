
export const fetchMarketData = async () => {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
        const data = await response.json();
        return data.slice(0, 6); 
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
