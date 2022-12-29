import React from "react";
import ToBlockMainBtn from "../utils/toBlockMainBtn";

export default function BlockDetailTitle() {
  return (
    <div className="blockDetailTitle">
      <div className="blockDetailTitleContainer">
        <div className="blockDetailTitleLeft">
          <h2>블록</h2>
          <h4>상세정보</h4>
        </div>
        <div className="blockDetailTitleRight">
          <ToBlockMainBtn />
        </div>
      </div>
    </div>
  );
}
