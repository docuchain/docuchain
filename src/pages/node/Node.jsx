import React, { useState } from "react";

import NodeTable from "./components/NodeTable";
import NodeTap from "../node/components/NodeTab";
import AllNode from "./components/AllNode";

import { NodeFirebase } from "./utils/nodeMockData";
import { getTheme } from "../../recoil/selector";
import { useRecoilValue } from "recoil";
const Node = () => {
  const [selectedTap, setSelectedTap] = useState("NODE_LIST");
  const nodeTableData = NodeFirebase();

  return (
    <>
      <div className="boxLayout1">
      <NodeTap selectedTap={selectedTap} setSelectedTap={setSelectedTap} />
      </div>
      {selectedTap === "NODE_LIST" ? <NodeTable /> : <AllNode />}
    </>
  );
};

export default Node;
