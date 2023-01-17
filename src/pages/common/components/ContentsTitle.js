import React, { useEffect, useState } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ContentsTitle() {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const { id } = useParams();
  let location = useLocation();
  let blockMatch = useMatch("/block/:id");
  let transMatch = useMatch("/trans/:id");
  let nodeMatch = useMatch("/node/:id");
  let serviceMatch = useMatch("/service/:id");
  const fetchdata = async () => {
    try {
      const res = await fetch(
        "https://docuchain-a7ae3-default-rtdb.asia-southeast1.firebasedatabase.app/docu.json"
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

  useEffect(() => {
    nameChange();
  });

  const nameChange = () => {
    if (location.pathname === "/block") {
      setName("블록");
    } else if (location.pathname === "/trans") {
      setName("트랜잭션");
    } else if (location.pathname === "/node") {
      setName("노드");
    } else if (location.pathname === "/service") {
      setName("서비스");
    } else if (location.pathname === "/") {
      setName("");
    }
  };

  return (
    <>
      <div className="ContentsTitle">
        {transMatch || blockMatch || nodeMatch || serviceMatch ? (
          <h4> | 상세정보</h4>
        ) : location.pathname === "/" ||
          location.pathname === "/myinfo" ||
          location.pathname === "/usermanaging/" ||
          location.pathname === "/usermanaging/adduser" ? (
          <div></div>
        ) : (
          <h4>
            | 전체 {name} {data.length}개
          </h4>
        )}
      </div>
    </>
  );
}
