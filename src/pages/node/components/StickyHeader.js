import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { nodeMockData } from "../utils/nodeMockData";
import { getUserInfo } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";
import swal from "sweetalert";
const columns = [
  {
    id: "serviceName",
    label: "서비스명",
    hight: 50,
    minWidth: 70,
    align: "center",
    lineHeight: 50,
  },
  { id: "status", label: "상태", minWidth: 70, align: "center" },
  {
    id: "nodeName",
    label: "노드명",
    minWidth: 70,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "type",
    label: "유형",
    minWidth: 70,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "serviceNameE",
    label: "서비스명",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "IP",
    label: "IP",
    minWidth: 140,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "newBlockNum",
    label: "최신블록번호",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "newBlockTime",
    label: "최신블록시간",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "TPS",
    label: "처리속도",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Latency",
    label: "지연율",
    minWidth: 70,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();
  const userValue = useRecoilValue(getUserInfo);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - nodeMockData.nodeList.length)
      : 0;

  const onClickNodeDetail = (nodeName) => {
    if (userValue.node) {
      swal("노드 세부페이지로 이동합니다");
      navigate(`/node/detail/${nodeName}`);
    } else {
      swal("", "권한이 없습니다. 관리자에게 문의하십시오.", "error");
    }
  };
  const tableHeadAuth = (column) => {
    if (column.label === "처리속도" || column.label === "지연율") {
      //관리자일경우
      if (userValue.node) {
        return (
          <TableCell
            sx={{ lineHeight: "2.5rem" }}
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        );
        //관리자 아닐 경우
      }
      //처리속도나 지연율 아닌경우 == 모든 상황에서 보여지는 테이블
    } else {
      return (
        <TableCell
          sx={{ lineHeight: "2.5rem" }}
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      );
    }
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) =>
                // <TableCell
                //   sx={{ lineHeight: "2.5rem" }}
                //   key={column.id}
                //   align={column.align}
                //   style={{ minWidth: column.minWidth }}
                // >
                //   {column.label}
                // </TableCell>
                tableHeadAuth(column)
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {nodeMockData.nodeList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((node, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={node.nodeName}>
                    <TableCell
                      align="center"
                      onClick={() => onClickNodeDetail(node.nodeName)}
                    >
                      {node.serviceName}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onClickNodeDetail(node.nodeName)}
                    >
                      {node.status}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onClickNodeDetail(node.nodeName)}
                    >
                      {node.nodeName}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onClickNodeDetail(node.nodeName)}
                    >
                      {node.type}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onClickNodeDetail(node.nodeName)}
                    >
                      {node.serviceNameE}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onClickNodeDetail(node.nodeName)}
                    >
                      {node.IP}
                    </TableCell>
                    <TableCell align="center">{node.newBlockNum}</TableCell>
                    <TableCell align="center">{node.newBlockTime}</TableCell>
                    {userValue.node && (
                      <TableCell align="center">{node.TPS}</TableCell>
                    )}
                    {userValue.node && (
                      <TableCell align="center">{node.Latency}</TableCell>
                    )}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 50 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={nodeMockData.nodeList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
