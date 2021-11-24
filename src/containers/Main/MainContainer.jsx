import React from "react";
import { useRecoilState } from "recoil";
import Main from "../../components/Main/Main";
import { isModalState } from "../../stores/mainStore";
const MainContainer = () => {
  const [isModal, setIsModal] = useRecoilState(isModalState);

  return (
    <>
      <Main isModal={isModal} setIsModal={setIsModal} />
    </>
  );
};

export default MainContainer;
