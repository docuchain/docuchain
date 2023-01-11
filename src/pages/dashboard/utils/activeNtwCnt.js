import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../../../apis/firebase";

const ActiveNtwCnt = () => {
  const ntwData = collection(dbService, "ntwData");
  const [activeNtw, setActiveNtw] = useState([]);

  useEffect(() => {
    async function getBlock() {
      const data = await getDocs(ntwData);

      setActiveNtw(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getBlock();
  }, []);
  return (
    <div
      className="ActiveNtwCnt boxShadow boxLayoutel4"
      style={{ height: "400px" }}
    >
      <h3>ActiveNtwCnt</h3>
      <h3>{activeNtw.length}</h3>
    </div>
  );
};

export default ActiveNtwCnt;
