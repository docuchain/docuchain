import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { AiOutlineCopy } from "react-icons/ai";

export default function copyBtn({ copy }) {
  console.log(copy);
  return (
    <Stack spacing={2} direction="row">
      {copy === true ? (
        <Button variant="outlined">
          Copy
          <AiOutlineCopy />
        </Button>
      ) : (
        <Button variant="contained">
          Copied
          <AiOutlineCopy />
        </Button>
      )}
    </Stack>
  );
}
