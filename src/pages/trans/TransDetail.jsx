import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  collection,
} from "firebase/firestore";
import { dbService } from "../../apis/firebase";

const TransDetail = () => {
  //   const { transRef } = props;

  // trans 데이터 담기
  const [trans, setTrans] = useState([]);
  // 데이터 불러오기
  const transRef = collection(dbService, "trans");

  useEffect(() => {
    async function getTransRef() {
      const data = await getDocs(transRef);

      setTrans(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getTransRef();
  }, []);
  const { id } = useParams();

  const [transNum, setTransNum] = useState();
  const [serviceName, setServiceName] = useState();
  const [time, setTime] = useState();
  const [transHash, setTransHash] = useState();
  const [transSize, setTransSize] = useState();
  const [blockNum, setBlockNum] = useState();

  // 이전 페이지 이동
  const navigate = useNavigate();
  const toTrans = () => {
    navigate(`/trans`);
  };

  useEffect(() => {
    async function getTrans() {
      const data = await query(transRef, where("transNum", "==", parseInt(id)));
      const querySnapshot = await getDocs(data);

      querySnapshot.forEach((item) => {
        setTransNum(item.data().transNum);
        setServiceName(item.data().serviceName);
        setTime(item.data().time);
        setTransHash(item.data().transHash);
        setTransSize(item.data().transSize);
        setBlockNum(item.data().blockNum);
      });
    }
    getTrans();
  }, []);

  //test
  const test = [
    { time: "2022-01-03 10:10:23" },
    { time: "2022-01-03 10:10:53" },
    { time: "2022-01-03 9:11:23" },
    { time: "2022-01-03 11:10:23" },
    { time: "2022-01-03 10:15:23" },
  ];

  let count = 0;
  for (let i = 0; i < test.length; i++) {
    if (test[i].time.includes(" 10:") == true) {
      count++;
    }
  }
  console.log(count);
  return (
    <div>
      <h1>트랜잭션</h1>
      <h3>| 상세정보</h3>
      <button onClick={toTrans}>목록으로</button>
      <div>서비스명 {serviceName}</div>
      <div>타임스탬프 {time}</div>
      <div>트랜잭션해시 {transHash}</div>
      <div>트랜잭션크기 {transSize}</div>
      <div>블록번호 {blockNum}</div>
    </div>
  );
};

export default TransDetail;
