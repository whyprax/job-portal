import React, { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/post-job", title: "Post a Job" },
    { path: "/about", title: "About" },
    { path: "/profile", title: "Profile" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="justify-between items-center pt-3 pb-6 hidden sm:flex">
        <a href="/">
          <img src="public\images 1.png" className="w-18" />
        </a>

        {/* nav items for large devices */}
        <div className="hidden sm:flex justify-between items-center gap-5">
          {navItems?.map((navItem, index) => (
            <NavLink
              key={index}
              to={navItem.path}
              className={({ isActive, isPending }) =>
                isPending ? "text-primary" : isActive ? "text-red" : ""
              }
            >
              {navItem.title}
            </NavLink>
          ))}
          <button className="text-primary">EN/JP</button>
        </div>

        {/* buttons */}
        <div className="text-base text-primary font-medium space-x-2 hidden md:block">
          {/* <Link to="/log-in" className="font-medium border-2 p-2 rounded-md">
            Log in
          </Link> */}
          <Login />
          {/* <Link
            to="/sign-up"
            className="font-medium bg-red text-white p-2 rounded-md"
          >
            Sign up
          </Link> */}
        </div>
      </nav>

      {/* mobile  */}
      <nav className="max-w-screen-2xl container mx-auto xl:px-24 sm:hidden block">
        <div className="flex justify-between items-center pt-6 pb-3">
          <a href="/">
            <img src="public\images 1.png" className="w-16" />
          </a>

          {/* mobile menu */}
          <div className="md:hidden block">
            <button onClick={() => handleMenuToggle()}>
              {!isMenuOpen ? (
                <FaBarsStaggered className="w-5 h-5 text-primary" />
              ) : (
                <FaXmark className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile devices */}
        <div
          className={`bg-primary p-4 rounded flex flex-col justify-center items-center gap-2 ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-2 justify-center items-center">
            {navItems?.map((navItem, index) => (
              <NavLink
                key={index}
                to={navItem.path}
                className={({ isActive }) =>
                  isActive ? "text-red" : "text-white opacity-55"
                }
              >
                {navItem.title}
              </NavLink>
            ))}
            <button className="text-white opacity-80">EN/JP</button>
          </div>
          <div className="text-base text-primary font-medium space-x-2  md:block mt-2">
            <Link to="/log-in" className="">
              Log in
            </Link>
            <Link
              to="/sign-up"
              className="font-medium bg-red text-white p-1 rounded-md"
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
