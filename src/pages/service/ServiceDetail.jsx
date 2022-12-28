import React from "react";
import ToServiceMainBtn from "./utils/toServiceMainBtn";
import NodeName from "./utils/nodeName";
import TransNum from "./utils/transNum";
import TransHash from "./utils/transHash";
import "./CSS/Service.scss";
import { useState } from "react";

const ServiceDetail = () => {
  const [user, setuser] = useState({
    // 정보 저장 --> 파이어베이스로 해볼 예정!
    name: "A서비스",
    time: "2021-05-03 14:48:46",
    API: "인증서 등록",
    node: "Node1",
    trans: "326849",
    transHash:
      "0x5bf73440adfd11b00eed378b42e94c0a9b6816da130120f005fc36321243b876",
    block: "326849",
    state: "성공",
  });
  return (
    <div className="serviceDetail">
      <h2>서비스</h2>
      <h3>| 상세정보</h3>
      {/* 버튼(목록으로) */}
      <ToServiceMainBtn />
      <h5>네트워크명 : {user.name}</h5>
      <h5>타임스탬프 :{user.time}</h5>
      <h5>API 종류 : {user.API}</h5>
      <h5 className="NodeName">
        <NodeName /> {user.node}
      </h5>
      <h5 className="TransName">
        <TransNum /> {user.trans}
      </h5>
      <h5 className="TransName">
        <TransHash /> {user.transHash} <span>copy</span>
      </h5>
      <h5>블록번호 : {user.block}</h5>
      <h5>상태 : {user.state}</h5>
    </div>
  );
};

export default ServiceDetail;
