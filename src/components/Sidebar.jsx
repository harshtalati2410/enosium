import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className=" py-1 h-full w-full text-[22px]">
      <div className="text-[32px] px-1 block lg:hidden">Navigation</div>
      {window.location.pathname === "/Home" && (
        <div className="ml-2 border-l-[1px] border-gray-500 border-solid block lg:hidden">
          <Link
            to="/Home"
            className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
            onClick={(e) => {
              let hero = document.getElementById("BannerSection");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({behavior:"smooth"});
            }}
          >
            Home
          </Link>
          <Link
            to="/Home#Services"
            className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
            onClick={(e) => {
              let hero = document.getElementById("Services");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({behavior:"smooth"});
            }}
          >
            Services
          </Link>
          <Link
            to="/Home#UserGuide"
            className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
            onClick={(e) => {
              let hero = document.getElementById("UserGuide");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({behavior:"smooth"});
            }}
          >
            Guide
          </Link>
          <Link
            to="/Home#AboutUs"
            className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
            onClick={(e) => {
              let hero = document.getElementById("AboutUs");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({behavior:"smooth"});
            }}
          >
            About
          </Link>
          <Link
            to="/Home#ContactUs"
            className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
            onClick={(e) => {
              let hero = document.getElementById("ContactUs");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({behavior:"smooth"});
            }}
          >
            Contact
          </Link>
          <Link
            to="/WorkSpace"
            className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
          >
            Get Started
          </Link>
        </div>
      )}

      {window.location.pathname === "/WorkSpace" && (
        <div className="ml-2 border-l-[1px] border-gray-500 border-solid block lg:hidden">
          <Link
            to="/Home"
            className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
          >
            Home
          </Link>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
