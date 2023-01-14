import React from "react";
import { motion } from "framer-motion";

function WorkSpace(props) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Workspace
    </motion.div>
  );
}

export default WorkSpace;
