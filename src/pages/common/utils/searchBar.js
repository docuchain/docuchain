import React from "react";
import Button from "../components/Button";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <div style={{ marginLeft: "auto" }}>
      <form>
        <label>
          <input
            type={"text"}
            placeholder="블록번호/블록해시/트랜잭션해시"
          ></input>
        </label>
        <Button type="button">
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
