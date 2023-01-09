import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function toServiceMainBtn() {
  return (
    <div className="serviceDetail--Btn">
      <Stack spacing={2} direction="row">
        <Link to="/service">
          <Button variant="contained">목록으로</Button>
        </Link>
      </Stack>
    </div>
  );
}
