import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import account from "../images/account.jpg";
import logo from "../images/logo.png";
import { useLocation } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation();

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const shouldShowAccountImage =
    user?.email &&
    (location.pathname === "/" || location.pathname === "/account");

  return (
    <nav className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to="/">
              <img
               className="w-[200px] h-auto ml-6 pt-2"
                src={logo}
                alt="acccount icon"
              />
            </Link>
      {/* <img src='./images/logo.png'/> */}
      {user?.email ? (
        <div className="flex items-center">
          {shouldShowAccountImage && (
            <Link to="/account">
              <img
                className="w-[45px] h-auto mr-4 rounded-md transform transition duration-300 hover:scale-105 "
                src={account}
                alt="acccount icon"
              />
            </Link>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white  transform transition duration-300 hover:scale-105"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 transform transition duration-300 hover:scale-105">Sign In</button>
          </Link>
          <Link to="signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white transform transition duration-300 hover:scale-105">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
