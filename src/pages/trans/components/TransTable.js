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
import { dbService } from "../../../apis/firebase";
import { getDocs, collection } from "firebase/firestore";
// 상세페이지 이동
import { useNavigate, useParams } from "react-router-dom";

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

// TransTable
const TransTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // trans 데이터 담기
  const [trans, setTrans] = useState([]);

  // 데이터 불러오기
  const transData = collection(dbService, "trans");

  useEffect(() => {
    async function getTrans() {
      const data = await getDocs(transData);
      console.log(data);
      setTrans(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getTrans();
  }, []);

  // 상세페이지 이동 위한 navigate
  const [transId, setTransId] = useState("");
  const navigate = useNavigate();

  const toTransDetail = (e) => {
    console.log(e.target.value);
    setTransId(e.target.value);
  };

  useEffect(() => {
    navigate(`/trans/${transId}`);
  }, [transId]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - trans.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} style={{ width: "1200px" }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>서비스명</TableCell>
            <TableCell align="right">트랜잭션번호</TableCell>
            <TableCell align="right">타임스탬프</TableCell>
            <TableCell align="right">트랜잭션해시</TableCell>
            <TableCell align="right">트랜잭션크기</TableCell>
            <TableCell align="right">블록번호</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? trans.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : trans
          ).map((data, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {data.serviceName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <button value={data.transNum} onClick={toTransDetail}>
                  {data.transNum}
                </button>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {data.time}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {data.transHash}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {data.transSize}
                <button
                  className="transDetailBtn"
                  value={data.transNum}
                  onClick={toTransDetail}
                >
                  트랜잭션상세
                </button>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {data.blockNum}
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
              count={trans.length}
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

export default TransTable;
