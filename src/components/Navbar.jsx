import React from "react";
import { useState, useEffect } from "react";
import NavbarDropdown from "./NavbarDropdown";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();

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

  function handleSideNavToggle() {}

  return (
    <nav className="w-full h-full flex justify-between navbar z-50">
      <div className="block lg:hidden ml-2 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2 text-[20px]">
        <NavbarDropdown />
      </div>
      <div className="pt-3 pl-3 text-[36px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 font-bold">
        <a
          href="/Home"
          onClick={(e) => {
            if (window.location.pathname === "/Home") {
              e.preventDefault();
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }
          }}
        >
          FinSafe
        </a>
      </div>
      {window.location.pathname === "/Home" && (
        <div className=" hidden lg:flex text-[20px] font-semibold">
          <a
            href="/Home"
            className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
            onClick={(e) => {
              let hero = document.getElementById("BannerSection");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            href="/Home"
            className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
            onClick={(e) => {
              let hero = document.getElementById("Services");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services
          </a>
          <a
            href="/Home"
            className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
            onClick={(e) => {
              let hero = document.getElementById("UserGuide");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Guide
          </a>
          <a
            href="/Home"
            className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
            onClick={(e) => {
              let hero = document.getElementById("AboutUs");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a
            href="/Home"
            className="transition-all duration-75 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-300 px-2"
            onClick={(e) => {
              let hero = document.getElementById("ContactUs");
              e.preventDefault(); // Stop Page Reloading
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </div>
      )}
      <div
        className="py-2 px-5 mb-2 mt-2 mr-2 bg-gradient-to-tr from-cyan-500 to-blue-500 transition-all duration-75 rounded-full text-white text-[22px]
        text-bold shadow-sm border-[2px] border-transparent hover:border-sky-400 hover:bg-gradient-to-bl hover:shadow-xl"
      >
        <Link
          to="/WorkSpace"
          onClick={() => {
            console.log(location);
          }}
        >
          {width < 1024 ? (
            <i className="fa-solid fa-circle-play hov"></i>
          ) : (
            "Get Started"
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
