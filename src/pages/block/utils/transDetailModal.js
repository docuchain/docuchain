import React from "react";
import CloseModalBtn from "../utils/closeModalBtn";
export default function TransDetailModal() {
  return (
    <>
      <div className="blockDetailDataModalContainer">
        <div className="blockDetailDataModal">
          <h2>트랜잭션 데이터 상세</h2>
          <CloseModalBtn />
        </div>
      </div>
    </>
  );
}
