import { LOGO_URL } from "../utils/contents";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const { LoggedInUser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-blue-50">
      <div className="w-36">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items ">
        <ul className="flex m-14 ">
          <li className="px-6 font-extrabold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-6 font-extrabold">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-6 font-extrabold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-6 font-extrabold">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login px-6 font-extrabold"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-6 font-extrabold">{LoggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
