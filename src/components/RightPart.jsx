import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function RightPart() {
  return (
    <div className="bg-[#212932] py-5 px-8 h-full rounded-lg">
      <div className="text-left text-white">QUICK SEARCH</div>
      <div className="mt-4 -ml-4 text-left flex justify-center items-center">
        <input
          className=" rounded-full py-3 text-xs px-2 w-full bg-[#16191e]"
          placeholder="Type here to search"
        ></input>
        <div className="bg-[#0171eb] rounded-full h-7 w-7 flex justify-center items-center -ml-8">
          <AiOutlineSearch className="text-black" />
        </div>
      </div>
    </div>
  );
}
