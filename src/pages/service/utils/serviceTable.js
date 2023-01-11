// import * as React from "react";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link, useNavigate } from "react-router-dom";
import ServiceDetail from "../ServiceDetail";

const columns = [
  { id: "serviceName", label: "서비스명" },
  { id: "date", label: "타임스탬프" },
  { id: "ApiKinds", label: "API 종류" },
  { id: "NodeName", label: "노드명" },
  { id: "TransNum", label: "트랜잭션번호" },
  { id: "BlockNum", label: "블록번호" },
  { id: "state", label: "상태" },
];

export default function StickyHeadTable(props) {
  const { data, fetchdata } = props;
  // 데이터 담기

  //fetchdata firebase data
  useEffect(() => {
    fetchdata();
  }, []);

  const [page, setPage] = React.useState(0);
  //Rows per page 단위
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {/* 테이블 메인 타이틀 */}
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
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={idx}
                // onClick={toTableRowdata}
              >
                <TableCell component="th" scope="row">
                  <Link to={`/service/${datael.id}`} value={datael.id}>
                    {datael.serviceName}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  {datael.timeStamp}
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  {datael.apiKinds}
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  {datael.nodeName}
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  <Link
                    to={`/trans/${datael.transNumber}`}
                    value={datael.transNumber}
                  >
                    {datael.transNumber}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  <Link
                    to={`/block/${datael.blockNumber}`}
                    value={datael.blockNumber}
                  >
                    {datael.blockNumber}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 140 }} align="left">
                  {datael.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // 카운트 개수
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
