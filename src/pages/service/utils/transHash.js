import React from "react";
import ServiceDetail from "../ServiceDetail";
import { Link } from "react-router-dom";

const columns = [
  { id: "serviceName", label: "서비스명", minWidth: 10 },
  { id: "date", label: "타임스탬프", minWidth: 10 },
  { id: "ApiKinds", label: "API 종류", minWidth: 0 },
  { id: "NodeNum", label: "노드명", minWidth: 10 },
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

const transHash = (props) => {
  return (
    <div>
      <h5>
        트랜잭션해시 : <Link to="/Trans/TransDetail">ddd</Link>
      </h5>
    </div>
  );
};

export default transHash;
