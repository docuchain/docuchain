// import React from "react";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// export default function CloseModalBtn() {
//   return (
//     <>
//       <button>
//         <AiOutlineCloseCircle />
//       </button>
//     </>
//   );
// }

import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

export default function CloseModalBtn() {
  return (
    <>
      <Stack direction="row" spacing={3}>
        <IconButton aria-label="fingerprint" color="success">
          <AiOutlineCloseCircle />
        </IconButton>
      </Stack>
    </>
  );
}
