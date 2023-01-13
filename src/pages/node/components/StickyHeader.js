import React from "react";

import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { nodeData } from "../utils/nodeMockData";
import { getUserInfo } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";

export default function StickyHeadTable() {
  const userValue = useRecoilValue(getUserInfo);

  const tableHeadAuth = (column) => {
    //관리자만 보이는 테이블 영역
    if (column.label === "처리속도" || column.label === "지연율") {
      //관리자일경우
      if (userValue.node) {
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

  return (
    <TableHead>
      <TableRow>
        {nodeData.nodeHeader.map((column) => tableHeadAuth(column))}
      </TableRow>
    </TableHead>
  );
}
