import React from "react";

function ServiceBlock(props) {
  return (
    <div className="col-span-1 grid grid-rows-6 rounded-md shadow-xl overflow-hidden border-[1px] border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="row-span-4 grid grid-cols-6  bg-gradient-to-tr from-purple-900 to-sky-700">
        <div className="col-start-2 col-end-6 grid grid-rows-8">
          <div className="row-start-2 col-end-8">
            <img src={props.imgLink} alt="ser" />
          </div>
        </div>
      </div>
      <div className="row-span-2 md:col-span-1 py-2 px-2">
        <div className="block uppercase tracking-wide text-gray-900 text-xl text-center font-bold mb-2">
          {props.title}
        </div>
        <div className="py-2 px-4">{props.des}</div>
      </div>
    </div>
  );
}

export default ServiceBlock;
