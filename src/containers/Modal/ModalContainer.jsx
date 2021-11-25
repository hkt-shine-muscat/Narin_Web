import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";

const ModalContainer = ({ isModal, setIsModal }) => {
  const [userChat, setUserChat] = useState("");
  const [chatList, setChatList] = useState([]);

  return (
    <>
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        userChat={userChat}
        setUserChat={setUserChat}
      />
    </>
  );
};

export default ModalContainer;
