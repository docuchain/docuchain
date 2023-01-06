import React from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import StickyHeadTable from "./StickyHeader";
import "../NodeStyle.scss";

const NodeTable = () => {
  return (
    <Box sx={{ width: "90%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <StickyHeadTable />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default NodeTable;
