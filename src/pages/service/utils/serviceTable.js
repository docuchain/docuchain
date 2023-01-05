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

const ConditionalLink = ({ children, condition, ...props }) => {
  return !!condition && props.to ? (
    <Link {...props}>{children}</Link>
  ) : (
    <>{children}</>
  );
};

const columns = [
  {
    id: "serviceName",
    label: "서비스명",
    minWidth: 10,
    link: "service/serviceDetail",
  },
  {
    id: "date",
    label: "타임스탬프",
    minWidth: 10,
    link: "service/serviceDetail",
  },
  {
    id: "ApiKinds",
    label: "API 종류",
    minWidth: 0,
    link: "service/serviceDetail",
  },
  { id: "NodeName", label: "노드명", minWidth: 10, link: "node/nodeDetail" },
  {
    id: "TransNum",
    label: "트랜잭션번호",
    minWidth: 10,
    link: "trans/transDetail",
  },
  { id: "BlockNum", label: "블록번호", minWidth: 0, link: "block/blockDetail" },
  { id: "state", label: "상태", minWidth: 0 },
];

export default function StickyHeadTable() {
  const [data, setData] = React.useState([]);
  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/Service.json"
      );
      const result = await res.json();
      setData([...result]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchdata();
  }, []);

  const [page, setPage] = React.useState(0);
  //Rows per page 단위
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  {/* 테이블 메인 타이틀 */}
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      //메인 테이블
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {/* condition (조건문) 일치하는 것만 링크 */}
                          <ConditionalLink
                            to={`/${column.link}`}
                            condition={column.link !== undefined}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </ConditionalLink>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // 카운트 개수
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
