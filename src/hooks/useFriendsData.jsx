import React, { useEffect, useState } from "react";

const useFriendsData = () => {
  const [friendsData, setFriendsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriendsData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return {friendsData, isLoading};
};

export default useFriendsData;
