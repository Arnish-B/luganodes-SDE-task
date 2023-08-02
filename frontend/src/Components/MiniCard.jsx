import React, { useState } from "react";

function MiniCard({ name, stakeRate }) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            width: "150px",
            height: "50px",
            backgroundColor: "white",
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <div>
            <div>{name}</div>
            <div>{stakeRate}</div>
          </div>
          <div onClick={handleClose} style={{ cursor: "pointer" }}>
            X
          </div>
        </div>
      )}
    </>
  );
}

function Card() {
  const [showMiniCard, setShowMiniCard] = useState(false);

  const handleTickClick = () => {
    setShowMiniCard(true);
  };

  return (
    <div>
      <div onClick={handleTickClick}>Tick</div>
      {showMiniCard && <MiniCard name="Card Name" stakeRate="0.75" />}
    </div>
  );
}

export default Card;
