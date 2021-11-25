import React, { useEffect, useState } from "react";
import MainApi from "../../assets/api/MainApi";
import Modal from "../../components/Modal/Modal";

const ModalContainer = ({ isModal, setIsModal }) => {
  const [userChat, setUserChat] = useState("");
  const [chatList, setChatList] = useState([
    {
      message: "안녕하세요! 나린이에요",
      role: "bot",
    },
  ]);

  const sendMessage = async () => {
    console.log(chatList);
    let message_history = [];
    let messages = [];
    chatList.map((chat) => {
      messages.push(chat);
    });
    chatList.map((chat) => {
      if (chat !== null) {
        message_history.push(chat.message);
      }
    });
    console.log(message_history);
    localStorage.setItem("ChattingMessage", JSON.stringify(messages));
    localStorage.setItem("localChatting", JSON.stringify(message_history));
    const response = await MainApi.trySendMessage(userChat, message_history)
      .then((res) => {
        console.log(chatList);
        setChatList([
          ...chatList,
          {
            message: res.data.message,
            role: "bot",
          },
        ]);
      })
      .catch((err) => {
        console.log(err.reponse);
      });

    // let tryChattingList = [];
    // let sendChattingList = [];
    // if (JSON.parse(localStorage.getItem("chattingList")) === null) {
    //   tryChattingList = [];
    // } else {
    //   tryChattingList = JSON.parse(localStorage.getItem("chattingList"));
    //   sendChattingList =
    //     tryChattingList[tryChattingList.length - 1].message_history;
    // }

    // const response = await MainApi.trySendMessage(userChat, sendChattingList)
    //   .then((res) => {
    //     console.log(res.data.message);

    //     const chattingList = JSON.parse(localStorage.getItem("chattingList"));

    //     if (!chattingList) {
    //       let test = [];
    //       console.log(userChat);
    //       test[0] = {
    //         message: userChat,
    //         message_history: [],
    //       };
    //       test[1] = {
    //         message: res.data.message,
    //         message_history: [userChat],
    //       };
    //       localStorage.setItem("chattingList", JSON.stringify(test));
    //     } else {
    //       let test = chattingList;
    //       let t = [];

    //       test.map((v, i) => {
    //         if (i <= 9) {
    //           t.push(v.message);
    //         }
    //       });

    //       test[test.length] = {
    //         message: res.data.message,
    //         message_history: t,
    //       };

    //       localStorage.setItem("chattingList", JSON.stringify(test));
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
  };
  useEffect(() => {
    let messages = [];
    messages = JSON.parse(localStorage.getItem("ChattingMessage"));
    console.log(messages);
    if (messages === null) {
      setChatList([
        {
          message: "안녕하세요! 나린이에요",
          role: "bot",
        },
      ]);
    } else {
      setChatList([...messages]);
    }
  }, [setChatList]);

  return (
    <>
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        userChat={userChat}
        setUserChat={setUserChat}
        sendMessage={sendMessage}
        chatList={chatList}
        setChatList={setChatList}
      />
    </>
  );
};

export default ModalContainer;
