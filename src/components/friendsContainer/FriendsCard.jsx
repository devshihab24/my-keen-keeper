import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
  const { tags, status, picture, name,id } = friend;
//   console.log(friend);
  return (
    <Link to={`/details/${id}`}>
      <div className="shadow-lg mx-auto max-w-100 bg-white p-4 flex flex-col justify-center items-center gap-1 rounded-lg">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={picture}
          alt={name}
        />
        <h4 className="text-2xl font-semibold text-gray-800">{name}</h4>
        <p className="text-gray-400">62d ago</p>
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
        <div
          className={`"border px-3 py-0.5 rounded-full capitalize " ${status == "overdue" && "bg-red-700 "} ${status == "on_track" && "bg-green-900"} ${status == "almost_due" && "bg-yellow-600"}`}
        >
          <p className="text-white">{status.split("_").join(" ")}</p>
        </div>
      </div>
    </Link>
  );
};

export default FriendsCard;
