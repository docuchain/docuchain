import React, { useEffect, useState } from "react";
import "./TransStyle.css";
import TransDetailTitle from "./utils/transDetailItitle";

import TransDetailTable from "./utils/transDetailTable";

const TransDetail = () => {
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
      <TransDetailTitle />
      <div>
        <TransDetailTable data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default TransDetail;
