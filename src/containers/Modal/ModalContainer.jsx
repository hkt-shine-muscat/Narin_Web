import React from "react";
import Modal from "../../components/Modal/Modal";

const ModalContainer = ({ isModal, setIsModal }) => {
  return (
    <>
      <Modal isModal={isModal} setIsModal={setIsModal} />
    </>
  );
};

export default ModalContainer;
