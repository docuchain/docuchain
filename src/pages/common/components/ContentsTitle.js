import React, { useEffect, useState } from "react";

export default function ContentsTitle() {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-72799-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
      );
      const result = await res.json();
      setData([...result]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div className="ContentsTitle">
        <h4>전체 블록 {data.length}개</h4>
      </div>
    </>
  );
}
