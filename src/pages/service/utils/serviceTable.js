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
import { useRecoilValue } from "recoil";
import { getUserInfo } from "../../../recoil/selector";
import swal from "sweetalert";
const columns = [
  { id: "serviceName", label: "서비스명" },
  { id: "date", label: "타임스탬프" },
  { id: "ApiKinds", label: "API 종류" },
  { id: "NodeName", label: "노드명" },
  { id: "TransNum", label: "트랜잭션번호" },
  { id: "BlockNum", label: "블록번호" },
  { id: "state", label: "상태" },
];

export default function StickyHeadTable() {
  const userValue = useRecoilValue(getUserInfo);
  //서비스 권한여부 판별
  const serviceAuth = (e) => {
    if (!userValue.service) {
      swal("", "권한이 없습니다. 관리자에게 문의하십시오", "error");
      e.preventDefault();
    }
  };
  //노드 권한여부 판별
  const nodeAuth = (e) => {
    if (!userValue.node) {
      swal("", "권한이 없습니다. 관리자에게 문의하십시오", "error");
      e.preventDefault();
    }
  };
  //트랜잭션 권한여부 판별
  const transAuth = (e) => {
    if (!userValue.trans) {
      swal("", "권한이 없습니다. 관리자에게 문의하십시오", "error");
      e.preventDefault();
    }
  };
  // 데이터 담기
  const [data, setData] = React.useState([]);
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
  React.useEffect(() => {
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={data.transCount}
                  >
                    <TableCell>
                      <Link
                        to={`${data.transCount}`}
                        value={data.serviceName}
                        onClick={serviceAuth}
                      >
                        {data.serviceName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link
                        to={`${data.transCount}`}
                        value={data.serviceName}
                        onClick={serviceAuth}
                      >
                        {data.timeStamp}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link
                        to={`${data.transCount}`}
                        value={data.serviceName}
                        onClick={serviceAuth}
                      >
                        {data.apiKinds}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={"node/nodeDetail"} onClick={nodeAuth}>
                        {data.nodeName}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={"/trans/transDetail"} onClick={transAuth}>
                        {data.transNumber}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={"/block/blockDetail"}>{data.newBlockNum}</Link>
                    </TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                );
              })}
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
