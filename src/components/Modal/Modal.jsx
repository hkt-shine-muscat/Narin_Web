import React from "react";
import "./Modal.css";
import Narin from "../../assets/img/Mask Group.png";
import Cancle from "../../assets/img/x 1.png";
import Mic from "../../assets/img/마이크 1.png";
import Send from "../../assets/img/보내기1 1.png";
const Modal = ({ isModal, setIsModal, userChat, setUserChat }) => {
  return (
    <>
      <div className="ModalForm">
        <div className="Modal-NarinDiv">
          <div className="Modal-NarinDiv-NarinImg">
            <img src={Narin} alt="" className="Modal-NarinDiv-NarinImg-Img" />
          </div>
          <div className="Modal-NarinDiv-NarinName">나린</div>
          <div className="Modal-NarinDiv-Cancle">
            <img
              src={Cancle}
              alt=""
              className="Modal-NarinDiv-Cancle-Img"
              onClick={() => {
                setIsModal(!isModal);
              }}
            />
          </div>
        </div>
        <div className="Modal-Chatting">
          <div className="Modal-Chatting-Chatting">
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
            <div className="Modal-Chatting-timeStamp">
              2021.11.24(수) 오후 7:40{" "}
            </div>
            <div className="Modal-Chatting-NarinChat">
              <div className="Modal-Chatting-NarinChat-NarinImg">
                <img
                  src={Narin}
                  alt=""
                  className="Modal-Chatting-NarinChat-NarinImg-Img"
                />
              </div>
              <div className="Modal-Chatting-NarinChat-text">
                안녕하세요 나린입니다!!
              </div>
            </div>
            <div className="Modal-Chatting-ClientChat">
              <div className="Modal-Chatting-ClientChat-text">안녕 나린아</div>
            </div>
          </div>
        </div>
        <div className="Modal-SendMessage">
          <div className="Modal-SendMessage-InputDiv">
            <input
              type="text"
              value={userChat}
              className="Modal-SendMessage-InputDiv-Input"
              onChange={(e) => {
                setUserChat(e.target.value);
              }}
              placeholder="하고 싶은 말을 입력하세요"
            />
          </div>
          <div className="Modal-SendMessage-Recoding">
            <img src={Mic} alt="" className="Modal-SendMessage-Recoding-Img" />
          </div>
          <div className="Modal-SendMessage-Send">
            <img src={Send} alt="" className="Modal-SendMessage-Send-Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
