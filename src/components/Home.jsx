import React from "react";
import BannerSection from "./BannerSection";
import Services from "./Services";
import UserGuide from "./UserGuide";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Home(props) {
  return (
    <motion.div
      className="h-full scroll-smooth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BannerSection />
      <Services />
      <UserGuide />
      <AboutUs />
      <Footer />
    </motion.div>
  );
}

export default Home;
