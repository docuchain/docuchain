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

  useEffect(() => {
    async function getTrans() {
      const data = await query(transRef, where("transNum", "==", parseInt(id)));
      const querySnapshot = await getDocs(data);

      querySnapshot.forEach((item) => {
        setTransNum(item.data().transNum);
        setServiceName(item.data().serviceName);
        setTime(item.data().time);
        setTransHash(item.data().transHash);
        setTransSize(item.data().transSize);
        setBlockNum(item.data().blockNum);
        console.log(item.transNum, " : ", item.data());
      });
    }
    getTrans();
  }, []);

  const [natworkName, setnatworkName] = useState();

  return (
    <div className="serviceDetail">
      <h2>서비스</h2>
      <h3>| 상세정보</h3>

      {/* 버튼(목록으로) */}
      <ToServiceMainBtn />
      <h5>네트워크명 {serviceName}</h5>
      <h5>타임스탬프 {date}</h5>
      <h5>API 종류 {ApiKinds}</h5>
      <h5 className="NodeName">노드명 {NodeName}</h5>
      <h5 className="TransName">
        {transNum}
        <span>
          <CopyBtn />
        </span>
      </h5>
      <h5>블록번호 {BlockNum}</h5>
      <h5>상태 {state}</h5>
    </div>
  );
};

export default ServiceDetail;
