import React from "react";
import ToBlockMainBtn from "../utils/toBlockMainBtn";

export default function BlockDetailTitle() {
  const style = {
    float: "right",
    marginBottom: "20px",
  };
  return (
    <div>
      <div>
        <div style={style}>
          <ToBlockMainBtn />
        </div>
      </div>
    </div>
  );
}

/* <div className="blockDetailTitleLeft">
          <h2>블록</h2>
          <h4>상세정보</h4>
        </div> */
