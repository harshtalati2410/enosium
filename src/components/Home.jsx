import React from "react";
import { motion } from "framer-motion";
import BannerSection from "./BannerSection";
import Services from "./Services";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import UserGuide from "./UserGuide";

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
      <ContactUs />
    </motion.div>
  );
}

export default Home;
