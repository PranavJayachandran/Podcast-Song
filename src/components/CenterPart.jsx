import React from "react";
import { BsFillPlayFill, BsHeadphones } from "react-icons/bs";
import { RiHeadphoneFill } from "react-icons/ri";
import RecentlyPlayed from "./RecentlyPlayed";

export default function CenterPart() {
  return (
    <div className="text-white px-10 py-12 h-[497px] overflow-y-auto hide_scrollbar">
      <div className="text-left text-xl">TRENDING PODCASTS</div>
      <div className="mt-4  px-8 rounded-xl h-60 flex flex-col justify-center w-100 bg-gray-400">
        <div className="text-5xl font-bold text-left">On Purpose</div>
        <div className="text-left font-semibold">with Jay Shetty</div>
        <div className="mt-4 text-left flex text-xs gap-6">
          <div className="flex gap-1">
            <BsFillPlayFill className="h-4 w-4 text-[#0171eb]" />
            <div className="-mt-[1px] ">Plays</div>
          </div>
          <div className="flex gap-1">
            <RiHeadphoneFill className="h-4 w-4 font-bold text-[#0171eb]" />
            <div className="-mt-[1px]">Currently Listenting</div>
          </div>
        </div>
        <div className="text-left mt-6 flex gap-6 font-semibold">
          <div className="bg-[#0171eb] px-4 py-2 rounded-full">Listen now</div>
          <div className="px-4 py-2 border rounded-full">Add to favourites</div>
        </div>
      </div>

      <RecentlyPlayed />
    </div>
  );
}
