import React from "react";

function BannerSection(props) {
  return (
    <div id="BannerSection" className="h-[100vh] flex">
      <div className="font-bold w-[50%] h-full pl-10 px-5 py-5 text-[20px] lg:text-[72px]">
        <div className="pt-9">
          <div>Make Your</div>
          <div className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-pink-500 to-sky-900">
            Dreams
          </div>
          <div>Come True.</div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
