import React from "react";

import { colors } from "../../../lib/colors";
import "../NodeStyle.css";

const NodeTap = ({ selectedTap, setSelectedTap }) => {
  return (
    <div className="nodeTabContainer">
      <div
        className="tab"
        style={{
          flex: 1,
          borderBottom:
            selectedTap === "NODE_LIST" && `2px solid ${colors.blue}`,
        }}
        onClick={() => {
          setSelectedTap("NODE_LIST");
        }}
      >
        노드목록
      </div>
      <div
        className="tab"
        style={{
          flex: 1,
          borderBottom:
            selectedTap === "ALL_NODE_STATE" && `2px solid ${colors.blue}`,
        }}
        onClick={() => {
          setSelectedTap("ALL_NODE_STATE");
        }}
      >
        전체 노드 지원 현황
      </div>
    </div>
  );
};

export default NodeTap;
