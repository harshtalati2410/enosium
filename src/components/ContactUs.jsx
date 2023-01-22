import React from "react";

function ContactUs(props) {
  return (
    <section id="ContactUs" className=" bg-blue-900">
      <div className="py-10 px-[10%] shadow-2xl grid grid-cols-12 gap-0.5 text-white">
        <div className="col-span-12 lg:col-start-1 lg:col-end-6 px-2 py-6">
          <h1 className="text-center pb-3 text-[40px] font-semibold">
            FinSafe
          </h1>
          <p className="pt-10px text-[19px]">
            Stay tuned! In the future, our team plans to provide you with financial suggestions to improve your financials. 
          </p>
        </div>
        <div className="col-span-full sm:col-span-6 lg:col-start-7 lg:col-end-10  px-2 py-6">
          <h1 className="pt-3 pb-3 text-[24px] font-semibold">Useful Links</h1>
          <div className="border-l-[2px] border-gray-400 text-[18px]">
            <div
              className="pt-1 pl-3 border-transparent 
                    border-l-[2px]
                    hover:border-orange-400 hover:text-blue-300 transition-all duration-500 cursor-pointer"
              onClick={(e) => {
                let hero = document.getElementById("BannerSection");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </div>
            <div
              className="pt-1 pl-3 border-transparent 
                    border-l-[2px]
                    hover:border-orange-400 hover:text-blue-300 transition-all duration-500 cursor-pointer"
              onClick={(e) => {
                let hero = document.getElementById("Services");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
            </div>
            <div
              className="pt-1 pl-3 border-transparent 
                        border-l-[2px]
                        hover:border-orange-400 hover:text-blue-300 transition-all duration-500 cursor-pointer"
              onClick={(e) => {
                let hero = document.getElementById("AboutUs");
                hero && hero.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-6 lg:col-start-10 lg:col-end-13  px-2 py-6">
          <h1 className="pt-3 pb-3 text-[24px] font-semibold">Contact Us</h1>
          <div className="grid grid-rows-4 gap-y-2 text-[18px]">
            <div className="row-span-1 grid grid-cols-6 gap-x-1 cursor-pointer">
              <div className="col-span-1"><i className="fa-solid fa-phone"></i></div>
              <div className="col-start-2 col-end-7" href="tel:+91 7284842410">+91 7284842410</div>
            </div>
            <div className="row-span-1 grid grid-cols-6 gap-x-1 cursor-pointer" onClick={() => window.location.href = 'mailto:harsht241003@gmail.com'}>
              <div className="col-span-1"><i className="fa-regular fa-envelope"></i></div>
              <div className="col-start-2 col-end-7">harsht241003@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#010649] text-white text-[30px] py-3 text-center">
        Thank You For Choosing Us!!
      </div>
    </section>
  );
}

export default ContactUs;
