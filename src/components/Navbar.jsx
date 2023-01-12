import React from "react";
import { useState, useEffect } from "react";
import NavbarDropdown from "./NavbarDropdown";

function Navbar(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width > 1024 && handleSideNavToggle();
  }, [width]);

  function handleSideNavToggle() {
    console.log("toggle it");
  }

  return (
    <nav className="w-full h-full flex justify-between navbar">
      <div className="block lg:hidden ml-2 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2 text-[20px]">
        <NavbarDropdown />
      </div>
      <div className=" hidden lg:flex text-[20px]">
        <a
          href="/"
          className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
        >
          Home
        </a>
        <a
          href="/"
          className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
        >
          About Us
        </a>
        <a
          href="/"
          className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
        >
          Contact Us
        </a>
      </div>
      <div className="py-3 px-6">
        <button
          className="transition-all duration-75 rounded-full bg-sky-600 text-white text-[20px]
        text-bold px-3 py-2 shadow-sm border-[4px] border-transparent hover:border-sky-400 hover:bg-sky-800 hover:shadow-xl"
        >
          {width < 1024 ? (
            <i className="fa-solid fa-circle-play hov"></i>
          ) : (
            "Get Started"
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
