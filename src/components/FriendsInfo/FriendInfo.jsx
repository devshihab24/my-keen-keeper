import React, { useContext } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdVideoChat } from "react-icons/md";
import { SiImessage } from "react-icons/si";
import { ActivityContext } from "../../context/ActivityContext";
import { toast } from "react-toastify";

const FriendInfo = ({ expectedFriend }) => {
  const { goal, days_since_contact, next_due_date, id } = expectedFriend;
  const {  addActivity } = useContext(ActivityContext);
  const infoStyle = "p-3 md:p-6 lg:p-8 rounded-lg border border-gray-300 bg-[#F8FAFC] flex flex-col justify-center items-center cursor-pointer transition duration-300 hover:shadow-xl hover:shadow-blue-200"
  const handleAdd = (type) => {
    // console.log("Btn clicked", type);
    const newActivity = {
      a_id: id,
      a_type: type,
      a_date: new Date().toLocaleDateString("en-US", {
        month: 'long',
        day: "numeric",
        year: 'numeric'
      }),
      a_friendName: expectedFriend.name,
    };
    addActivity(newActivity)
    toast.success(`Added activity ${type} with ${newActivity.a_friendName}`)
    // console.log( addActivity);
  };
  return (
    <div className="col-span-2 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full ">
        <div className="bg-white p-8 shadow-md flex flex-col justify-center items-center rounded-lg">
          <p className="text-3xl font-semibold text-gray-700">
            {days_since_contact}
          </p>
          <h5 className="text-gray-500">Days Since Contact</h5>
        </div>
        <div className="bg-white shadow-md p-8 flex flex-col justify-center items-center rounded-lg">
          <p className="text-3xl font-semibold text-gray-700">{goal}</p>
          <h5 className="text-gray-500">Goal (Days)</h5>
        </div>
        <div className="bg-white shadow-md p-8 flex flex-col justify-center items-center rounded-lg">
          <p className="text-3xl font-semibold text-gray-700">
            {next_due_date}
          </p>
          <h5 className="text-gray-500">Next Due</h5>
        </div>
      </div>
      <div className="p-4 space-y-4 bg-white shadow-lg rounded-lg w-full">
        <div className="flex justify-between items-center">
          <h4>Relationship Goal</h4>
          <button className="btn">Edit</button>
        </div>
        <p className=" border-gray-400">
          Connect every <span className="text-gray-800 font-bold">30 days</span>
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Quick Check-In</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            onClick={() => handleAdd("call")}
            className={infoStyle}
          >
            <BiSolidPhoneCall className="text-[28px] mb-1" />
            <p>Call</p>
          </div>
          <div
            onClick={() => handleAdd("text")}
            className={infoStyle}
          >
            <SiImessage className="text-2xl mb-1" />
            <p>Text</p>
          </div>
          <div
            onClick={() => handleAdd("video")}
            className={infoStyle}
          >
            <MdVideoChat className="text-3xl  mb-1" />
            <p>Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendInfo;
