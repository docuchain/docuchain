import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./TransStyle.css";
import TransDetailTitle from "./utils/transDetailItitle";

import TransDetailTable from "./utils/transDetailTable";
import { getTheme } from "../../recoil/selector";
import { useRecoilValue } from "recoil";

const TransDetail = () => {
  //   const { transRef } = props;
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-a7ae3-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
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
      <TransDetailTitle />
      <div>
        <TransDetailTable data={data} fetchdata={fetchdata} />
        {/* <TransDetailList /> */}
      </div>
    </div>
  );
};

export default TransDetail;
