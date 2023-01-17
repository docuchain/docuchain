import React, { useEffect, useState } from "react";
import ServiceChart from "./component/ServiceChart";
import ServiceTable from "./utils/serviceTable";
import "./CSS/Service.scss";
import { getTheme } from "../../recoil/selector";
import { useRecoilValue } from "recoil";
const Service = () => {
  //데이터 받아오기
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

  return (
    <div>
      <div className="maginBw100">
        <ServiceChart data={data} fetchdata={fetchdata} />
      </div>
      <div className="maginBw100">
        <ServiceTable data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default Service;
