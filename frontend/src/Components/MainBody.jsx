import React, { useEffect, useState } from "react";
import { Carousel, Arrow } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./Card";
import axios from "axios";
import SideBar from "./SideBar";


const MainBody = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const backgroundColors = ["bg-gray-800", "bg-gray-700", "bg-gray-600"];
  const [cardanoStakedValue, setCardanoStakedValue] = useState(0);
  const [cardanoStakeRate, setCardanoStakeRate] = useState(0);
  const [polkadotStakedValue, setPolkadotStakedValue] = useState(0);
  const [kusamaStakedValue, setKusamaStakedValue] = useState(0);
  const [polkadotStakeRate, setPolkadotStakeRate] = useState(0);
  const [kusamaStakeRate, setKusamaStakeRate] = useState(0);
  const subScan_API_key = process.env.subScan_API_key;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api-beta.stakingrewards.com/v1/assets/overview/polkadot",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
      },
    })
      .then(function (response) {
        console.log(response.data.stakedValue);
        const roundedStakeRate = response.data.totalStaked.toFixed(2);
        const roundedStakeValue = response.data.stakedValue.toFixed(2);
        setPolkadotStakedValue(roundedStakeValue);
        setPolkadotStakeRate(roundedStakeRate);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api-beta.stakingrewards.com/v1/assets/overview/kusama",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
      },
    })
      .then(function (response) {
        console.log(response.data.stakedValue);
        const roundedStakeRate = response.data.totalStaked.toFixed(2);
        const roundedStakeValue = response.data.stakedValue.toFixed(2);
        setKusamaStakedValue(roundedStakeValue);
        setKusamaStakeRate(roundedStakeRate);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    axios({
      method: "get",
      url: "https://api-beta.stakingrewards.com/v1/assets/overview/cardano",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJuQ2xqdnZaTE5BUWtsVnlZdWNXNWdXdWZuY0kzIiwiaWF0IjoxNjkwOTU0MzUxLCJpc3MiOiJTdGFraW5ncmV3YXJkcyBQdWJsaWMgQVBJIn0.T_cPAE9MlVF7IJ9YD3NJS7YR0PlAl1hWTC0mk1_Vm-8",
      },
    })
      .then(function (response) {
        console.log(response.data.stakedValue);
        const roundedStakeRate = response.data.totalStaked.toFixed(2);
        const roundedStakeValue = response.data.stakedValue.toFixed(2);
        setCardanoStakedValue(roundedStakeValue);
        setCardanoStakeRate(roundedStakeRate);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [clickedCards, setClickedCards] = useState([]);

   const handleSlideChange = (newIndex) => {
     setActiveCardIndex(newIndex);
   };

   const backgroundColor =
     backgroundColors[activeCardIndex % backgroundColors.length];

  const handleTickClick = (title) => {
    // if clickedCards includes the title, remove it, else add it
    if (clickedCards.includes(title)) {
      setClickedCards(clickedCards.filter((card) => card !== title));
    }
    else {
      setClickedCards([...clickedCards, title]);
    }
    console.log("After performing operation");
    console.log(clickedCards);
  };

  const data = [
    {
      imgURL:
        "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Polkadot__1666094678.jpg",
      cardTitle: "Polkadot",
      stakeRate: polkadotStakeRate,
      totalBounded: polkadotStakedValue,
    },
    {
      imgURL:
        "https://public.bnbstatic.com/static/academy/uploads-original/6628e286df1f461a86d25314c7204525.png",
      cardTitle: "Cardano",
      stakeRate: cardanoStakeRate,
      totalBounded: cardanoStakedValue,
    },
    {
      imgURL:
        "https://polkadot.network/static/bed1c19deef483db7e55a76b92ece07b/ksm.png",
      cardTitle: "Kusama Chains",
      stakeRate: kusamaStakeRate,
      totalBounded: kusamaStakedValue,
    },
  ];

  console.log(data);

  return (
    <>
      <SideBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={`flex justify-center items-center  bg-gradient-to-r from-color-b1 to-color-b3 overflow-y-auto `}
      >
        {data.map((card, index) => (
          <div key={index} className="p-4">
            <Card
              imgURL={card.imgURL}
              title={card.cardTitle}
              price={card.price}
              stakeRate={card.stakeRate}
              total_bonded={card.totalBounded}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainBody;
