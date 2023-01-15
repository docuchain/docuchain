import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToServiceMainBtn from "./utils/toServiceMainBtn";
import { useLocation, Link, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import CopyBtn from "../block/utils/copyBtn";
import swal from "sweetalert";

const ServiceDetail = () => {
  // 데이터 담기
  const [data, setData] = useState([]);

  //데이터 불러오기
  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
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
                      >
                        Copy&nbsp;
                        <AiOutlineCopy />
                      </Button>
                    )}
                  </Stack>
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
