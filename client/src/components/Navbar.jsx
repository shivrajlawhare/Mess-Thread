import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <div className="w-full  pt-2 pl-6">
        <Link to='/home'>
          <div className="w-fit">
            <p className="font-qwitcher font-bold text-4xl text-[#580000]  ">
              Mess
            </p>
          </div>
          <div className="w-fit">
            <p className="font-qwitcher font-bold text-4xl text-[#580000]">
              Thread
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
