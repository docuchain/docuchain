import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import block from "../../block/Block";
const SearchBar = () => {
  const { handleSubmit } = useForm();
  const [input, setInput] = useState("");
  const [arrBlock, setArrBlcok] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
      const blockRes = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/block.json"
      );

      const blockResJson = await blockRes.json();

      console.log(blockResJson.service);

      blockResJson.service.forEach((ele) => {
        if (ele.blockHash === input || ele.blockNumber === input) {
          navigate(`/block/${ele.blockNumber}`);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchResult = () => {
    console.log(input);
    navigate(`/trans/${input}`);
    setInput("");
  };
  return (
    <div style={{ marginLeft: "auto" }}>
      <form onSubmit={handleSubmit(searchResult)}>
        <label>
          <input
            type={"text"}
            placeholder="블록번호/블록해시/트랜잭션해시"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </label>
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
