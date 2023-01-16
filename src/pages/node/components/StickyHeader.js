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
    if (column.label === "처리속도" || column.label === "지연율") {
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
      }
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
