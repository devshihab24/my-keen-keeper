import React from "react";
import { IoMdArchive } from "react-icons/io";
import { IoNotificationsCircle } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";

const AboutFriend = ({ expectedFriend }) => {
  const { tags, status, picture, name, bio, email } =
    expectedFriend;
  return (
    <div className="space-y-5 w-full">
      <div className="shadow-lg mx-auto w-full bg-white p-4 flex flex-col justify-center items-center gap-1 rounded-lg">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={picture}
          alt={name}
        />
        <h4 className="text-2xl font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-400">62d ago</p>
        <div
          className={`"border px-3 py-0.5 rounded-full capitalize " ${status == "overdue" && "bg-red-700 "} ${status == "on_track" && "bg-green-900"} ${status == "almost_due" && "bg-yellow-600"}`}
        >
          <p className="text-white">{status.split("_").join(" ")}</p>
        </div>
        <div className="flex gap-2 mb-1">
          {tags.map((tag, idx) => (
            <div
              className="px-3 py-0.5 rounded-full capitalize bg-green-400 text-white "
              key={idx}
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="text-gray-600 font-semibold text-lg text-center">
          <i>"{bio}"</i>
        </p>
        <p className="text-sm text-gray-600 font-semibold">
          Preferred: {email}
        </p>
      </div>
      <div className="space-y-3">
        <button className="btn w-full bg-white text-gray-600">
          <IoNotificationsCircle className="text-lg" />
          Snooze 2 weeks
        </button>
        <button className="btn w-full bg-white text-gray-600">
          <IoMdArchive className="text-base" />
          Archive
        </button>
        <button className="btn w-full bg-white text-red-400">
          <MdDeleteForever className="text-xl" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default AboutFriend;
