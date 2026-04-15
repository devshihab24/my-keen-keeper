import React, { useState } from "react";
import { ActivityContext } from "./ActivityContext";

const ActivityContextProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);
  const addActivity = (newActivity) => {
    setActivity(previous => [...previous, newActivity]);
  };
  // console.log(checkInData);
  return (
    <ActivityContext.Provider value={{ activity, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
