import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../../../apis/firebase";

const TotalTransCnt = () => {
  const transData = collection(dbService, "transData");
  const [totalTrans, setTotalTrans] = useState([]);

  useEffect(() => {
    async function getBlock() {
      const data = await getDocs(transData);

      setTotalTrans(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getBlock();
  }, []);
  return (
    <div
      className="TotalTransCnt boxShadow boxLayoutel4"
      style={{ height: "400px" }}
    >
      <h3>TotalTransCnt</h3>
      <h3>{totalTrans.length}</h3>
    </div>
  );
};

export default TotalTransCnt;
