import React from "react";
import CenterPart from "./CenterPart";
import RightPart from "./RightPart";
import Navbar from "./navbar";

export default function Center() {
  return (
    <div>
      <Navbar />
      <div className="pt-[76px] w-[1100px] flex">
        <div className="w-9/12 bg-[#16191e]">
          <CenterPart />
        </div>
        <div className="w-3/12 bg-[#16191e]">
          <RightPart />
        </div>
      </div>
    </div>
  );
}
