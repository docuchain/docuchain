import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getTheme, getUserInfo } from "../../../recoil/selector";
import swal from "sweetalert";

const columns = [
  { id: "serviceName", label: "서비스 명" },
  { id: "date", label: "타임스탬프" },
  { id: "ApiKinds", label: "API 종류" },
  { id: "NodeName", label: "노드명" },
  { id: "TransNum", label: "트랜잭션번호" },
  { id: "BlockNum", label: "블록번호" },
  { id: "state", label: "상태" },
];

export default function StickyHeadTable(props) {
  const isDark = useRecoilValue(getTheme);
  const userValue = useRecoilValue(getUserInfo);
  //서비스 권한여부 판별
  const serviceAuth = (e) => {
    if (!userValue.service) {
      swal("권한이 없습니다. 관리자에게 요청하십시오", "", "error");
      e.preventDefault();
    }
  };
  //노드 권한여부 판별
  const nodeAuth = (e) => {
    if (!userValue.node) {
      swal("권한이 없습니다. 관리자에게 요청하십시오", "", "error");
      e.preventDefault();
    }
  };
  //트랜잭션 권한여부 판별
  const transAuth = (e) => {
    if (!userValue.trans) {
      swal("권한이 없습니다. 관리자에게 요청하십시오", "", "error");
      e.preventDefault();
    }
  };
  const { data, fetchdata } = props;

  // 데이터 담기

  //==================================================

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
    <Paper
      sx={{ width: "100%", overflow: "hidden" }}
      style={isDark ? { backgroundColor: "#1e2235", color: "white" } : {}}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    lineHeight: "2.5rem",
                    textIndent: 30,
                  }}
                  style={
                    isDark
                      ? {
                          backgroundColor: "#1e2235",
                          color: "white",
                          minWidth: column.minWidth,
                        }
                      : { minWidth: column.minWidth }
                  }
                >
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
              <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                <TableCell
                  style={{ width: 130, textIndent: 30 }}
                  component="th"
                  scope="row"
                >
                  <Link
                    to={`/service/${datael.id}`}
                    value={datael.id}
                    onClick={serviceAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.serviceName}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 200, textIndent: 30 }} align="left">
                  <Link
                    to={`/service/${datael.id}`}
                    value={datael.id}
                    onClick={serviceAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.timeStamp}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 200, textIndent: 30 }} align="left">
                  <Link
                    to={`/service/${datael.id}`}
                    value={datael.id}
                    onClick={serviceAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.apiKinds}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 90, textIndent: 30 }} align="left">
                  <Link
                    to={`/node/${datael.nodeName}`}
                    value={datael.transNumber}
                    onClick={nodeAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.nodeName}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 90, textIndent: 30 }} align="left">
                  <Link
                    to={`/trans/${datael.transNumber}`}
                    value={datael.transNumber}
                    onClick={transAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.transNumber}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 90, textIndent: 30 }} align="left">
                  <Link
                    to={`/block/${datael.blockNumber}`}
                    value={datael.blockNumber}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.blockNumber}
                  </Link>
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 90, textIndent: 30 }
                      : { color: "#323846", width: 90, textIndent: 30 }
                  }
                  align="left"
                >
                  {datael.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
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
