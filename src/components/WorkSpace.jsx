import React from "react";
import { motion } from "framer-motion";
import FormButton from "./FormButton";


function WorkSpace(props) {
  
  return (
    <motion.div
      className=" grid grid-cols-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="my-2 col-span-full flex justify-center">
        <FormButton />
      </div>
      <hr className="col-span-full"/>
    </motion.div>
  );
}

export default WorkSpace;
