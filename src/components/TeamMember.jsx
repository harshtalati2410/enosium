import React from "react";
import { motion } from "framer-motion";

function TeamMember(props) {
  const memberVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: [0, 1, 1.1, 1],
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: props.index * 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div
      variants={memberVariants}
      className="col-span-1 flex justify-center align-middle"
    >
      <div className="-z-10 rounded-full h-[200px] w-[200px] md:h-[220px] md:w-[220px] grid grid-rows-3 shadow-sm bg-blue-300 mx-2 my-2 hover:shadow-2xl hover:scale-110 hover:bg-sky-600 hover:text-white duration-200 transition-all">
        <div className="row-start-2 row-end-3 text-center">
          <div className="font-semibold text-[24px] mb-2">{props.name}</div>
          <div className="font-light text-gray-600 text-[18px]">
            {props.role}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamMember;
