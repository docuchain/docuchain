import React, { useEffect, useState } from "react";
// import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlockDetailTable from "./utils/blockDetailTable";
import "./BlockStyle.css";
import BlockDetailTitle from "./utils/blockDetailItitle";

// import TransDetailList from "./utils/transDetailList";

export default function BlockDetail() {
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
    <div className="blockDetail">
      <BlockDetailTitle />
      <div className="blockdetailwrapper" style={{ border: "1px solid red" }}>
        <Stack className="" spacing={2}></Stack>
        <BlockDetailTable />
      </div>
    </div>
  );
}
