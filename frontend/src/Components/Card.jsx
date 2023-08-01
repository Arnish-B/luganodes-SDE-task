import React, { useState } from "react";

const Card = ({
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

  return (
    <div
      className={`transition-all duration-500 ease-in-out transform ${
        isExpanded ? "scale-110" : ""
      } bg-blue-900 text-white rounded-lg shadow-lg overflow-hidden`}
    >
      <img src={imgURL} alt={cardTitle} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{cardTitle}</h2>
        <p className="text-lg">Stake Rate: {stakeRate}</p>
        <button
          onClick={toggleExpand}
          className="mt-4 text-purple-500 hover:text-purple-700 transition-colors duration-300"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        {isExpanded && (
          <div className="mt-4">
            <p>Total Supply: {totalSupply}</p>
            <p>Total Bounded: {totalBounded}</p>
            <p>Validator: {validator}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
