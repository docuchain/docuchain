import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

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
  const { userData } = props;

  // const [name, setName] = useState();
  const navigate = useNavigate();
  // users 데이터 담기
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(userData);
      // console.log(data);
      setUsers(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );

      // data.forEach((item) => {
      //   setName(item.id);
      // });
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

  // //삭제
  // async function deleteData() {
  //   if (window.confirm("정말 삭제합니까?")) {
  //     await deleteDoc(doc(userData, name));
  //     alert("삭제되었습니다.");
  //   } else {
  //     alert("취소합니다.");
  //   }
  // }

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
    // <TableContainer component={Paper} style={{ width: "1200px" }}>
    //   <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell align="center">유형</TableCell>
    //         <TableCell align="center">이름</TableCell>
    //         <TableCell align="center">소속</TableCell>
    //         <TableCell align="center">이메일(아이디)</TableCell>
    //         <TableCell align="center">대시보드</TableCell>
    //         <TableCell align="center">블록</TableCell>
    //         <TableCell align="center">트랜잭션</TableCell>
    //         <TableCell align="center">노드</TableCell>
    //         <TableCell align="center">서비스</TableCell>
    //         <TableCell align="center">이용중인 서비스</TableCell>
    //         <TableCell align="center">상세보기</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {(rowsPerPage > 0
    //         ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //         : users
    //       ).map((data, idx) => (
    //         <TableRow key={idx}>
    //           <TableCell
    //             component="th"
    //             scope="row"
    //             style={{ width: 160 }}
    //             align="center"
    //           >
    //             {data.role}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {data.name}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {data.team}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {data.email}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {countCheck(data.dashboard.toString())}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {countCheck(data.block.toString())}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {countCheck(data.trans.toString())}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {countCheck(data.node.toString())}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {countCheck(data.service.toString())}
    //           </TableCell>
    //           <TableCell style={{ width: 160 }} align="center">
    //             {data.usingService}
    //           </TableCell>

    //           {/* <TableCell style={{ width: 160 }} align="center">
    //             <button onClick={deleteData}>{"❌"}</button>
    //           </TableCell> */}
    //           <TableCell>
    //             <button value={data.name} onClick={toUsersDetail}>
    //               상세보기
    //             </button>
    //           </TableCell>
    //         </TableRow>
    //       ))}

    //       {emptyRows > 0 && (
    //         <TableRow style={{ height: 53 * emptyRows }}>
    //           <TableCell colSpan={6} />
    //         </TableRow>
    //       )}
    //     </TableBody>
    //     <TableFooter>
    //       <TableRow>
    //         <TablePagination
    //           rowsPerPageOptions={[
    //             5,
    //             10,
    //             25,
    //             50,
    //             100,
    //             200,
    //             { label: "All", value: -1 },
    //           ]}
    //           colSpan={3}
    //           count={users.length}
    //           rowsPerPage={rowsPerPage}
    //           page={page}
    //           SelectProps={{
    //             inputProps: {
    //               "aria-label": "rows per page",
    //             },
    //             native: true,
    //           }}
    //           onPageChange={handleChangePage}
    //           onRowsPerPageChange={handleChangeRowsPerPage}
    //           ActionsComponent={TablePaginationActions}
    //         />
    //       </TableRow>
    //     </TableFooter>
    //   </Table>
    // </TableContainer>

    <Paper sx={{ width: "100%", overflow: "hidden" }}>
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
                  style={{ minWidth: column.minWidth }}
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
                  style={{ color: "#6d6d6d", width: 100, textIndent: 30 }}
                >
                  {datael.role}
                </TableCell>
                <TableCell style={{ width: 150, textIndent: 30 }} align="left">
                  {datael.name}
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  {datael.team}
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  {datael.email}
                </TableCell>
                <TableCell style={{ width: 200, textIndent: 30 }} align="left">
                  {countCheck(datael.dashboard.toString())}
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  {countCheck(datael.block.toString())}
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  {countCheck(datael.trans.toString())}
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  {countCheck(datael.node.toString())}
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  {countCheck(datael.service.toString())}
                </TableCell>
                <TableCell style={{ width: 100, textIndent: 30 }} align="left">
                  {datael.usingService}
                </TableCell>
                <TableCell style={{ width: 120, textIndent: 30 }} align="left">
                  <Button
                    variant="outlined"
                    value={datael.name}
                    onClick={toUsersDetail}
                    style={{ fontSize: "1rem", marginRight: "20px" }}
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
      />
    </Paper>
  );
};

export default UserPage;
