import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { motion } from "framer-motion";
import { useState } from "react";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-100%" },
  };

  const listItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive && "text-cyan-700 font-bold "}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-job"
          className={({ isActive }) => isActive && "bg-cyan-900 text-white"}
        >
          Add Job
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-cyan-500 text-white fixed px-2 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" text-cyan-700 text-2xl lg:hidden">
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
          </label>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{listItems}</ul>
      </div>
      <div className="navbar-end text-xl font-bold text-cyan-700 ">
        <Link>Log In</Link>
      </div>
    </div>
  );
};

export default MenuBar;
