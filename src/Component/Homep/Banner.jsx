import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center">
          <div className="max-w-full">
            <h1 className="text-5xl font-bold ">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-[#64748bFF]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn text-white bg-[#244d3fFF]">
              <Plus /> Add a Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
