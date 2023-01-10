import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TransDetail = () => {
  //   const { transRef } = props;
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
      );
      const result = await res.json();
      setData([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const { id } = useParams();

  const [transNum, setTransNum] = useState();
  const [serviceName, setServiceName] = useState();
  const [time, setTime] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [blockNum, setBlockNum] = useState();
  const [nodeName, setNodeName] = useState();
  const [status, setStatus] = useState();
  // 이전 페이지 이동
  const navigate = useNavigate();
  const toTrans = () => {
    navigate(`/trans`);
  };

  useEffect(() => {
    async function getTrans() {
      const result3 = data.filter((item) => item.transNumber == parseInt(id));

      result3.forEach((item) => {
        setTransNum(item.transNumber);
        setServiceName(item.serviceName);
        setTime(item.timeStamp);
        setTransHash(item.transHash);
        setTransSize(item.transSize);
        setBlockNum(item.blockNumber);
        setNodeName(item.nodeName);
        setStatus(item.status);
      });
    }
    getTrans();
  });

  return (
    <div>
      <h1>트랜잭션</h1>
      <h3>| 상세정보</h3>
      <button onClick={toTrans}>목록으로</button>
      <div>서비스명 {serviceName}</div>
      <div>타임스탬프 {time}</div>
      <div>트랜잭션해시 {transHash}</div>
      <div>트랜잭션크기 {transSize}</div>
      <div>블록번호 {blockNum}</div>
      <div>노드명 {nodeName}</div>
      <div>상태 {status}</div>
    </div>
  );
};

export default TransDetail;
