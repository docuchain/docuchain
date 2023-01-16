import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";
import TransDetailList from "./transDetailList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

export default function BlockDetailTable(props) {
  const { data, fetchdata } = props;
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle((prev) => !prev);

  const [copy, copied] = useState(false);
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied(!copy);
      swal("복사 성공!", "복사가 완료됐습니다!", "success");
    } catch (error) {
      swal("복사 실패!", "다시 시도해주세요!", "error");
    }
  };

  const { id } = useParams();

  const [serviceName, setServiceName] = useState();
  const [time, setTime] = useState();
  const [blockHash, setBlockHash] = useState();
  const [blockSize, setBlockSize] = useState();
  const [blockNum, setBlockNum] = useState();
  const [transCount, setTransCount] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    async function getBlocks() {
      const result3 = data.filter((item) => item.blockNumber === parseInt(id));

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
                    disableElevation
                    onClick={handleToggle}
                    style={{ border: "1px solid #1976d2" }}
                  >
                    자세히
                  </Button>
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
