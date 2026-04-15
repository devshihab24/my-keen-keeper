import { FadeLoader } from "react-spinners";
import useFriendsData from "../../hooks/useFriendsData";
import FriendsCard from "./FriendsCard";

const FriendsContainer = () => {
  const { isLoading, friendsData } = useFriendsData();
//   console.log(friendsData);

  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto space-y-5">
      <h2 className="text-2xl text-center lg:text-left font-semibold">
        Your Friends
      </h2>
      {isLoading ? (
        <div className="min-h-[60vh] flex justify-center items-center">
            <FadeLoader color="#01811f"></FadeLoader>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {friendsData.map((friend) => (
            <FriendsCard key={friend.id} friend={friend}></FriendsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsContainer;
