import React from "react";
import NodeName from "./utils/nodeName";
import TransNum from "./utils/transNum";
import TransHash from "./utils/transHash";
import CopyBtn from "../block/utils/copyBtn";
import ToServiceMainBtn from "./utils/toServiceMainBtn";
import "./CSS/Service.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const columns = [
  { id: "serviceName", label: "서비스명", link: "service/serviceDetail" },
  { id: "date", label: "타임스탬프", link: "service/serviceDetail" },
  { id: "ApiKinds", label: "API 종류", link: "service/serviceDetail" },
  { id: "NodeName", label: "노드명", minWidth: 10, link: "node/nodeDetail" },
  { id: "TransNum", label: "트랜잭션번호", link: "trans/transDetail" },
  { id: "TransHash", label: "트랜잭션해시", link: "trans/transDetail" },
  { id: "BlockNum", label: "블록번호", minWidth: 0, link: "block/blockDetail" },
  { id: "state", label: "상태", minWidth: 0 },
];

function createData(
  id,
  ServiceName,
  date,
  ApiKinds,
  NodeNum,
  TransNum,
  TransHash,
  BlockNum,
  state
) {
  return {
    id,
    ServiceName,
    date,
    ApiKinds,
    NodeNum,
    TransNum,
    TransHash,
    BlockNum,
    state,
  };
}

const ServiceDetail = () => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/arr.json"
      );
      const result = await res.json();
      setData([...result]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="serviceDetail">
      <h2>서비스</h2>
      <h3>| 상세정보</h3>

      {/* 버튼(목록으로) */}
      <ToServiceMainBtn />

      <div>
        {columns.map((column) => (
          <h5 key={column.id}>{column.label}</h5>
        ))}
      </div>

      {/* <h5>네트워크명 {serviceName}</h5>
      <h5>타임스탬프 {date}</h5>
      <h5>API 종류 {ApiKinds}</h5>
      <h5 className="NodeName">노드명 {nodeName}</h5>
      <h5 className="TransName">
        {transName}
        <span>
          <CopyBtn />
        </span>
      </h5>
      <h5>트랜잭션해시 {transHash}</h5>
      <h5>블록번호 {BlockNum}</h5>
      <h5>상태 {state}</h5> */}
    </div>
  );
};

export default ServiceDetail;
