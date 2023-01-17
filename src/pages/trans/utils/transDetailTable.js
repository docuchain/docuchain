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
import Stack from "@mui/material/Stack";
import { AiOutlineCopy } from "react-icons/ai";

// swal 임포트
// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";
import swal from "sweetalert";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";

export default function TransDetailTable(props) {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;

  // 복사 버튼
  const [copy, copied] = useState(false);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      copied(!copy);
      copied(!copy);
      swal("복사 성공!", "복사가 완료됐습니다!", "success");
    } catch (error) {
      swal("복사 실패!", "다시 시도해주세요!", "error");
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
    <div
      className={isDark ? "boxLayout1 boxShadowBlack" : "boxLayout1 boxShadow"}
    >
      <TableContainer className="detailTableInner">
        <Table sx={{ minWidth: 1200 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                서비스명
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {serviceName}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                타임스탬프
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {time}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                트랜잭션해시
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {transHash}
                <Stack spacing={2} direction="row" className="btnLayout">
                  {copy === true ? (
                    <Button variant="contained">
                      Copied&nbsp;
                      <AiOutlineCopy />
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleCopyClipBoard(transHash)}
                      style={isDark ? { color: "white" } : {}}
                    >
                      Copy&nbsp;
                      <AiOutlineCopy />
                    </Button>
                  )}
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                트랜잭션 크기
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {transSize}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                블록번호
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {blockNum}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                API 종류
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {apiKinds}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                노드명
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {nodeName}
              </TableCell>
            </TableRow>
            <TableRow sx={{ borderBottom: "hidden" }}>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                상태
              </TableCell>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {status}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
