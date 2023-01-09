import React from "react";
import ServiceChart from "./component/ServiceChart";
import ServiceTable from "./utils/serviceTable";
import "./CSS/Service.scss";

const service = () => {
  return (
    <div className="serviceMain_Center">
      {/* <h1 className="serviceMain_Name">서비스</h1>
      <p>전체 발급 0.000건</p> */}
      <div className="serviceChart_Center">
        <ServiceChart />
        <div className="serviceTable">
          <ServiceTable />
        </div>
      </div>
    </div>
  );
};

export default service;

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
