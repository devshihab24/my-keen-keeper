import React from "react";
import { IoMdAdd } from "react-icons/io";
import BannerCard from "./BannerCard";

const cardData = [
    {
        type: "Total Friends",
        count: 10
    },
    {
        type: "On Track",
        count: 3
    },
    {
        type: "Need Attention",
        count: 6
    },
    {
        type: "Interactions This Month",
        count: 12
    }
]

const Banner = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto space-y-5">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <h2 className="text-3xl md:text-4xl font-bold">Friends to keep close in your life</h2>
        <p className="max-w-[60ch] text-center text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn bg-green-900 text-white"><IoMdAdd className="text-lg"></IoMdAdd>Add a Friend</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 ">
        {
            cardData.map((item, idx)=> <BannerCard item={item} key={idx}></BannerCard>)
        }
      </div>
    </div>
  );
};

export default Banner;
