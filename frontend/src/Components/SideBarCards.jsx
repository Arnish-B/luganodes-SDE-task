import React, { useEffect, useState } from "react";
import axios from "axios";

const SideBarCards = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coins",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: "0",
        },
        headers: {
          "X-RapidAPI-Key":
            "898d8f6d6cmshdccd4bc373862a7p1fa677jsn189e58c2a5aa",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);

        // Check if Kusama is present in the response
        const kusamaIndex = response.data.data.coins.findIndex(
          (coin) => coin.name.toLowerCase() === "kusama"
        );

        // If Kusama is not present, add a card with random data
        if (kusamaIndex === -1) {
          const kusamaCard = {
            name: "Kusama",
            marketCap: "N/A",
            price: "N/A",
          };
          response.data.data.coins.push(kusamaCard);
        }

        // Sort the coins to prioritize Cardano, Kusama, and Polkadot
        const prioritizedCoins = ["cardano", "kusama", "polkadot"];
        const sortedData = response.data.data.coins.sort((a, b) => {
          const aIndex = prioritizedCoins.indexOf(a.name.toLowerCase());
          const bIndex = prioritizedCoins.indexOf(b.name.toLowerCase());
          return bIndex - aIndex;
        });

        setCoinData(sortedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoinData();
  }, []);
  const handleClick = (name) => {
    console.log(name);
  };

  return (
    <div className="space-y-4">
      {coinData.map((coin) => (
        <div
          key={coin.uuid}
          className="bg-card-bg rounded-lg p-4 shadow-lg"
          onClick={() => handleClick(coin.name)}
        >
          <h2 className="text-lg font-semibold text-white">{coin.name}</h2>
          <p className="text-gray-200">Market Cap: {coin.marketCap}</p>
          <p className="text-gray-200">Price: {coin.price}</p>
        </div>
      ))}
    </div>
  );
};

export default SideBarCards;
