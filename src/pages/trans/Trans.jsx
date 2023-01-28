import React, { useEffect, useState } from "react";
import TransChart from "./components/TransChart";
import TransTable from "./components/TransTable";
import { getTheme } from "../../recoil/selector";
import { useRecoilValue } from "recoil";
import "./TransStyle.css";
const Trans = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-d108b-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
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
        <TransChart data={data} fetchdata={fetchdata} />
      </div>
      <div className="maginBw100">
        <TransTable data={data} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default Trans;
