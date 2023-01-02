import React, { useState } from "react";

import NodeTable from "./components/NodeTable";
import NodeTap from "../node/components/NodeTab";

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
