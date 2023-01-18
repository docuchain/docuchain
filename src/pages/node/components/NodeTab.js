import React from "react";
import { useRecoilValue } from "recoil";

import { colors } from "../../../lib/colors";
import { getTheme } from "../../../recoil/selector";
import "../NodeStyle.scss";

const NodeTap = ({ selectedTap, setSelectedTap }) => {
  const isDark = useRecoilValue(getTheme);
  return (
    <div className="nodeTabContainer">
      <div
        className="tab"
        style={
          isDark
            ? {
                backgroundColor: "#1e2235",
                color: "white",
                flex: 1,
                borderBottom:
                  selectedTap === "NODE_LIST" && `3px solid ${colors.blue}`,
              }
            : {
                flex: 1,
                borderBottom:
                  selectedTap === "NODE_LIST" && `3px solid ${colors.blue}`,
              }
        }
        onClick={() => {
          setSelectedTap("NODE_LIST");
        }}
      >
        노드목록
      </div>
      <div
        className="tab"
        style={
          isDark
            ? {
                backgroundColor: "#1e2235",
                color: "white",
                flex: 1,
                borderBottom:
                  selectedTap === "ALL_NODE_STATE" &&
                  `3px solid ${colors.blue}`,
              }
            : {
                flex: 1,
                borderBottom:
                  selectedTap === "ALL_NODE_STATE" &&
                  `3px solid ${colors.blue}`,
              }
        }
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
