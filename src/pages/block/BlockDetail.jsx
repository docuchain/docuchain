import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlockDetailTable from "./utils/blockDetailTable";
import "./BlockStyle.css";
import BlockDetailTitle from "./utils/blockDetailItitle";

// import TransDetailList from "./utils/transDetailList";

export default function BlockDetail() {
  return (
    <div className="blockDetail">
      <BlockDetailTitle />
      {/* Pagination 일단 끌어옴*/}
      <div className="blockdetailwrapper" style={{ border: "1px solid red" }}>
        <Stack className="" spacing={2}>
          <Pagination count={10} size="large" />
        </Stack>
        <BlockDetailTable />
        {/* <TransDetailList /> */}
      </div>
    </div>
  );
}
