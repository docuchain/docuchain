import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

const TransDetail = () => {
  //   const { transRef } = props;
  const { id } = useParams();

  //   const [transNum, setTransNum] = useState();
  //   const [serviceName, setServiceName] = useState();
  //   const [time, setTime] = useState();
  //   const [transHash, setTransHash] = useState();
  //   const [transSize, setTransSize] = useState();
  //   const [blockNum, setBlockNum] = useState();

  const navigate = useNavigate();
  console.log(id);
  //   console.log(transRef);

  //   useEffect(() => {
  //     async function getTrans() {
  //       const data = await query(transRef, where("transNum", "==", id));
  //       const querySnapshot = await getDocs(data);

  //       querySnapshot.forEach((item) => {
  //         setTransNum(item.data().transNum);
  //         setServiceName(item.data().serviceName);
  //         setTime(item.data().time);
  //         setTransHash(item.data().transHash);
  //         setTransSize(item.data().transSize);
  //         setBlockNum(item.data().blockNum);
  //         console.log(item.transNum, " : ", item.data());
  //       });
  //     }
  //     getTrans();
  //   }, []);

  return (
    <div>
      <h1>트랜잭션</h1>
      <h3>| 상세정보</h3>
      <button>목록으로</button>
      <div>서비스명 </div>
      <div>타임스탬프 </div>
      <div>트랜잭션해시 </div>
      <div>트랜잭션크기 </div>
      <div>블록번호 </div>
    </div>
  );
};

export default TransDetail;
