import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//
// import "../style/BlockDetailTable.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";
import TransDetailList from "./transDetailList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import copyBtn from "./copyBtn";
import styled from "@emotion/styled";
export default function BlockDetailTable(props) {
  const { data, fetchdata } = props;
  // 자세히 버튼 toggle
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  // 복사 버튼
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사 성공!");
    } catch (error) {
      alert("복사 실패!");
    }
  };

  //useParams
  const { id } = useParams();

  //state에 데이터 저장
  const [serviceName, setServiceName] = useState();
  const [time, setTime] = useState();
  const [blockHash, setBlockHash] = useState();
  const [blockSize, setBlockSize] = useState();
  const [blockNum, setBlockNum] = useState();
  const [transCount, setTransCount] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    async function getBlocks() {
      const result3 = data.filter((item) => item.blockNumber == parseInt(id));

      result3.forEach((item) => {
        setServiceName(item.serviceName);
        setTime(item.timeStamp);
        setBlockHash(item.blockHash);
        setBlockSize(item.blockSize);
        setBlockNum(item.blockNumber);
        setTransCount(item.transCount);
        setIdx(item.id);
      });
    }
    getBlocks();
  });

  // const style = {
  //   border: "1px solid red",
  //   padding: "40px",
  // };

  return (
    <div className="boxLayout1 boxShadow">
      <TableContainer>
        <Table
          sx={{ minWidth: 1200, border: "none" }}
          aria-label="simple table"
        >
          <TableBody>
            <TableRow className="deleteLastBorderLine">
              <TableCell>서비스명</TableCell>
              <TableCell>{serviceName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>블록번호</TableCell>
              <TableCell>{blockNum}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>타임스탬프</TableCell>
              <TableCell>{time}</TableCell>
            </TableRow>
            <TableRow className="blockhashArea">
              <TableCell>블록해시</TableCell>
              <TableCell className="blockhashAreaData">
                {blockHash}
                {/* 복사 btn */}
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => handleCopyClipBoard(blockHash)}
                >
                  복사
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>블록크기</TableCell>
              <TableCell>{blockSize}</TableCell>
            </TableRow>
            <TableRow sx={{ borderBottom: "hidden" }}>
              <TableCell>트랜잭션 수</TableCell>
              <TableCell>{transCount}</TableCell>
              {/* 자세히 btn */}
              <Button
                variant="contained"
                disableElevation
                onClick={handleToggle}
              >
                자세히
              </Button>
            </TableRow>
          </TableBody>
          {/* <Pagination
            count={data.length}
            rowsPerPage={rowsPerPage}
            idx={idx}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Table>
      </TableContainer>
      {toggle === true ? (
        <TransDetailList data={data} fetchdata={fetchdata} />
      ) : null}
    </div>
  );
}
