import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";

function WorkSpace(props) {
  return (
    <motion.div
      className="h-[calc(100vh-70px)] lg:grid lg:grid-cols-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" px-2 py-4 col-span-5 h-full">
        <Form />
      </div>
      <div className="col-span-7 h-full">
        <script
          type="module"
          src="https://prod-apnortheast-a.online.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"
        ></script>
        <tableau-viz
          id="tableau-viz"
          src="https://prod-apnortheast-a.online.tableau.com/t/tanishatab/views/Book1/Sheet2"
          width="1536"
          height="706"
          hide-tabs
          toolbar="bottom"
        ></tableau-viz>
      </div>
    </motion.div>
  );
}

export default WorkSpace;
