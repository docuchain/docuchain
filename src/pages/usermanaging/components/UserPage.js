import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { getTheme } from "../../../recoil/selector";

// 테이블 헤더 데이터
const columns = [
  { id: "role", label: "유형", minWidth: 80, align: "left" },
  { id: "name", label: "이름", minWidth: 80, align: "left" },
  {
    id: "team",
    label: "소속",
    minWidth: 80,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "이메일(아이디)",
    minWidth: 90,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "dashboard",
    label: "대시보드",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "block",
    label: "블록",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "trans",
    label: "트랜잭션",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "node",
    label: "노드",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "service",
    label: "서비스",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "usingService",
    label: "사용중인 서비스",
    minWidth: 140,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "toUserDetail",
    label: "상세보기",
    minWidth: 90,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

const UserPage = (props) => {
  const isDark = useRecoilValue(getTheme);
  const { userData } = props;

  const navigate = useNavigate();
  // users 데이터 담기
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(userData);
      setUsers(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getUsers();
  }, []);

  //checkbox 함수
  const countCheck = (checked) => {
    if (checked == "true") {
      return "O";
    } else {
      return "X";
    }
  };

  //toUsersDetail
  const [usersId, setUsersId] = useState("");

  const toUsersDetail = (e) => {
    setUsersId(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    navigate(`/usermanaging/${usersId}`);
  }, [usersId]);

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
              ? users.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : users
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
                  {datael.role}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {datael.name}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {datael.team}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {datael.email}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {countCheck(datael.dashboard.toString())}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {countCheck(datael.block.toString())}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {countCheck(datael.trans.toString())}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {countCheck(datael.node.toString())}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {countCheck(datael.service.toString())}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  {datael.usingService}
                </TableCell>
                <TableCell
                  style={
                    isDark
                      ? { color: "white", width: 130, textIndent: 30 }
                      : { color: "#323846", width: 130, textIndent: 30 }
                  }
                  align="left"
                >
                  <Button
                    variant="outlined"
                    value={datael.name}
                    onClick={toUsersDetail}
                  >
                    상세보기
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={isDark ? { color: "white" } : { color: "#323846" }}
      />
    </Paper>
  );
};

export default UserPage;
