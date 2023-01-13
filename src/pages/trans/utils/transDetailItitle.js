import React from "react";

export default function TransDetailTitle() {
  const style = {
    float: "right",
    marginBottom: "20px",
  };
  return (
    // <div>
    //   <div>
    //     <div style={style}>
    //       <ToTransMainBtn />
    //     </div>
    //   </div>
    // </div>
    <div className="transDetailTitle">
      <div className="transDetailTitleContainer">
        <div className="transDetailTitleLeft">
          {/* <h2>트랜잭션</h2>
          <h4>상세정보</h4> */}
        </div>
      </div>
    </div>
  );
}
