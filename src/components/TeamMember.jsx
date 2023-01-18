import React from "react";

function TeamMember(props) {
  return (
    <div className="col-span-1 flex justify-center align-middle">
      <div className="rounded-full h-[200px] w-[200px] md:h-[220px] md:w-[220px] grid grid-rows-3 bg-blue-300 mx-2 my-2 hover:bg-sky-600 hover:scale-110 hover:text-white transition-all duration-150 text-blue-900">
        <div className="row-start-2 row-end-3 text-center">
          <div className="font-semibold text-[24px] mb-2">{props.name}</div>
          <div className="font-light text-gray-600 text-[18px]">
            {props.role}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
