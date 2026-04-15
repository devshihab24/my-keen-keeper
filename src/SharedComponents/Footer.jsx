import { GrYoutube } from "react-icons/gr";
import logo from "../assets/logo-xl.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] py-10 ">
      <div className="w-[95%] md:w-[90%] lg:w-[85%]  mx-auto flex flex-col justify-center items-center space-y-4">
        <img src={logo} alt="" />
        <p className="text-gray-300 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <p className="text-white text-lg">Social Links</p>
        <div className="flex justify-center items-center gap-5">
          <div className="p-2 rounded-full bg-white">
            <GrYoutube className="text-xl" />
          </div>
          <div className="p-2 rounded-full bg-white">
            <FaFacebook className="text-xl" />
          </div>
          <div className="p-2 rounded-full bg-white">
            <FaSquareXTwitter className="text-xl" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full mt-10 gap-1 items-center">
          <p className="text-gray-200">
            © 2026 KeenKeeper. All rights reserved.
          </p>
          <div className="flex gap-5 text-white">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
