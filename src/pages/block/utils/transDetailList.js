import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../style/TransDetailList.scss";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineDatabase } from "react-icons/ai";
import Modal from "./Modal";
import "../style/Modal.scss";
import { useParams } from "react-router-dom";

// 데이터 받아오면 목데이터 지울것 -----------

// -----------------------------------

export default function TransDetailList(props) {
  const { data, fetchdata } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const [transNum, setTransNum] = useState();
  const [time, setTime] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [transDataDetail, setTransDataDetail] = useState();
  useEffect(() => {
    fetchdata();
  }, []);

  //useParams
  const { id } = useParams();

  //state에 데이터 저장
  useEffect(() => {
    async function getTrans() {
      const result3 = data.filter((item) => item.blockNumber == parseInt(id));

      result3.forEach((item) => {
        setTransNum(item.transNumber);
        setTime(item.timeStamp);
        setTransHash(item.transHash);
        setTransSize(item.transSize);
        setTransDataDetail(item.transDataDetail);
      });
    }
    getTrans();
  });

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  //  ------------------------------
  return (
    <div className="TransDetailList">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>트랜잭션번호</TableCell>
              <TableCell align="right">타임스탬프</TableCell>
              <TableCell align="right">트랜잭션해시</TableCell>
              <TableCell align="right">트랜잭션크기</TableCell>
              <TableCell align="right">데이터</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            <TableRow
              className="tableRow"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {transNum}
              </TableCell>
              <TableCell align="right">{time}</TableCell>
              <TableCell
                className="selectableArea"
                // 모달 오픈
                onClick={openModal}
                align="right"
              >
                {transHash}
              </TableCell>
              <TableCell align="right">{transSize}</TableCell>
              <TableCell
                className="selectableArea"
                align="right"
                // 모달로 변경하고 라우터 없애도 될듯 -디테일 페이지를 라우터로 이동
                // onClick={toTransHashDetailData}

                // 모달 -
                onClick={openModal}
              >
                <AiOutlineDatabase />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* modal test -> 라우터로 이동하면 기존 설계도같이 배경에 데이터가 안보여서 모달로 하는 게 더 나을 것 같음 */}
      <div>
        {/* <button onClick={openModal}>모달팝업</button> */}
        <Modal
          open={modalOpen}
          close={closeModal}
          header="모달창임"
          data={data}
          fetchdata={fetchdata}
        >
          <h2>method : </h2>

          <div className="tranDetailDataArea"></div>
        </Modal>
      </div>
    </div>
  );
}

/*
export default function TransDetailList() {
  * 상세페이지 이동
  const navigate = useNavigate();
  const toTransHashDetailData = (e) => {
    navigate("/block/:id/data");
      console.log(e.target); //td tableCell에 접근이 가능함
      * 부모요소노드에 접근하기
      console.log(e.target.parentElement.id);  //일반적으로 해당 태그에 id값이 있다면 이런식으로 접근이 가능하나
    console.log(e.target.parentElement); //이렇게 되면 테이블의 row에 접근이 가능함 -> 내가 필요한건 table내에 row값
  };
  * 상세페이지 alert로 보여주기
  const toTransHashDetailData = () => {
    alert("트랜스 디테일 데이터 영역임");
  };
*/
