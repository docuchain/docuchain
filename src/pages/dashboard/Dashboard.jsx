import React, { useEffect, useState } from "react";
import ActiveNtwCnt from "./utils/activeNtwCnt";
import TotalBlockCnt from "./utils/totalBlockCnt";
import TotalServiceCnt from "./utils/totalServiceCnt";
import TotalTransCnt from "./utils/totalTransCnt";
import "./Dashboard.scss";
import NtwTransSpeed from "./utils/ntwTransSpeed";
import NtwBlockTime from "./utils/ntwBlockTime";
import ServiceEnrollCnt from "./utils/serviceEnrollCnt";
import ActiveNtw from "./utils/activeNtw";
import "../common/style/boxShadow.scss";

const Dashboard = () => {
  //데이터 받아와서 props로 뿌려주기
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

  return (
    <div className="Dashboard">
      <div className="maginBw100 boxLayout4">
        <TotalBlockCnt data={data} fetchdata={fetchdata} />
        <TotalTransCnt data={data} fetchdata={fetchdata} />
        <ActiveNtwCnt data={data} fetchdata={fetchdata} />
        <TotalServiceCnt data={data} fetchdata={fetchdata} />
      </div>
      <div className="maginBw100 boxLayout2">
        <NtwTransSpeed data={data} fetchdata={fetchdata} />
        <NtwBlockTime data={data} fetchdata={fetchdata} />
      </div>
      <div className="maginBw100 boxLayout2">
        <ServiceEnrollCnt data={data} fetchdata={fetchdata} />
        <ActiveNtw data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default Dashboard;
