import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../../../apis/firebase";

const TotalServiceCnt = () => {
  const serviceData = collection(dbService, "serviceData");
  const [totalService, setTotalService] = useState([]);

  useEffect(() => {
    async function getBlock() {
      const data = await getDocs(serviceData);

      setTotalService(
        data.docs.map((item) => ({
          ...item.data(),
        }))
      );
    }

    getBlock();
  }, []);
  return (
    <div
      className="TotalServiceCnt boxShadow4"
      style={{ width: "300px", height: "400px" }}
    >
      <h3>TotalServiceCnt</h3>
      <h3>{totalService.length}</h3>
    </div>
  );
};

export default TotalServiceCnt;
