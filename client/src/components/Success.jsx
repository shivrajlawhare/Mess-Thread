import React from "react";
import Navbar from "./Navbar";
import woohoo from "../assets/woohoo.gif";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative w-full h-80 bg-cover bg-center z-20 mt-32"
        style={{ backgroundImage: `url(${woohoo})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <div className="text-[#580000] text-6xl font-bold tracking-wide text-shadow">
            Woohoo!
          </div>
          <div className="font-normal text-lg text-[#EE9393]">
            Your Review is Added !!
          </div>
          <Link className="text-center bg-[#982323] hover:bg-[#580000] rounded-md py-3 text-2xl text-white font-normal w-[80%]" to="/home">Back to home</Link>

          {/* <button className="bg-[#982323] hover:bg-[#580000] mt-20 rounded-md py-3 text-2xl text-white font-normal w-[80%]">
            Back to home
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Success;
