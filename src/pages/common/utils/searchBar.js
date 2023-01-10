import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import block from "../../block/Block";
import { authService } from "../../../apis/firebase";
import { getUserInfo } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";
import swal from "sweetalert";
const SearchBar = () => {
  const { handleSubmit } = useForm();
  const [input, setInput] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [isTrans, setIsTrans] = useState(false); // trans 권한 가진 사용자인지 판별
  const navigate = useNavigate();
  const nowUser = authService.currentUser;
  const userValue = useRecoilValue(getUserInfo);
  useEffect(() => {
    fetchData();
  }, [input]);
  const fetchData = async () => {
    try {
      const blockRes = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
      );

      const blockResJson = await blockRes.json();

      setData([...blockResJson]);
      console.log(data);

      data.filter((ele) => {
        //블록해시 검색시
        if (ele.blockHash === input) {
          setUrl(`/block/${ele.blockNumber}`);
          navigate(url);
          //블록번호 검색시
        } else if (ele.blockNumber === Number(input)) {
          setUrl(`/block/${ele.blockNumber}`);
          navigate(url);
          //트랜잭션 해시일때
        } else if (ele.transHash === input) {
          //트랜잭션 권한 있을때
          if (userValue.trans) {
            setUrl(`/trans/${ele.transHash}`);
            navigate(url);
            //트랜잭션권한없을때
          } else {
            setIsTrans((isTrans) => !isTrans);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const transAlert = async () => {
    swal({
      title: "권한이 없습니다. 관리자에게 요청하십시오",
      icon: "error",
    });
  };

  const searchResult = async () => {
    await fetchData();
    if (isTrans) {
      transAlert();
    }
    setInput("");
  };
  return (
    <div style={{ marginLeft: "auto" }}>
      <form>
        <label>
          <input
            type={"text"}
            placeholder="블록번호/블록해시/트랜잭션해시"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </label>
        <Button type="submit" className="searchIconBox">
          <SearchIcon className="icon1" />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
