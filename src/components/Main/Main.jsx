import React from "react";
import "./Main.css";
import chattingBtn from "../../assets/img/Mask Group.png";
import ModalContainer from "../../containers/Modal/ModalContainer";

const Main = ({ isModal, setIsModal }) => {
  return (
    <>
      <div>main</div>
      {isModal ? (
        <ModalContainer />
      ) : (
        <div className="chattingDiv">
          <img src={chattingBtn} alt="" className="chattingBtn-img" />
        </div>
      )}
    </>
  );
};

export default Main;
