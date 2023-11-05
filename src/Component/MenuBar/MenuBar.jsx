import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const MenuBar = () => {
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
          <label
            tabIndex={0}
            className="btn btn-ghost text-cyan-900 text-2xl lg:hidden"
          >
            <GiHamburgerMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl text-black"
          >
            {listItems}
          </ul>
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
