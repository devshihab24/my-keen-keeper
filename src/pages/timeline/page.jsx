import React, { Activity, useContext } from "react";
import { ActivityContext } from "../../context/ActivityContext";
import FriendActivity from "../../components/friendActivity/FriendActivity";

const TimeLine = () => {
  const { activity } = useContext(ActivityContext);
  console.log(activity);
  return (
    <div className="py-10 w-[95%] md:w-[90%] lg:w[85%] mx-auto space-y-5">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">Timeline </h2>
        <select className="w-80 border px-2 py-1 rounded" >
          <option value="call">call</option>
          <option value="text">text</option>
          <option value="video">video</option>
        </select>
      </div>
      <div className="space-y-3">
        {
            activity.map((item) => <FriendActivity key={item.a_id} item={item}></FriendActivity>)
        }
      </div>
    </div>
  );
};

export default TimeLine;
