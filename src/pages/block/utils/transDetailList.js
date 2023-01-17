import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { AiOutlineDatabase } from "react-icons/ai";
import Modal from "./Modal";
import "../style/Modal.scss";
import { useParams } from "react-router-dom";
import { getTheme, getUserInfo } from "../../../recoil/selector";
import { useRecoilValue } from "recoil";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function TransDetailList(props) {
  const isDark = useRecoilValue(getTheme);
  const { data, fetchdata } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const [transNum, setTransNum] = useState();
  const [time, setTime] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [transDataDetail, setTransDataDetail] = useState();
  const userValue = useRecoilValue(getUserInfo);
  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);

  const { id } = useParams();

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
    if (userValue.trans) {
      setModalOpen(true);
    } else {
      swal("권한이 없습니다.", "관리자에게 문의하세요", "error");
    }
  };
  const naviTransDetail = () => {
    if (userValue.trans) {
      navigate(`/trans/${transNum}`);
    } else {
      swal("권한이 없습니다.", "관리자에게 문의하세요", "error");
    }
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div
      className={
        isDark ? "boxLayout1 boxShadowBlack mt20" : "boxLayout1 boxShadow mt20"
      }
    >
      <TableContainer className="detailTableInner">
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                트랜잭션번호
              </TableCell>
              <TableCell
                align="left"
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                타임스탬프
              </TableCell>
              <TableCell
                align="left"
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                트랜잭션해시
              </TableCell>
              <TableCell
                align="left"
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                트랜잭션크기
              </TableCell>
              {userValue.trans && (
                <TableCell
                  align="left"
                  style={isDark ? { color: "white" } : { color: "#323846" }}
                >
                  데이터
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              className="tableRow"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {transNum}
              </TableCell>
              <TableCell
                align="left"
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {time}
              </TableCell>
              <TableCell
                className="selectableArea"
                onClick={naviTransDetail}
                align="left"
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                <Button
                  style={
                    isDark
                      ? { padding: "4px", color: "white" }
                      : { padding: "4px", color: "#323846" }
                  }
                >
                  {transHash}&nbsp;
                  <ArrowOutwardIcon style={{ fontSize: "1.3rem" }} />
                </Button>
              </TableCell>
              <TableCell
                align="left"
                style={isDark ? { color: "white" } : { color: "#323846" }}
              >
                {transSize}
              </TableCell>
              {userValue.trans && (
                <TableCell
                  className="selectableArea"
                  align="left"
                  onClick={openModal}
                  style={isDark ? { color: "white" } : { color: "#323846" }}
                >
                  <Button
                    style={
                      isDark
                        ? { padding: "4px", color: "white", fontWeight: 600 }
                        : { padding: "4px", color: "#323846", fontWeight: 600 }
                    }
                  >
                    상세보기&nbsp;
                    <AiOutlineDatabase style={{ fontSize: "1rem" }} />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Modal
          style={{ textAlign: "center" }}
          open={modalOpen}
          close={closeModal}
          header="트랜잭션 데이터 상세"
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
