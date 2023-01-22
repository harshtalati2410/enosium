import React from "react";
import { useEffect } from "react";
import TeamMember from "./TeamMember";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sectionVariants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  }
};

function AboutUs(props) {
  const team = [
    {
      name: "Harsh Talati",
      
    },
    {
      name: "Tanisha Sahu",
      
    },
    {
      name: "Prajakta Darade",
      
    },
    {
      name: "Samip Shah",
      
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log(inView);
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      id="AboutUs"
      className="py-[70px] px-6"
    >
      <h1 className="text-[40px] md:text-[60px] text-center my-1">Team</h1>
      <h3 className="text-[18px] md:text-[24px] text-center my-1 mb-8 sm:mb-4">
        Our team is agile and focused on improving your experience.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <TeamMember key={index} name={member.name} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

export default AboutUs;
