
import FriendInfo from "../../components/FriendsInfo/FriendInfo";
import AboutFriend from "../../components/FriendsInfo/AboutFriend";
import useFriendsData from "../../hooks/useFriendsData";
// import { FriendsDataContext } from "../../context/ActivityContext";
import { useParams } from "react-router";
import { FadeLoader } from "react-spinners";

const FriendDetails = () => {
  const { friendsData, isLoading } = useFriendsData();
  const { id } = useParams();
  const expectedFriend = friendsData.find((friend) => friend.id == id);
  // console.log(expectedFriend);
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto space-y-5 my-10">
      {isLoading ? (
        <div className="min-h-[60vh] flex justify-center items-center">
          <FadeLoader color="#01811f"></FadeLoader>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-10 space-y-5">
          <AboutFriend expectedFriend={expectedFriend}></AboutFriend>
          <FriendInfo expectedFriend={expectedFriend}></FriendInfo>
        </div>
      )}
    </div>
  );
};

export default FriendDetails;
