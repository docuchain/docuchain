import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../style/BlockDetailTable.scss";
//
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";
// btns
// import DetailBtn from "../utils/detailBtn";
// import Button from "@mui/material/Button";
// import CopyBtn from "./copyBtn";
import TransDetailList from "./transDetailList";
import { useState } from "react";

export default function BlockDetailTable() {
  // 자세히 버튼 toggle
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  // 복사 버튼
  const [copy, setCopied] = useState(true);
  // * true일 때 copy가능하게 만들어주기 - clicpboard 사용하기

  // const handleCopy = () => {
  //   setCopied((prev) => !prev);
  // };
  //*  copyClipboard
  const handleCopy = async (text) => {
    setCopied((prev) => !prev);
    try {
      await navigator.clipboard.writeText(text);
      alert("블록해쉬가 복사됐습니다.");
    } catch (e) {
      alert("블록해쉬 복사에 실패했습니다");
    }
    console.log(`text : ${text}`);
  };

  // let content = document.getElementById("textArea").innerHTML;
  // navigator.clipboard
  //   .writeText(content)
  //   .then(() => {
  //     console.log("Text copied to clipboard...");
  //   })
  //   .catch((err) => {
  //     console.log("Something went wrong", err);
  //   });

  return (
    <div className="BlockDetailTable">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1200 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>서비스명</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>블록번호</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>타임스탬프</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow className="blockhashArea">
              <TableCell>블록해시</TableCell>
              <TableCell className="blockhashAreaData">
                63aaf6718d890de3e50256d0
              </TableCell>
              <TableCell>
                {/* <CopyBtn onClick={handleCopy} copy={copy} /> */}
                <Stack spacing={2} direction="row" onClick={handleCopy}>
                  {copy === true ? (
                    <Button variant="outlined">
                      Copy
                      <AiOutlineCopy />
                    </Button>
                  ) : (
                    <Button variant="contained">
                      Copied
                      <AiOutlineCopy />
                    </Button>
                  )}
                </Stack>
                {/* 여기까지 */}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>블록크기</TableCell>
              <TableCell>data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>트랜잭션 수</TableCell>
              <TableCell>data</TableCell>
              {/* <DetailBtn  /> */}
              <Button
                variant="contained"
                disableElevation
                onClick={handleToggle}
              >
                자세히
              </Button>
              {/* <DetailBtn  /> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {toggle === true ? <TransDetailList /> : null}
    </div>
  );
}
