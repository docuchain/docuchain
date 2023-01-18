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
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";

const columns = [
  { id: "serviceName", label: "서비스 명", minWidth: 170, align: "left" },
  { id: "blockNumber", label: "블록번호", minWidth: 100, align: "center" },
  {
    id: "timeStamp",
    label: "타임스탬프",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "blockHash",
    label: "블록해시",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "blockSize",
    label: "블록크기",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "transCount",
    label: "트랜잭션 수",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export default function BlockTable(props) {
  const isDark = useRecoilValue(getTheme);
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
              <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                <TableCell
                  component="th"
                  scope="row"
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                >
                  {datael.serviceName}
                </TableCell>
                <TableCell
                  style={{
                    width: 130,
                    textIndent: 30,
                  }}
                  align="center"
                >
                  <Link
                    to={`${datael.blockNumber}`}
                    value={datael.blockNumber}
                    style={isDark ? { color: "white" } : { color: "#323846" }}
                  >
                    {datael.blockNumber}
                  </Link>
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="center"
                >
                  {datael.timeStamp}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="center"
                >
                  {datael.blockHash}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="center"
                >
                  {datael.blockSize}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="center"
                >
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
        style={isDark ? { color: "white" } : { color: "#323846" }}
      />
    </Paper>
  );
}
