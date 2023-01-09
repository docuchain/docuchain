import React from "react";
import { TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";

export default function TableRowCompo({ datael, idx }) {
  console.log(datael, idx);
  return (
    <div>
      <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
        <TableCell component="th" scope="row">
          {datael.serviceName}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {datael.blockNumber}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {datael.timeStamp}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {datael.blockHash}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {datael.blockSize}
        </TableCell>
        <TableCell style={{ width: 160 }} align="left">
          {`0`}
        </TableCell>
      </TableRow>
    </div>
  );
}
