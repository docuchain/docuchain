import { useEffect, useState } from "react";

export const nodeData = {
  nodeHeader: [
    {
      id: "serviceName",
      label: "서비스명",
      hight: 50,
      minWidth: 60,
      align: "center",
      lineHeight: 50,
    },
    { id: "status", label: "상태", minWidth: 60, align: "center" },
    {
      id: "nodeName",
      label: "노드명",
      minWidth: 60,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "type",
      label: "유형",
      minWidth: 60,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "serviceNameE",
      label: "서비스명",
      minWidth: 60,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "IP",
      label: "IP",
      minWidth: 135,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "newBlockNum",
      label: "최신블록번호",
      minWidth: 70,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "newBlockTime",
      label: "최신블록시간",
      minWidth: 70,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "TPS",
      label: "처리속도",
      minWidth:60,
      align: "center",
      format: (value) => value.toFixed(2),
    },
    {
      id: "Latency",
      label: "지연율",
      minWidth: 60,
      align: "center",
      format: (value) => value.toFixed(2),
    },
  ],
};

export const nodeMockData = {
  nodeList: [
    {
      serviceName: "A서비스",
      status: "활성화",
      nodeName: "Node1",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://www.xx1.",
      newBlockNum: "326849",
      newBlockTime: "2021-05-03",
      TPS: "250",
      Latency: "1.7",
    },
    {
      serviceName: "A서비스",
      status: "활성화",
      nodeName: "Node2",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://www.xx2",
      newBlockNum: "326850",
      newBlockTime: "2021-05-03",
      TPS: "350",
      Latency: "1.7",
    },
    {
      serviceName: "A서비스",
      status: "활성화",
      nodeName: "Node3",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326851",
      newBlockTime: "2021-05-03",
      TPS: "380",
      Latency: "1.9",
    },
    {
      serviceName: "A서비스",
      status: "활성화",
      nodeName: "Node4",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326852",
      newBlockTime: "2021-05-03",
      TPS: "260",
      Latency: "1.7",
    },
    {
      serviceName: "B서비스",
      status: "활성화",
      nodeName: "Node5",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326853",
      newBlockTime: "2021-05-03",
      TPS: "110",
      Latency: "4.2",
    },
    {
      serviceName: "B서비스",
      status: "활성화",
      nodeName: "Node6",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326854",
      newBlockTime: "2021-05-03",
      TPS: "250",
      Latency: "1.7",
    },
    {
      serviceName: "B서비스",
      status: "활성화",
      nodeName: "Node7",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326855",
      newBlockTime: "2021-05-03",
      TPS: "350",
      Latency: "1.7",
    },
    {
      serviceName: "C서비스",
      status: "활성화",
      nodeName: "Node8",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326856",
      newBlockTime: "2021-05-03",
      TPS: "380",
      Latency: "1.9",
    },
    {
      serviceName: "C서비스",
      status: "활성화",
      nodeName: "Node9",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326857",
      newBlockTime: "2021-05-03",
      TPS: "260",
      Latency: "1.7",
    },
    {
      serviceName: "C서비스",
      status: "활성화",
      nodeName: "Node10",
      type: "Peer",
      serviceNameE: "Doc",
      IP: "http://xxx.",
      newBlockNum: "326858",
      newBlockTime: "2021-05-03",
      TPS: "110",
      Latency: "4.2",
    },
  ],
};

export const NodeFirebase = () => {
  const [data, setData] = useState([]);

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

  return data;
};

export default NodeFirebase;
