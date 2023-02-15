import React from "react";
import { MdAccountCircle, MdNotifications } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="px-10 pr-16 flex w-[1100px] py-5 bg-[#16191e] text-white fixed">
      <div className="flex-1 flex gap-10">
        <div>New Releases</div>
        <div>Shuffle</div>
        <div>Live Podcasts</div>
      </div>
      <div className="flex-1"></div>
      <div className="flex-1 flex justify-end gap-10">
        <div className=" border rounded-full p-[6px]">
          <MdNotifications className="h-5 w-5" />
        </div>
        <div className="flex gap-2">
          <div>
            <MdAccountCircle className="h-9 w-9" />
          </div>
          <div className="text-[11px]">
            <div>Accout-Name</div>
            <div className="text-left text-blue-400">Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}
