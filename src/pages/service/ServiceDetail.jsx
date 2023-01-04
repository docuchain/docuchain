import React from "react";
import ToServiceMainBtn from "./utils/toServiceMainBtn";
import NodeName from "./utils/nodeName";
import TransNum from "./utils/transNum";
import TransHash from "./utils/transHash";
import CopyBtn from "../block/utils/copyBtn";
import "./CSS/Service.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const columns = [
  { id: "serviceName", label: "서비스명", minWidth: 10 },
  { id: "date", label: "타임스탬프", minWidth: 10 },
  { id: "ApiKinds", label: "API 종류", minWidth: 0 },
  { id: "NodeName", label: "노드명", minWidth: 10 },
  { id: "TransNum", label: "트랜잭션번호", minWidth: 10 },
  { id: "BlockNum", label: "블록번호", minWidth: 0 },
  { id: "state", label: "상태", minWidth: 0 },
];

function createData(
  ServiceName,
  date,
  ApiKinds,
  NodeNum,
  TransNum,
  BlockNum,
  state
) {
  return { ServiceName, date, ApiKinds, NodeNum, TransNum, BlockNum, state };
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
      <h5>네트워크명 : </h5>
      <h5>타임스탬프 : </h5>
      <h5>API 종류 : </h5>
      <h5 className="NodeName">
        <Link to="/NodeDetail">
          <NodeName />
        </Link>
      </h5>

      <h5 className="TransName">
        <Link to="/TransDetail">
          <TransNum />
        </Link>
      </h5>
      <h5 className="TransName">
        <TransHash />{" "}
        <span>
          <CopyBtn />
        </span>
      </h5>
      <h5>블록번호 : </h5>
      <h5>상태 : </h5>
    </div>
  );
};

export default ServiceDetail;
