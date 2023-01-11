import React, { useEffect, useState } from "react";
import TransChart from "./components/TransChart";
import TransTable from "./components/TransTable";

const Trans = () => {
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
    <div>
      <h2>트랜잭션</h2>
      <p>전체 트랜잭션 {data.length}개</p>
      <TransChart data={data} fetchdata={fetchdata} />
      <TransTable data={data} fetchdata={fetchdata} />
    </div>
  );
};

export default Trans;
