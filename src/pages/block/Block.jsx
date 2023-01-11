import React, { useEffect, useState } from "react";
import BlockChart from "./components/BlockChart";
// import BlockTable from "./components/BlockTable";
import BlockTable from "./components/BlockTable";
// import BlockTableCopy  from "./components/BlockTableCopy";
import "./BlockStyle.css";

const Block = () => {
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
    <div className="blockContainer">
      <div className="blockTitle">
        <h2>블록</h2>
        <h4>전체 블록 {data.length}개</h4>
      </div>
      <div className="block" style={{ border: "1px solid red" }}>
        <BlockChart />
        <BlockTable />
      </div>
    </div>
  );
};

export default Block;
