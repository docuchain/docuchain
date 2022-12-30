import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../../../apis/firebase";

const TotalBlockCnt = () => {
  const blockData = collection(dbService, "blockData");
  const [totalBlock, setTotalBlock] = useState([]);

  useEffect(() => {
    async function getBlock() {
      const data = await getDocs(blockData);

      setTotalBlock(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getBlock();
  }, []);
  return (
    <div className="TotalBlockCnt" style={{ width: "300px", height: "400px" }}>
      <h3>TotalBlockCnt</h3>
      <h3>{totalBlock.length}</h3>
    </div>
  );
};

export default TotalBlockCnt;
