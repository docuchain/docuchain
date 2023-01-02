import React, { useState } from "react";
import styled from "styled-components";

import Header from "../../pages/common/components/Header";
import NodeTable from "./utils/NodeTable";
import NodeTap from "../node/components/NodeTab";

const S = {
  GlobalContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: 100vh;
  `,
};

const Node = () => {
  const [selectedTap, setSelectedTap] = useState("NODE_LIST");
  // NODE_LIST || ALL_NODE_STATE 상태관리
  return (
    // <S.GlobalContainer>
    <>
      <NodeTap selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
      <NodeTable />
    </>
    // </S.GlobalContainer>
  );
};

export default Node;
