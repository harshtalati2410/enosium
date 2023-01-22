import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar(props) {
  const navigate = useNavigate();
  return (
    <div className=" py-1 h-full w-full text-[22px]">
      <div className="text-[32px] px-1 block lg:hidden">Navigation</div>

      <div className="ml-2 border-l-[1px] border-gray-500 border-solid block lg:hidden">
        <a
          href="/"
          className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
          onClick={(e) => {
            e.preventDefault();

            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                let hero = document.getElementById("BannerSection");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }, 1000);
            } else {
              let hero = document.getElementById("BannerSection");
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Home
        </a>
        <a
          href="/"
          className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
          onClick={(e) => {
            e.preventDefault();

            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                let hero = document.getElementById("Services");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }, 1000);
            } else {
              let hero = document.getElementById("Services");
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Services
        </a>
        <a
          href="/"
          className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
          onClick={(e) => {
            e.preventDefault();

            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                let hero = document.getElementById("AboutUs");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }, 1000);
            } else {
              let hero = document.getElementById("AboutUs");
              hero && hero.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          About
        </a>
        <a
          href="/"
          className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
          onClick={(e) => {
            e.preventDefault();

            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                let hero = document.getElementById("ContactUs");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }, 1000);
            } else {
              let hero = document.getElementById("ContactUs");

              hero && hero.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact
        </a>
        <Link
          to="/WorkSpace"
          className="bg-gray-100 rounded-r mt-1 block px-1 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
