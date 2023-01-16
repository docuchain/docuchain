import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToServiceMainBtn from "./utils/toServiceMainBtn";
import { useLocation, Link, useParams } from "react-router-dom";
import { query, getDocs } from "firebase/database";
import Button from "@mui/material/Button";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import CopyBtn from "../block/utils/copyBtn";

const ServiceDetail = () => {
  // 데이터 담기
  const [data, setData] = useState([]);

  //데이터 불러오기
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

  //fetchdata firebase data
  useEffect(() => {
    fetchdata();
  }, []);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };
  //state에 저장
  const [serviceName, setServiceName] = useState();
  const [time, setTime] = useState();
  const [apiKinds, setApiKinds] = useState();
  const [nodeName, setNodeName] = useState();
  const [transNum, setTransNum] = useState();
  const [transHash, setTransHash] = useState();
  const [blockNum, setBlockNum] = useState();
  const [status, setStatus] = useState();

  //
  //useParams
  const { id } = useParams();

  //state에 데이터 저장
  useEffect(() => {
    async function getTrans() {
      const result3 = data.filter((item) => item.id == parseInt(id));

      result3.forEach((item) => {
        setServiceName(item.serviceName);
        setTransNum(item.transNumber);
        setTime(item.timeStamp);
        setTransHash(item.transHash);
        setApiKinds(item.apiKinds);
        setNodeName(item.nodeName);
        setBlockNum(item.blockNumber);
        setStatus(item.status);
      });
    }
    getTrans();
  });

  return (
    <>
      <div>
        <ToServiceMainBtn />
      </div>
      <div className="boxLayout1 boxShadow">
        <TableContainer className="detailTableInner">
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>네트워크명</TableCell>
                <TableCell>{serviceName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>타임스탬프</TableCell>
                <TableCell>{time}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>API 종류</TableCell>
                <TableCell>{apiKinds}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>노드명</TableCell>
                <TableCell>{nodeName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>트랜잭션번호</TableCell>
                <TableCell>{transNum}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>트랜잭션해시</TableCell>
                <TableCell>
                  {transHash}{" "}
                  <FolderCopyIcon
                    variant="contained"
                    disableElevation
                    onClick={() => handleCopyClipBoard(transHash)}
                  ></FolderCopyIcon>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>블록번호</TableCell>
                <TableCell>{blockNum}</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "hidden" }}>
                <TableCell>상태</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default ServiceDetail;
