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
import { useLocation, Link, useParams } from "react-router-dom";
import { query, getDocs } from "firebase/database";

const ServiceDetail = () => {
  // 데이터 담기
  const [data, setData] = useState([]);

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

  const { id } = useParams();

  const [serviceName, setserviceName] = useState();
  const [timeStamp, settimeStamp] = useState();
  const [apiKinds, setapiKinds] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [blockNum, setBlockNum] = useState();
  const [nodeName, setNodeName] = useState();
  const [status, setStatus] = useState();

  return (
    <div className="serviceDetailTable">
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
