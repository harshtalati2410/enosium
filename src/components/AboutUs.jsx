import React from "react";
import TeamMember from "./TeamMember";

function AboutUs(props) {
  const team = [
    {
      name: "Harsh Talati",
      role: "Head of blah",
    },
    {
      name: "Tanisha Sahu",
      role: "Head of blah",
    },
    {
      name: "Prajakta Darade",
      role: "Head of blah",
    },
    {
      name: "Samip Shah",
      role: "Head of blah",
    },
  ];

  return (
    <section id="AboutUs" className="py-[70px] px-6">
      <h1 className="text-[40px] md:text-[60px] text-center my-1">Team</h1>
      <h3 className="text-[18px] md:text-[24px] text-center my-1 mb-4">
        Our team is agile and focused on improving your experience.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <TeamMember name={member.name} role={member.role} />
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
