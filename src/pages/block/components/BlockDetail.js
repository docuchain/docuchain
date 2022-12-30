import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlockDetailTable from "../utils/blockDetailTable";
// import DetailBtn from "../utils/detailBtn";
import TransDetailList from "../utils/transDetailList";
export default function BlockDetail() {
  return (
    <div className="blockDetail">
      <h2>블록</h2>
      <h4>상세정보</h4>
      {/* Pagination 일단 끌어옴*/}
      <Stack className="" spacing={2}>
        <Pagination count={10} size="large" />
      </Stack>
      <BlockDetailTable>
        <TransDetailList />
      </BlockDetailTable>
    </div>
  );
}
