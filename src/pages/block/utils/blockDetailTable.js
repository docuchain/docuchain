import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import "../style/BlockDetailTable.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";
import TransDetailList from "./transDetailList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

// 토글버튼
// import { Toggle } from "./toggle";

export default function BlockDetailTable(props) {
  const { data, fetchdata } = props;
  // 자세히 버튼 toggle
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);
  const handleDetailBtn = () => setToggle((prev) => !prev);

  // sweet alert사용
  const Swal = require("sweetalert2");

  // 복사 버튼
  const [copy, copied] = useState(false);
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied(!copy);
      Swal.fire("복사 성공!", "복사가 완료됐습니다!", "success");
    } catch (error) {
      Swal.fire("복사 실패!", "다시 시도해주세요!", "error");
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

  // 토글 버튼 테스트
  // const logState = (state) => {
  //   console.log("Toggled:", state);
  // };

  return (
    <>
      <div className="boxLayout1 boxShadow">
        <TableContainer className="detailTableInner">
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
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
                <TableCell>
                  {blockHash}
                  {/* 복사 btn */}
                  <Stack spacing={2} direction="row" className="btnLayout">
                    {copy === true ? (
                      <Button variant="contained">
                        Copied&nbsp;
                        <AiOutlineCopy />
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        onClick={() => handleCopyClipBoard(blockHash)}
                      >
                        Copy&nbsp;
                        <AiOutlineCopy />
                      </Button>
                    )}
                  </Stack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>블록크기</TableCell>
                <TableCell>{blockSize}</TableCell>
              </TableRow>
              <TableRow sx={{ borderBottom: "hidden" }}>
                <TableCell>트랜잭션 수</TableCell>
                <TableCell>
                  {transCount}
                  <Button
                    className="btnLayout"
                    // variant="contained"  - 이거 넣으면 파란색 채워진 박스가 됨
                    disableElevation
                    onClick={handleToggle}
                    style={{ border: "1px solid #1976d2" }}
                  >
                    자세히
                  </Button>
                  {/* 토글 버튼 테스트 */}
                  {/* <Toggle label="Toggle me" toggled={true} onClick={logState} /> */}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {toggle === true ? (
        <div>
          <TransDetailList data={data} fetchdata={fetchdata} />
        </div>
      ) : null}
    </>
  );
}

//-----------
