import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import { deleteDoc, doc, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const UserPage = (props) => {
  const { userData } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [name, setName] = useState();
  const navigate = useNavigate();
  // users 데이터 담기
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const data = await getDocs(userData);
      console.log(data);
      setUsers(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );

      data.forEach((item) => {
        setName(item.id);
      });
    }

    getUsers();
  }, []);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //checkbox 함수
  const countCheck = (checked) => {
    if (checked == "true") {
      return "O";
    } else {
      return "X";
    }
  };

  //삭제
  async function deleteData() {
    if (window.confirm("정말 삭제합니까?")) {
      await deleteDoc(doc(userData, name));
      alert("삭제되었습니다.");
      navigate(`/usermanaging`);
    } else {
      alert("취소합니다.");
    }
  }

  return (
    <TableContainer component={Paper} style={{ width: "1200px" }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="center">유형</TableCell>
            <TableCell align="center">이름</TableCell>
            <TableCell align="center">소속</TableCell>
            <TableCell align="center">이메일(아이디)</TableCell>
            <TableCell align="center">대시보드</TableCell>
            <TableCell align="center">블록</TableCell>
            <TableCell align="center">트랜잭션</TableCell>
            <TableCell align="center">노드</TableCell>
            <TableCell align="center">서비스</TableCell>
            <TableCell align="center">이용중인 서비스</TableCell>
            <TableCell align="center">삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : users
          ).map((data, idx) => (
            <TableRow key={idx}>
              <TableCell
                component="th"
                scope="row"
                style={{ width: 160 }}
                align="center"
              >
                {data.role}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {data.name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {data.team}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {data.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {countCheck(data.dashboard.toString())}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {countCheck(data.block.toString())}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {countCheck(data.trans.toString())}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {countCheck(data.node.toString())}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {countCheck(data.service.toString())}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {data.usingService}
              </TableCell>

              <TableCell style={{ width: 160 }} align="center">
                <button onClick={deleteData}>{"❌"}</button>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                5,
                10,
                25,
                50,
                100,
                200,
                { label: "All", value: -1 },
              ]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default UserPage;
