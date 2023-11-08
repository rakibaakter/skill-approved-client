import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import useAuthInfoHook from "../../Hooks/useAuthInfoHook";
import profile from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-100%" },
  };

  const { user, logOut } = useAuthInfoHook();

  const listItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive && "text-cyan-400 font-bold "}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-job"
          className={({ isActive }) => isActive && "text-cyan-400 font-bold "}
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-posted-job"
          className={({ isActive }) => isActive && "text-cyan-400 font-bold "}
        >
          My Posted Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-bids"
          className={({ isActive }) => isActive && "text-cyan-400 font-bold "}
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bid-requests"
          className={({ isActive }) => isActive && "text-cyan-400 font-bold "}
        >
          Bid Requests
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-cyan-700 text-white fixed z-10 px-2 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" text-cyan-900 text-2xl lg:hidden">
            <motion.nav
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <GiHamburgerMenu onClick={() => setIsOpen((isOpen) => !isOpen)} />
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl text-black"
              >
                {listItems}
              </ul>
            </motion.nav>
            {/* <GiHamburgerMenu /> */}
          </label>
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl text-black"
          >
            {listItems}
          </ul> */}
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{listItems}</ul>
      </div>
      <div className="navbar-end ">
        {user ? (
          <div className="flex justify-center flex-col md:flex-row md:gap-3">
            <span className="">
              <img
                className="h-6 w-6 md:h-10 md:w-10 rounded-full "
                src={user.photoURL ? user.photoURL : profile}
                alt=""
              />
              <span className="text-center ">{user.displayName}</span>
            </span>
            <Link onClick={logOut} className="md:mt-2">
              <a className="text-accent font-semibold md:text-xl ">Sign Out</a>
            </Link>
          </div>
        ) : (
          <Link to="/login">
            <a className="text-accent font-semibold text-xl ">Sign In</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
