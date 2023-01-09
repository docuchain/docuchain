import React from "react";
import BlockChart from "./components/BlockChart";
// import BlockTable from "./components/BlockTable";
import BlockTable from "./components/BlockTable";
// import BlockTableCopy  from "./components/BlockTableCopy";
import "./BlockStyle.css";

const block = () => {
  return (
    <div className="blockContainer">
      <div className="blockTitle">
        <h2>블록</h2>
        <h4>전체 블록 23,452,345개</h4>
      </div>
      <div className="block" style={{ border: "1px solid red" }}>
        <BlockChart />
        <BlockTable />
      </div>
    </div>
  );
};

export default block;
