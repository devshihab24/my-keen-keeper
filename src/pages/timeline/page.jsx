import React, { Activity, useContext, useState } from "react";
import { ActivityContext } from "../../context/ActivityContext";
import FriendActivity from "../../components/friendActivity/FriendActivity";

const TimeLine = () => {
  const { activity } = useContext(ActivityContext);
  const [filterActivity, setFilterActivity] = useState(activity);
  // console.log(activity);
  const handleFilter = (e) => {
    if (e.target.value == "all") {
      return setFilterActivity(activity);
    }
    const filteredData = activity.filter(
      (data) => data.a_type == e.target.value,
    );
    setFilterActivity(filteredData);
  };
  // console.log(filterActivity);
  return (
    <div className="py-10 w-[95%] md:w-[90%] lg:w[85%] mx-auto space-y-5">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">Timeline </h2>
        <select
          onChange={handleFilter}
          className="w-80 border px-2 py-1 rounded"
        >
          <option value="all">All</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>
      <div className="space-y-3">
        {filterActivity.length == 0 ? (
          <h2 className="min-h-[40vh] flex justify-center items-center text-4xl text-green-400 font-bold">No Activity Added Yet.</h2>
        ) : (
          filterActivity.map((item, idx) => (
            <FriendActivity key={idx} item={item}></FriendActivity>
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLine;
