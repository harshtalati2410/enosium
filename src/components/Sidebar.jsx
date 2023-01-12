import React from "react";

function Sidebar(props) {
  return (
    <div className=" py-3 h-full w-full text-[22px]">
      <div className="text-[32px] px-4 block lg:hidden">Navigation</div>
      <div className="ml-4 border-l-[1px] border-gray-500 border-solid block lg:hidden">
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          Home
        </a>
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          About Us
        </a>
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          Contact Us
        </a>
      </div>
      <div className="text-[32px] px-4">Heading</div>
      <div className="ml-4 border-l-[1px] border-gray-500 border-solid">
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          Graph
        </a>
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          About Me
        </a>
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          Previous Searches
        </a>
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          Blah
        </a>
        <a
          href="/"
          onClick={props.closeModal}
          className="block px-2 py-1 border-transparent border-l-[2px] hover:border-orange-500 hover:text-sky-400"
        >
          Blah
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
