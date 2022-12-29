import React from "react";
import TransChart from "./components/TransChart";
import TransTable from "./components/TransTable";

const Trans = () => {
  return (
    <div>
      <h2>트랜잭션</h2>
      <p>전체 트랜잭션 500,613개</p>
      <TransChart />
      <TransTable />
    </div>
  );
};

export default Trans;
