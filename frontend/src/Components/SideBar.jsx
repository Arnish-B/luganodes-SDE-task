import React from "react";
import SideBarCards from "./SideBarCards";

function SideBar() {
  return (
    <div
      className="w-1/4 min-h-screen bg-gradient-to-b from-color-b1 via-color-b2 to-color-b3 rounded-soft absolute top-0 left-0 bottom-0  mr-4 p-4 backdrop-blur-md backdrop-opacity-75 overflow-y-auto hide-scrollbar"
      style={{ boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="space-y-4">
        <SideBarCards />
      </div>
    </div>
  );
}

export default SideBar;
