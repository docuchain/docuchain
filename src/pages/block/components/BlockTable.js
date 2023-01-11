/*eslint-disable*/
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BlockDetailTable from "../utils/blockDetailTable";

// 테이블 헤더 데이터
const columns = [
  { id: "serviceName", label: "서비스 명", minWidth: 170, align: "left" },
  { id: "blockNumber", label: "블록번호", minWidth: 100, align: "left" },
  {
    id: "timeStamp",
    label: "타임스탬프",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "blockHash",
    label: "블록해시",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "blockSize",
    label: "블록크기",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "transCount",
    label: "트랜잭션 수",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

export default function BlockTable(props) {
  const { data, fetchdata } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // 상세페이지 이동 위한 navigate
  const [blockId, setBlockId] = useState("");
  const navigate = useNavigate();

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((datael, idx) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                <TableCell component="th" scope="row">
                  {datael.serviceName}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  <Link to={`${datael.blockNumber}`} value={datael.blockNumber}>
                    {datael.blockNumber}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {datael.timeStamp}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {datael.blockHash}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {datael.blockSize}
                </TableCell>
                <TableCell style={{ width: 160 }} align="left">
                  {datael.transCount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
