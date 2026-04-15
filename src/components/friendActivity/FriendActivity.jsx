import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const FriendActivity = ({ item }) => {
  const { a_type, a_date, a_friendName } = item;
  return (
    <div className="flex justify-start items-center gap-5 bg-white shadow-md py-2 px-4 rounded-md">
      {a_type == "call" && <img src={callImg} alt="call img" />}
      {a_type == "text" && <img src={textImg} alt="text img" />}
      {a_type == "video" && <img src={videoImg} alt="video img" />}
      <div>
        <h2 className="text-xl font-semibold text-gray-800"><span className="text-gray-500 font-normal capitalize">{a_type} with</span> {a_friendName}</h2>
        <p className="text-gray-600">{a_date}</p>
      </div>
    </div>
  );
};

export default FriendActivity;
