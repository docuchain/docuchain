import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CopyBtn from "../block/utils/copyBtn";
import serviceTable from "./utils/serviceTable";
import ToServiceMainBtn from "./utils/toServiceMainBtn";
import { useLocation, Link } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { query } from "firebase/database";

const columns = [
  {
    id: "serviceName",
    label: "서비스명",
    minWidth: 10,
    link: "service/ServiceDetail",
  },
  {
    id: "date",
    label: "타임스탬프",
    minWidth: 10,
    link: "service/serviceDetail",
  },
  {
    id: "ApiKinds",
    label: "API 종류",
    minWidth: 0,
    link: "service/serviceDetail",
  },
  { id: "NodeName", label: "노드명", minWidth: 10, link: "node/nodeDetail" },
  {
    id: "TransNum",
    label: "트랜잭션번호",
    minWidth: 10,
    link: "trans/transDetail",
  },
  {
    id: "TransHash",
    label: "블록번호",
    minWidth: 0,
    link: "block/blockDetail",
  },
  { id: "BlockNum", label: "블록번호", minWidth: 0, link: "block/blockDetail" },
  { id: "state", label: "상태", minWidth: 0 },
];

const ServiceDetail = () => {
  // 데이터 담기
  const [data, setData] = React.useState([]);
  //데이터 불러오기
  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/Service.json"
      );
      const result = await res.json();
      setData([...result]);
    } catch (error) {
      console.log(error);
    }
  };
  //fetchdata firebase data
  React.useEffect(() => {
    fetchdata();
  }, []);

  // ===============================================

  return (
    <div className="blockDetailTable">
      <TableContainer component={Paper}>
        <div className="serviceHome--Btn">
          <ToServiceMainBtn />
        </div>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>네트워크명</TableCell>
              <TableCell></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>타임스탬프</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>API 종류</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>노드명</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>트랜잭션번호</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>트랜잭션해시</TableCell>
              <TableCell>data</TableCell>
              <TableCell>
                <CopyBtn />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>블록번호</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>상태</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ServiceDetail;
