import React from "react";
import Left_Dashboard from "../left-dashboard";
import Navbar from "../navbar";
import Center from "../Center";

export default function Main_Page() {
  return (
    <div>
      <div className="flex ">
        <div className="w-52 h-screen">
          <Left_Dashboard />
        </div>
        <div>
          <Center />
        </div>
      </div>
    </div>
  );
}
