import React, { useRef } from "react";
import "./Main.css";
import chattingBtn from "../../assets/img/narin.png";
import chatting from "../../assets/img/chat.png";
import ModalContainer from "../../containers/Modal/ModalContainer";
import Fade from "react-reveal/Fade";

const Main = ({ isModal, setIsModal }) => {
  return (
    <>
      <div className="main">
        <div className="text">
          <div className="title">나린은 여러분과 대화합니다</div>
          <div className="subTitle">
            학습된 인공지능은 여러분의
            <br />
            말에 친근하게 답합니다
          </div>
        </div>
        <div className="img">
          <div className="imgList">
            <div className="wrapper">
              <img className="leftImg" src={chatting} alt="" />
            </div>

            <div className="midWrapper">
              <img className="midImg" src={chatting} alt="" />
            </div>
            <div className="wrapper">
              <img className="rightImg" src={chatting} alt="" />
            </div>
          </div>
        </div>
        <div className="intro">
          <img className="introImg" src={chattingBtn} alt="" />
          <div className="introText1">
            이름 :
            <br />
            종족 :
            <br />
            성별 :
            <br />
            나이 :
            <br />
            성격 :
            <br />
            말투 :
            <br />
            외모 :
          </div>
          <div className="introText2">
            나린
            <br />
            뱁새(인간말 가능)
            <br />
            암컷
            <br />
            2살
            <br />
            밝고 순수하고 활기참
            <br />
            존대
            <br />
            갈색에 동그랗고 귀여운 외모
          </div>
        </div>
      </div>
      {isModal ? (
        <ModalContainer isModal={isModal} setIsModal={setIsModal} />
      ) : (
        <div className="chattingDiv">
          <img
            src={chattingBtn}
            alt=""
            className="chattingBtn-img"
            onClick={() => {
              setIsModal(!isModal);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Main;
