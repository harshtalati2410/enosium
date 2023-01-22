import React from "react";
import { useState, useEffect } from "react";
import NavbarDropdown from "./NavbarDropdown";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar(props) {
  const location = useLocation();
  const navigate = useNavigate();

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
      <div className="block lg:hidden ml-2 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-500 px-2 text-[20px]">
        <NavbarDropdown />
      </div>
      <div className="pt-3 pl-3 text-[36px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900 font-bold">
        <a
          href="/"
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
          FinSafe
        </a>
      </div>
      <div className=" hidden lg:flex text-[20px] font-semibold">
        <a
          href="/"
          className="transition-all  duration-200 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-500 px-2"
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
          className="transition-all duration-200 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-500 px-2"
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
          className="transition-all duration-200 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-500 px-2"
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
          className="transition-all duration-200 ml-8 pt-5 hover:border-orange-500 hover:border-b-[2px] hover:text-sky-500 px-2"
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
      </div>

      <motion.div
        animate={{
          scale: [1,1.025,1],
          transition: { duration: 1,repeat:Infinity },
        }}
        whileHover={{scale:1.05,backgroundColor:"#fff",color:"#01285b",transition:{duration:0.2}}}
        className="shadow-sm text-[20px] border-[1px] border-blue-600 bg-blue-600 text-white py-2 rounded-xl my-2 mx-2 px-4"
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
      </motion.div>
    </nav>
  );
}

export default Navbar;
