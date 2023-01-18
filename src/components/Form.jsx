import React from "react";
import { motion } from "framer-motion";

function Form(props) {
  return (
    <div className="h-full bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-50 rounded-md px-4 py-4">
      <h1 className="text-[24px] font-semibold text-center">Fill this form</h1>
      <motion.div></motion.div>
    </div>
  );
}

export default Form;
