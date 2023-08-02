import React, { useEffect, useState } from "react";
import { Carousel, Arrow } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./Card";
import axios from "axios";


const MainBody = () => {
  const CustomArrowPrev = (onClickHandler) => (
    <div
      className="absolute z-10 top-0 bottom-0 left-0 m-auto bg-transparent text-white text-6xl cursor-pointer "
      onClick={onClickHandler.onClick}
    >
      ‹
    </div>
  );

  const CustomArrowNext = (onClickHandler) => (
    <div
      className="absolute z-10 top-0 bottom-0 right-0 m-auto bg-transparent text-white text-6xl cursor-pointer "
      onClick={onClickHandler.onClick}
    >
      ›
    </div>
  );
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
      totalSupply: "1,340,519,708",
      imgURL:
        "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Polkadot__1666094678.jpg",
      cardTitle: "Polkadot",
      stakeRate: polkadotStakeRate,
      totalBounded: polkadotStakedValue,
      validator: "Luganodes",
    },
    {
      totalSupply: "45,000,000,000",
      imgURL:
        "https://public.bnbstatic.com/static/academy/uploads-original/6628e286df1f461a86d25314c7204525.png",
      cardTitle: "Cardano",
      stakeRate: cardanoStakeRate,
      totalBounded: cardanoStakedValue,
      validator: "Luganodes",
    },
    {
      totalSupply: "9,651,217",
      imgURL:
        "https://polkadot.network/static/bed1c19deef483db7e55a76b92ece07b/ksm.png",
      cardTitle: "Kusama Chains",
      stakeRate: kusamaStakeRate,
      totalBounded: kusamaStakedValue,
      validator: "Luganodes",
    },
  ];

  return (
    <div
      className={`flex justify-center items-center h-screen ${backgroundColor}`}
    >
      <Carousel
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && <CustomArrowPrev onClick={onClickHandler} label={label} />
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && <CustomArrowNext onClick={onClickHandler} label={label} />
        }
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={850}
        centerMode={true}
        centerSlidePercentage={60}
        renderIndicator={null}
        className="w-full max-w-2xl"
      >
        {data.map((card, index) => (
          <div key={index} className="p-4">
            <Card
              handleTickClick={handleTickClick}
              clickedCards={clickedCards}
              {...card}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainBody;
