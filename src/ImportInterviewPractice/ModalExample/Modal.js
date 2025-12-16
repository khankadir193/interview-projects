import React, { useEffect } from "react";
import "./modalStyle.css";

const Modal = ({ isOpen, onClose, children }) => {

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Do not render if modal is closed
  if (!isOpen) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-content" onClick={stopPropagation}>
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
