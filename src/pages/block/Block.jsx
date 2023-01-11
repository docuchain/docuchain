// import React, { useEffect, useState } from "react";
import BlockChart from "./components/BlockChart";
import BlockTable from "./components/BlockTable";
import ContentsTitle from "../common/components/ContentsTitle.js";
import "../../App.css";

const Block = () => {
  return (
    <div>
      <ContentsTitle />
      <div className="maginBw100 boxLayout2">
        <BlockChart />
      </div>
      <div className="maginBw100">
        <BlockTable />
      </div>
    </div>
  );
};

export default Block;
