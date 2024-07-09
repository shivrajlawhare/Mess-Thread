import React from "react";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="h-[65%] w-full  flex items-center justify-center">
        <img
          src={dish3}
          alt="Dish 3"
          className="absolute  w-36 h-32 top-8 left-10"
        />
        <img
          src={dish4}
          alt="Dish 3"
          className="absolute w-36 h-24 top-48 left-56"
        />
        <img
          src={dish1}
          alt="Dish 1"
          className="absolute w-52 h-52 top-80 left-1"
        />
        <img
          src={dish2}
          alt="Dish 2"
          className="absolute w-52 h-32 bottom-48 left-44"
        />

        <div className="w-[50%]  ">
          <div>
            <p className="font-qwitcher font-bold text-8xl text-[#580000]  ">
              Mess
            </p>
          </div>
          <div>
            <p className="font-qwitcher font-bold text-8xl text-[#580000]">
              Thread
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mb-12">
        <div className="w-[80%] mb-4">
          <p className="text-center font-medium text-lg text-[#7D7D7D] m">
            Can post reviews about the food you had and help others
          </p>
        </div>
        <Link className="text-center bg-[#982323] hover:bg-[#580000] rounded-md py-3 text-2xl text-white font-normal w-[80%]" to="/home">Let's Go!!</Link>
        {/* <button className="bg-[#982323] hover:bg-[#580000] rounded-md py-3 text-2xl text-white font-normal w-[80%]">
          Let's Go!!
        </button> */}
      </div>
    </div>
  );
};

export default LandingPage;
