import * as React from "react";
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

function createData(
  id,
  name,
  blcokNumber,
  timeStamp,
  blockHash,
  blockSize,
  TransactionNum
) {
  return {
    id,
    name,
    blcokNumber,
    timeStamp,
    blockHash,
    blockSize,
    TransactionNum,
  };
}

const rows = [
  createData(
    1,
    "A서비스",
    "2021-05-03 09:40:38",
    "인증서 등록",
    "Node1",
    326849,
    326849,
    "성공"
  ),
  createData(2, "B서비스", 452, 25.0, 7.0, "ox5bf3247", 3),
  createData(3, "C서비스", 262, 16.0, 7.0, "ox5bf3247", 5),
  createData(4, "D서비스", 159, 6.0, 7.0, "ox5bf3247", 3),
  createData(5, "E서비스", 356, 16.0, 7.0, "ox5bf3247", 5),
  createData(6, "A서비스", 408, 3.2, 7.0, "ox5bf3247", 3),
  createData(7, "A서비스", 237, 9.0, 7.0, "ox5bf3247", 5),
  createData(8, "B서비스", 375, 0.0, 7.0, "ox5bf3247", 5),
  createData(9, "C서비스", 518, 26.0, 7.0, "ox5bf3247", 2),
  createData(10, "E서비스", 392, 0.2, 7.0, "ox5bf3247", 2),
  createData(11, "A서비스", 305, 3.7, 7.0, "ox5bf3247", 5),
  createData(12, "B서비스", 452, 25.0, 7.0, "ox5bf3247", 3),
  createData(13, "C서비스", 262, 16.0, 7.0, "ox5bf3247", 5),
  createData(14, "D서비스", 159, 6.0, 7.0, "ox5bf3247", 3),
  createData(15, "E서비스", 356, 16.0, 7.0, "ox5bf3247", 5),
  createData(16, "A서비스", 408, 3.2, 7.0, "ox5bf3247", 3),
  createData(17, "A서비스", 237, 9.0, 7.0, "ox5bf3247", 5),
  createData(18, "B서비스", 375, 0.0, 7.0, "ox5bf3247", 5),
  createData(19, "C서비스", 518, 26.0, 7.0, "ox5bf3247", 2),
  createData(20, "E서비스", 392, 0.2, 7.0, "ox5bf3247", 2),
  createData(21, "A서비스", 305, 3.7, 7.0, "ox5bf3247", 5),
  createData(22, "B서비스", 452, 25.0, 7.0, "ox5bf3247", 3),
  createData(23, "C서비스", 262, 16.0, 7.0, "ox5bf3247", 5),
  createData(24, "D서비스", 159, 6.0, 7.0, "ox5bf3247", 3),
  createData(25, "E서비스", 356, 16.0, 7.0, "ox5bf3247", 5),
  createData(26, "A서비스", 408, 3.2, 7.0, "ox5bf3247", 3),
  createData(27, "A서비스", 237, 9.0, 7.0, "ox5bf3247", 5),
  createData(28, "B서비스", 375, 0.0, 7.0, "ox5bf3247", 5),
  createData(29, "C서비스", 518, 26.0, 7.0, "ox5bf3247", 2),
  createData(30, "E서비스", 392, 0.2, 7.0, "ox5bf3247", 2),
  createData(31, "A서비스", 305, 3.7, 7.0, "ox5bf3247", 5),
  createData(32, "B서비스", 452, 25.0, 7.0, "ox5bf3247", 3),
  createData(33, "C서비스", 262, 16.0, 7.0, "ox5bf3247", 5),
  createData(34, "D서비스", 159, 6.0, 7.0, "ox5bf3247", 3),
  createData(35, "E서비스", 356, 16.0, 7.0, "ox5bf3247", 5),
  createData(36, "A서비스", 408, 3.2, 7.0, "ox5bf3247", 3),
  createData(37, "A서비스", 237, 9.0, 7.0, "ox5bf3247", 5),
  createData(38, "B서비스", 375, 0.0, 7.0, "ox5bf3247", 5),
  createData(39, "C서비스", 518, 26.0, 7.0, "ox5bf3247", 2),
  createData(40, "E서비스", 392, 0.2, 7.0, "ox5bf3247", 2),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} style={{ width: 1200 }}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        {/* 헤드 */}
        <TableHead>
          <TableRow>
            <TableCell align="left">서비스명</TableCell>
            <TableCell align="left">타임스탬프</TableCell>
            <TableCell align="left">API 종류</TableCell>
            <TableCell align="left">노드명</TableCell>
            <TableCell align="left">트랜잭션번호</TableCell>
            <TableCell align="left">블록번호</TableCell>
            <TableCell align="left">상태</TableCell>
          </TableRow>
        </TableHead>
        {/* 바디 */}
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.blcokNumber}</TableCell>
              <TableCell align="center">{row.timeStamp}</TableCell>
              <TableCell align="center">{row.blockHash}</TableCell>
              <TableCell align="center">{row.blockSize}</TableCell>
              <TableCell align="center">{row.TransactionNum}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        {/* 푸터 */}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={6}
              count={rows.length}
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
}
