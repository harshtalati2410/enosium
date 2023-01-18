import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import WorkSpace from "./WorkSpace";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence wait>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/WorkSpace" element={<WorkSpace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
