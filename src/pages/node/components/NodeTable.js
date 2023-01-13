import React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import StickyHeadTable from "./StickyHeader";
import "../NodeStyle.scss";

const NodeTable = () => {
  return (
    <Box>
      <Paper>
        <TableContainer>
          <Table className="boxLayout1">
            <StickyHeadTable />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default NodeTable;
