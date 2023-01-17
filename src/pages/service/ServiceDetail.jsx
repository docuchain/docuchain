import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToServiceMainBtn from "./utils/toServiceMainBtn";
import { useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";
import swal from "sweetalert";
import { getTheme } from "../../recoil/selector";
import { useRecoilValue } from "recoil";
const ServiceDetail = () => {
  const isDark = useRecoilValue(getTheme);
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

  useEffect(() => {
    fetchdata();
  }, []);

  // 복사 버튼
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

  //state에 저장
  const [serviceName, setServiceName] = useState();
  const [time, setTime] = useState();
  const [apiKinds, setApiKinds] = useState();
  const [nodeName, setNodeName] = useState();
  const [transNum, setTransNum] = useState();
  const [transHash, setTransHash] = useState();
  const [blockNum, setBlockNum] = useState();
  const [status, setStatus] = useState();

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
      <div
        className={
          isDark ? "boxLayout1 boxShadowBlack" : "boxLayout1 boxShadow"
        }
      >
        <TableContainer className="detailTableInner">
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell
                  style={isDark ? { color: "white" } : { color: "#323846" }}
                >
                  네트워크명
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
              <TableRow>
                <TableCell
                  style={isDark ? { color: "white" } : { color: "#323846" }}
                >
                  트랜잭션번호
                </TableCell>
                <TableCell
                  style={isDark ? { color: "white" } : { color: "#323846" }}
                >
                  {transNum}
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
                  블록번호
                </TableCell>
                <TableCell
                  style={isDark ? { color: "white" } : { color: "#323846" }}
                >
                  {blockNum}
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
    </>
  );
};

export default ServiceDetail;
