import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Sidebar from "./Sidebar";

Modal.setAppElement(document.getElementById("root"));

const NavbarDropdown = () => {
  
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log('afterOpenModal');
  }

  function closeModal(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width > 1024 && handleSideNavToggle();
  }, [width]);

  function handleSideNavToggle() {}

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          color: "black",
          fontSize: "large",
          height: "70px",
        }}
      >
        <i className="fa-solid fa-bars w-8 h-8"></i>
      </button>
      {width < 1024 && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          closeTimeoutMS={200}
        >
          <Sidebar closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default NavbarDropdown;
