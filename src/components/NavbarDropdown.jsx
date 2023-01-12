import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Sidebar from "./Sidebar";

Modal.setAppElement(document.getElementById("root"));

const NavbarDropdown = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
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

  function handleSideNavToggle() {
    console.log("toggle it");
  }

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          color: "black",
          margin: "5px",
          fontSize: "large",
          padding: "5px",
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {width < 1024 && (
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        closeTimeoutMS={200}
      >
        <Sidebar closeModal={closeModal} />
      </Modal>)}
    </div>
  );
};

export default NavbarDropdown;
