import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { nodeData, NodeFirebase } from "../utils/nodeMockData";
import { getUserInfo } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";
import swal from "sweetalert";

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  const userValue = useRecoilValue(getUserInfo);

  const [nodeTableDataList, setNodeTableDataList] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - nodeTableDataList.length)
      : 0;

  const onClickNodeDetail = (nodeName) => {
    if (userValue.node) {
      swal("노드 세부페이지로 이동합니다");
      navigate(`/node/${nodeName}`);
    } else {
      swal("권한이 없습니다. 관리자에게 요청하십시오.", "", "error");
    }
  };

  const onClickBlockDetail = (blockNumber) => {
    alert("블록 세부페이지로 이동합니다");
    navigate(`/block/${blockNumber}`);
  };

  const tableHeadAuth = (column) => {
    //관리자만 보이는 테이블 영역
    if (column.label === "처리속도" || column.label === "지연율") {
      //관리자일경우
      if (userValue.node) {
        return (
          <TableCell
            sx={{ lineHeight: "2.5rem", fontSize: "0.9rem", fontWeight: "600"}}
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        );
        //관리자 아닐 경우 해당 부분 출력x
      }
      //처리속도나 지연율 아닌경우 == 모든 상황에서 보여지는 테이블
    } else {
      return (
        <TableCell
          sx={{ lineHeight: "2.5rem", fontSize: "0.9rem", fontWeight: "600" }}
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      );
    }
  };

  const nodeTableData = NodeFirebase();
  // console.log(nodeTableData[0]);

  console.log("sss: ", nodeTableData.length);

  useEffect(() => {
    if (nodeTableData.length > 0) {
      setNodeTableDataList(nodeTableData);
    } else {
      console.log("nodeTableData length : 0");
    }
  }, [nodeTableData]);

  console.log(nodeTableDataList);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {nodeData.nodeHeader.map((column) => tableHeadAuth(column))}
            </TableRow>
          </TableHead>

          <TableBody sx={{ lineHeight: "2.5rem", fontSize: "0.9rem"}}>
            {nodeTableDataList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((node) => {
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
                    <TableCell
                      align="center"
                      onClick={() => onClickBlockDetail(node.blockNumber)}
                    >
                      {node.newBlockNum}
                    </TableCell>
                    <TableCell
                      align="center"
                      onClick={() => onClickBlockDetail(node.blockNumber)}
                    >
                      {node.newBlockTime}
                    </TableCell>
                    {userValue.node && (
                      <TableCell align="center">{node.TPS}</TableCell>
                    )}
                    {userValue.node && (
                      <TableCell align="center">{node.latency}</TableCell>
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
        count={nodeTableDataList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
