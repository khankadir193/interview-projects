import React, { useState, useCallback } from "react";
import Modal from "./Modal";

const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <p>This is the dynamic content inside the modal!</p>
        <p>You can put forms, images, or anything here.</p>
      </Modal>
    </>
  );
};

export default ModalComponent;
