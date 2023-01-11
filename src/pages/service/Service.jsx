import React, { useEffect, useState } from "react";
import ServiceChart from "./component/ServiceChart";
import ServiceTable from "./utils/serviceTable";
import "./CSS/Service.scss";

const Service = () => {
  //데이터 받아오기
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
    <div className="serviceMain_Center">
      {/* <h1 className="serviceMain_Name">서비스</h1>
      <p>전체 발급 0.000건</p> */}
      <div className="serviceChart_Center">
        <ServiceChart data={data} fetchdata={fetchdata} />
        <div className="serviceTable">
          <ServiceTable data={data} fetchdata={fetchdata} />
        </div>
      </div>
    </div>
  );
};

export default Service;

// [
//   '{{repeat(1, 300)}}',
//   {
//     serviceName: function (tags) {
//       var fruits = ['A서비스', 'B서비스', 'C서비스','D서비스','E서비스'];
//       return fruits[tags.integer(0, fruits.length - 1)];
//     },
//     date: '{{date(new Date(2022, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss Z")}}',
//     ApiKinds: function (tags) {
//       var fruits = ['인증서 등록', '디지털 콘텐츠 검증', '디지털 콘텐츠 인증','IPFS 업로드','DID DOCUMENT 등록'];
//       return fruits[tags.integer(0, fruits.length - 1)];
//     },
//     TransNum: '{{integer(300000, 1000000)}}',
//     BlockNum: '{{integer(300000, 1000000)}}',
//     state: '{{random("성공", "실패")}}'
//   }
// ]
