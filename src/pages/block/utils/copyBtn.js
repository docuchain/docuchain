import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";
// AiOutlineCopy

export default function copyBtn() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        {/* copy상태에 따라 변경되게  */}
        {/* default */}
        <Button variant="outlined">
          Copy
          <AiOutlineCopy />
        </Button>
        {/* <Button variant="contained">
          Copied
          <AiOutlineCopy />
        </Button> */}
      </Stack>
    </div>
  );
}
