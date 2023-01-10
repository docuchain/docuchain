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
// row열로 분리
// import TableRowCompo from "../utils/TableRowCompo";

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
    id: "transnum",
    label: "트랜잭션 수",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

export default function BlockTable() {
  // 데이터 fetch
  const [data, setData] = useState([]);
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
  useEffect(() => {
    fetchdata();
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // 블록 상세 페이지로 이동
  const navigate = useNavigate();

  // const toTableRowdata = (e) => {
  //   navigate("/block/:id");
  //   // 선택된 td의 부모 노드=tablerow el을 가져옴 -> 어떤 td를 선택하던 해당 줄의 모든 row열을 가져올 수 있음
  //   console.log(e.target.parentElement);
  //   //넘겨주고 children데이터를 뽑아서 다음 테이블에 각각 넣어주면 될 듯
  //   // console.log(e.target.parentElement.children);
  // };
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
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={idx}
                // onClick={toTableRowdata}
              >
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
        rowsPerPageOptions={[10, 25, 100]}
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
