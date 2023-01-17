import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import "../style/TransDetailTable.scss";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TransDetailTable(props) {
  const { data, fetchdata } = props;

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
  const [transNum, setTransNum] = useState();
  const [serviceName, setServiceName] = useState();
  const [time, setTime] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [blockNum, setBlockNum] = useState();
  const [nodeName, setNodeName] = useState();
  const [status, setStatus] = useState();
  const [apiKinds, setApiKinds] = useState();

  const navigate = useNavigate();
  const toTrans = () => {
    navigate(`/trans`);
  };

  useEffect(() => {
    async function getTrans() {
      const result3 = data.filter((item) => item.transNumber == parseInt(id));

      result3.forEach((item) => {
        setTransNum(item.transNumber);
        setServiceName(item.serviceName);
        setTime(item.timeStamp);
        setTransHash(item.transHash);
        setTransSize(item.transSize);
        setBlockNum(item.blockNumber);
        setNodeName(item.nodeName);
        setStatus(item.status);
        setApiKinds(item.apiKinds);
      });
    }
    getTrans();
  });

  return (
    <div className="boxLayout1 boxShadow">
      <TableContainer className="detailTableInner">
        <Table sx={{ minWidth: 1200 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>서비스명</TableCell>
              <TableCell>{serviceName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>타임스탬프</TableCell>
              <TableCell>{time}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>트랜잭션해시</TableCell>
              <TableCell>
                {transHash}
                <Button
                  className="btnLayout"
                  variant="contained"
                  disableElevation
                  onClick={() => handleCopyClipBoard(transHash)}
                >
                  복사
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>트랜잭션 크기</TableCell>
              <TableCell>{transSize}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>블록번호</TableCell>
              <TableCell>{blockNum}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>API 종류</TableCell>
              <TableCell>{apiKinds}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>노드명</TableCell>
              <TableCell>{nodeName}</TableCell>
            </TableRow>
            <TableRow sx={{ borderBottom: "hidden" }}>
              <TableCell>상태</TableCell>
              <TableCell>{status}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
