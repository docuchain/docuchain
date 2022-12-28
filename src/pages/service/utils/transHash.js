import React from "react";
import ServiceDetail from "../ServiceDetail";

const transHash = (props) => {
  return (
    <div>
      <h5>트랜잭션해시 : {props.transHash}</h5>
    </div>
  );
};

export default transHash;
