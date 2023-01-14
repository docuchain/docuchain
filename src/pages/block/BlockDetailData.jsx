import React from "react";
import TransDetailModal from "./utils/transDetailModal";
import BlockDetailTitle from "./utils/blockDetailItitle";
import { getTheme } from "../../recoil/selector";
import { useRecoilValue } from "recoil";
const BlockDetailData = () => {
  
  return (
    <>
      <BlockDetailTitle />
      <TransDetailModal />
    </>
  );
};

export default BlockDetailData;
