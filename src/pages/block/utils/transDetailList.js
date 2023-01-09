import React from "react";
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

// 데이터 받아오면 목데이터 지울것 -----------
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
// -----------------------------------

export default function TransDetailList() {
  const [modalOpen, setModalOpen] = useState(false);

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
            {rows.map((row) => (
              <TableRow
                className="tableRow"
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell
                  className="selectableArea"
                  // 모달 오픈
                  onClick={openModal}
                  align="right"
                >
                  {row.fat}
                </TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* modal test -> 라우터로 이동하면 기존 설계도같이 배경에 데이터가 안보여서 모달로 하는 게 더 나을 것 같음 */}
      <div>
        {/* <button onClick={openModal}>모달팝업</button> */}
        <Modal open={modalOpen} close={closeModal} header="모달창임">
          <h2>트랜잭션 데이터 상세</h2>
          <div className="tranDetailDataArea">
            준비중입니다.(이곳에 데이터가 뿌려질 예정)
          </div>
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
