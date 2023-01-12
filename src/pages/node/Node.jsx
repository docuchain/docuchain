import React, { useState } from "react";

import NodeTable from "./components/NodeTable";
import NodeTap from "../node/components/NodeTab";
import AllNode from "./components/AllNode";

import { NodeFirebase } from "./utils/nodeMockData";

const Node = () => {
  const [selectedTap, setSelectedTap] = useState("NODE_LIST");
  const nodeTableData = NodeFirebase(); 

  return (
    <>
      {/* <h1>노드</h1>
      <p>노드 갯수 : {nodeTableData.length}개</p> */}
      <div className="boxLayout1">
      <NodeTap selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
      </div>
      {selectedTap === "NODE_LIST" ? <NodeTable /> : <AllNode />}
    </>
  );
};

export default Node;
