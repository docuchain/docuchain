import React from "react";
import LoginPage from "../../myinfo/components/LoginPage";

const searchBar = () => {
  return (
    <form>
      <label>
        <input
          type={"text"}
          placeholder="블록번호/블록해서/트랜잭션해시"
        ></input>
      </label>
      <button type="button">검색돋보기버튼</button>
      <button type="button">사용자버튼자리</button>
    </form>
  );
};

export default searchBar;
