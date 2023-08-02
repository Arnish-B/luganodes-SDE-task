import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai"; // Import the check icon

const Card = ({
    clickedCards,
    handleTickClick,
  totalSupply,
  imgURL,
  cardTitle,
  stakeRate,
  totalBounded,
  validator,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleIconClick = () => {
    handleTickClick(cardTitle);
  };

  return (
    <div
      className={`transition-all duration-500 ease-in-out transform hover:rotate-6 hover:scale-105 ${
        isExpanded ? "scale-110" : ""
      } bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden relative pb-4`}
    >
      <button
        onClick={handleIconClick}
        className={`absolute top-0 right-0 m-2 transition-colors duration-300 ${
          clickedCards.includes(cardTitle)
            ? "text-purple-500 hover:text-purple-700"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        <AiOutlineCheck size={24} />
      </button>
      <img src={imgURL} alt={cardTitle} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{cardTitle}</h2>
        <p className="text-lg">Stake Rate: {stakeRate}%</p>
        <button
          onClick={toggleExpand}
          className="mt-4 text-purple-500 hover:text-purple-700 transition-colors duration-300"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        {isExpanded && (
          <div className="mt-4 mb-4">
            <p>Total Supply: {totalSupply}</p>
            <p>Staked Value: {totalBounded}</p>
            <p>Validator: {validator}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
