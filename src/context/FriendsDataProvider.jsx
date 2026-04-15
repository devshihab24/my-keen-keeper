import React, { useState } from "react";
import { FriendsDataContext } from "./FriendsDataContext";

const FriendsDataProvider = ({ children }) => {
  const [checkInFriends, setCheckInFriends] = useState([]);
  const checkInData = {
    checkInFriends,
    setCheckInFriends,
  };
  return (
    <FriendsDataContext value={checkInData}>{children}</FriendsDataContext>
  );
};

export default FriendsDataProvider;
