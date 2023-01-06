import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// btns
import DetailBtn from "../utils/detailBtn";
import CopyBtn from "./copyBtn";
import { useState, useEffect } from "react";
// 

export default function BlockDetailTable() {
// fetc h데이터 
  const [data, setData] = useState([]);

  // const fetchdata = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/block/service.json"
  //     );
  //     const result = await res.json();
  //     setData([...result]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchdata();
  // }, []);

// table row
  // function createData(name, contents) {
  //   return { name, contents};
  // }
  
  // const rows = [
  //   createData("서비스명","서비스"),
  //   createData("블록번호", "블록번호"),
  //   createData("타임스탬프", "타임스탬프"),
  //   createData("블록해시", "블록해시"),
  //   createData("블록크기", "블록크기"),
  //   createData("트랜잭션 수", 5),
  // ];
  console.log(data);

  return (
    <>
      <div className="blockDetailTable">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>서비스명</TableCell>
                <TableCell>data</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>블록번호</TableCell><TableCell>data</TableCell></TableRow>
              <TableRow><TableCell>타임스탬프</TableCell><TableCell>data</TableCell></TableRow>
              <TableRow><TableCell>블록해시</TableCell><TableCell>data</TableCell> <TableCell><CopyBtn /></TableCell>
              </TableRow>
              <TableRow><TableCell>블록크기</TableCell><TableCell>data</TableCell></TableRow>
              <TableRow><TableCell>트랜잭션 수</TableCell><TableCell>data</TableCell><DetailBtn /></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
