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

function createData(name, data, btn) {
  return { name, data, btn };
}

const rows = [
  createData("서비스명", "hihi"),
  createData("블록번호", "hihihihihihihihi"),
  createData("타임스탬프", "hihihihihihi"),
  createData("블록해시", "hihihihi"),
  createData("블록크기", "hihihihihihihihihihihihihihihihi"),
  createData("트랜잭션 수", 5),
];
export default function BlockDetailTable() {
  return (
    <>
      <div className="blockDetailTable">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableBody>
              {/* javascript */}
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{ width: 100 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.data}</TableCell>
                  {/* tableCell 마지막에 btn 추가해야 됨 */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CopyBtn />
        <DetailBtn />
      </div>
    </>
  );
}
