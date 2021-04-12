import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ modalIsOpen, children }) => {
  if (!modalIsOpen) return null;
  return createPortal(
    <div className="modal-container">{children}</div>,
    document.getElementById("modal")
  );
};

export default Modal;
