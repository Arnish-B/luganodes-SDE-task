import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./Card";

const MainBody = () => {
  const data = [
    {
      totalSupply: "1000",
      imgURL: "https://via.placeholder.com/150",
      cardTitle: "Card 1",
      stakeRate: "10%",
      totalBounded: "500",
      validator: "Validator 1",
    },
    {
      totalSupply: "2000",
      imgURL: "https://via.placeholder.com/150",
      cardTitle: "Card 2",
      stakeRate: "20%",
      totalBounded: "1000",
      validator: "Validator 2",
    },
    {
      totalSupply: "3000",
      imgURL: "https://via.placeholder.com/150",
      cardTitle: "Card 3",
      stakeRate: "30%",
      totalBounded: "1500",
      validator: "Validator 3",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-blue-900">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000} // updated from 3000 to 500
        transitionTime={850}
        centerMode={true}
        centerSlidePercentage={60}
        className="w-full max-w-2xl"
      >
        {data.map((card, index) => (
          <div key={index} className="p-4">
            <Card {...card} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MainBody;
