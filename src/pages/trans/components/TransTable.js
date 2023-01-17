import * as React from "react";
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

// 테이블 헤더 데이터
const columns = [
  { id: "serviceName", label: "서비스명", minWidth: 170, align: "left" },
  { id: "blockNumber", label: "트랜잭션번호", minWidth: 170, align: "left" },
  {
    id: "timeStamp",
    label: "타임스탬프",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "blockHash",
    label: "트랜잭션해시",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "blockSize",
    label: "트랜잭션크기",
    minWidth: 170,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "transnum",
    label: "블록번호",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

export default function TransTable(props) {
  const isDark = useRecoilValue(getTheme);
  const userValue = useRecoilValue(getUserInfo);
  const { data, fetchdata } = props;
  // 데이터 fetch

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //트랜잭션 권한여부 판별
  const transAuth = (e) => {
    if (!userValue.trans) {
      swal("권한이 없습니다. 관리자에게 요청하십시오", "", "error");
      e.preventDefault();
    }
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
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    lineHeight: "2.5rem",
                    textIndent: 30,
                  }}
                  key={column.id}
                  align={column.align}
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
              <TableRow hover role="checkbox" tabIndex={0} key={idx}>
                <TableCell
                  style={{ width: 70, textIndent: 30 }}
                  component="th"
                  scope="row"
                >
                  <Link
                    value={datael.transNumber}
                    to={`${datael.transNumber}`}
                    onClick={transAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.serviceName}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 160, textIndent: 30 }} align="left">
                  <Link
                    value={datael.transNumber}
                    to={`${datael.transNumber}`}
                    onClick={transAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.transNumber}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 220, textIndent: 30 }} align="left">
                  <Link
                    value={datael.transNumber}
                    to={`${datael.transNumber}`}
                    onClick={transAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.timeStamp}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 280, textIndent: 30 }} align="left">
                  <Link
                    value={datael.transNumber}
                    to={`${datael.transNumber}`}
                    onClick={transAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.transHash}
                  </Link>
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  <Link
                    value={datael.transNumber}
                    to={`${datael.transNumber}`}
                    onClick={transAuth}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.transSize}
                  </Link>
                </TableCell>

                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  <Link
                    value={datael.blockNumber}
                    to={`/block/${datael.blockNumber}`}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.blockNumber}
                  </Link>
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
        style={isDark ? { color: "white" } : { color: "#323846" }}
      />
    </Paper>
  );
}
