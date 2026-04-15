import { FaHome } from "react-icons/fa";
import NavItem from "./NavItem";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { Link } from "react-router";

const Header = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
      logo: <FaHome />,
    },
    {
      path: "/timeline",
      text: "Time Line",
      logo: <IoTimeOutline />,
    },
    {
      path: "/stats",
      text: "Stats",
      logo: <TfiStatsUp />,
    },
  ];
  return (
    <header className="shadow-md py-3">
      <div className="flex flex-col md:flex-row justify-between items-center w-[98%] md:w-[95%] mx-auto">
        <Link to="/">
          <span className="text-2xl font-bold text-blue-950">Keen</span>
          <span className="text-2xl text-green-900 font-semibold">Keeper</span>
        </Link>
        <div className="flex gap-10">
          {navItems.map((item, idx) => (
            <NavItem item={item} key={idx}></NavItem>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
