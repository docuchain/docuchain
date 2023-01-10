import React, { useState, useEffect } from "react";
import ServiceChart from "./component/ServiceChart";
import ServiceTable from "./utils/serviceTable";
import "./CSS/Service.scss";

const Service = () => {
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
    <div className="serviceMain_Center">
      {/* <h1 className="serviceMain_Name">서비스</h1>
      <p>전체 발급 0.000건</p> */}
      <div className="serviceChart_Center">
        <ServiceChart data={data} fetchdata={fetchdata} />
        <div className="serviceTable">
          <ServiceTable data={data} fetchdata={fetchdata} />
        </div>
      </div>
    </div>
  );
};

export default Service;
