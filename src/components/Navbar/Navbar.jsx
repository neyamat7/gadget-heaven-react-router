import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div
      className={`${
        pathname === "/" ? "bg-[#9538E2] text-white" : "bg-white text-black"
      } max-w-screen-2xl mx-auto px-5 fixed translate-x-1/2 right-1/2 w-full rounded-t-xl z-50`}
    >
      <div className="navbar max-w-screen-xl mx-auto px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/stats">Statistics</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className={`btn btn-ghost text-xl ${
              pathname === "/" ? "text-white" : "text-black"
            }`}
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-bold">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : ""
                }
                to="/stats"
                // onClick={() => {
                //   alert(
                //     "This functionality is currently under development and will be available soon."
                //   );
                // }}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-yellow-600" : ""
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to="/dashboard" className="btn">
            <FaCartShopping />
          </Link>

          <Link to="/dashboard/wishlist" className="btn">
            <MdFavoriteBorder />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
