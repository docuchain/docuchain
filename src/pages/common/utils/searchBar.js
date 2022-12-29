import React from "react";
import Button from "../components/Button";

const SearchBar = () => {
  return (
    <div style={{ marginLeft: "auto" }}>
      <form>
        <label>
          <input
            type={"text"}
            placeholder="블록번호/블록해서/트랜잭션해시"
          ></input>
        </label>
        <Button type="button">검색돋보기버튼</Button>
      </form>
    </div>
  );
};

export default SearchBar;
