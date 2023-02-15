import React from "react";
import {
  AiFillCompass,
  AiFillPieChart,
  AiFillPlayCircle,
  AiFillFolderAdd,
} from "react-icons/ai";
import { MdOutlineTrendingUp } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";
import { BsFillFolderFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import {
  RiAccountPinCircleFill,
  RiHeart3Fill,
  RiSettings3Fill,
} from "react-icons/ri";
import { MdLocalActivity } from "react-icons/md";
import { BiExport } from "react-icons/bi";

export default function Left_Dashboard() {
  return (
    <div className="bg-[#212932] text-white overflow-y-auto h-screen hide_scrollbar">
      <div className="pt-5 text-2xl font-semibold ">PODCAST</div>
      <div className="pt-20 flex flex-col gap-10">
        <div className="text-[#74787d] font-round">
          <div className="text-[14px] -ml-14 mb-3">Menu</div>
          <div className="text-[15px] items-center justify-center flex flex-col gap-4">
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <AiFillCompass className="mt-[4px]" />
              Discover
            </div>
            <div className="w-24 cursor-pointer hover:text-[#0171eb]  flex r gap-5">
              <MdOutlineTrendingUp className="mt-[4px]" />
              Trending
            </div>
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <HiDocumentText className="mt-[4px]" />
              Genre
            </div>
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <BsFillFolderFill className="mt-[4px]" />
              Album
            </div>
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb] gap-5">
              <FaMicrophone className="mt-[4px]" />
              Speaker
            </div>
          </div>
        </div>
        <div className="text-[#74787d] font-round">
          <div className="text-[14px] -ml-14 mb-3">Library</div>
          <div className="text-[15px] items-center justify-center flex flex-col gap-4">
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <AiFillPieChart className="mt-[4px]" />
              Recent
            </div>
            <div className="w-24 cursor-pointer hover:text-[#0171eb]  flex r gap-5">
              <AiFillPlayCircle className="mt-[4px]" />
              Playlists
            </div>
            <div className="ml-4 w-28 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <RiHeart3Fill className="mt-[4px]" />
              Favourites
            </div>
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <MdLocalActivity className="mt-[4px]" />
              Local
            </div>
          </div>
        </div>
        <div className="text-[#74787d] font-round">
          <div className="text-[14px] -ml-14 mb-3">Customize</div>
          <div className="text-[15px] items-center justify-center flex flex-col gap-4">
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <AiFillFolderAdd className="h-6 w-6 mt-[4px]" />
              New Playlist
            </div>
            <div className="w-24 cursor-pointer hover:text-[#0171eb]  flex r gap-5">
              <BiExport className="w-6 h-6 mt-[4px]" />
              Import Playlist
            </div>
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <RiAccountPinCircleFill className="mt-[4px]" />
              Account
            </div>
            <div className="w-24 flex cursor-pointer hover:text-[#0171eb]  gap-5">
              <RiSettings3Fill className="mt-[4px]" />
              Settings
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 flex justify-center items-center gap-4 ">
        <div className="w-16 rounded-full bg-blue-400">
          <div className="m-1 w-6 h-6 rounded-full bg-white"></div>
        </div>
        <div>Dark</div>
      </div>
    </div>
  );
}
