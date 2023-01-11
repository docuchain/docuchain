import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const toNodeMainBtn = () => {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/node">
        <Button variant="contained">목록으로</Button>
      </Link>
    </Stack>
  );
};

export default toNodeMainBtn;