import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function BannerSection(props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/WorkSpace");
  };

  return (
    <section
      id="BannerSection"
      className="pb-10 primary-gradient bg-fixed  text-white shadow-2xl z-[5] shadow-gray"
    >
      <div className=" flex space-between font-bold w-[100%] pl-10 px-5 py-5 text-[40px] sm:text-[70px] md:text-[65px]">
        <motion.div
          className="h-[40vh] z-20 pt-9 w-full md:w-[50%] text-center md:text-left flex-col align-center"
          initial={{ opacity: 0, x: -400, scale: 0 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div>Make Your</div>
          <div className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-700 to-sky-700 md:bg-gradient-to-r md:from-purple-600 md:via-pink-500 md:to-sky-400">
            Dreams
          </div>
          <div>Come True.</div>
        </motion.div>
        <motion.div
          className="w-[80%] md:w-[50%] pt-16 md:pt-10 lg:pt-6 hidden z-10 md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
          transition={{ duration: 1.5 }}
        >
          <img alt="vg" src="/img/banner.png"></img>
        </motion.div>

        {/* another image for background */}

        <motion.div
          className="w-[80%] md:w-[50%] lg:pt-6 absolute z-10 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6, scale: [0.5, 1.1, 1] }}
          transition={{ duration: 1.5 }}
        >
          <img alt="vg" src="/img/banner.png"></img>
        </motion.div>

        {/* bg-image div ends */}
      </div>
      <motion.div
        className="pt-5 px-10 pb-5 text-[20px] w-full md:w-75% lg:w-[50%]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="mb-10">
          Confused and scared of taking that loan? Our web service helps to keep
          financials stable and your dreams growing.{" "}
        </p>
        <div className="flex">
          <motion.div
            animate={{
              x: 0,
              scale: [1,1.2,1,1.3],
              transition: { duration: 3,repeat:Infinity},
            }}
            transition={{ duration: 1 }}
            onClick={clickHandler}
            className="text-center text-[20px] border-[2px] w-fit ml-4 py-2 px-3 border-white rounded-full bg-gradient-to-tr from-purple-600 to-blue-700 hover:text-orange-400 hover:bg-white hover:scale-105 hover:border-orange-400 ease-out duration-300 cursor-pointer"
          >
            Get Started
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default BannerSection;
