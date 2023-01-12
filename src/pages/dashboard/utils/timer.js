import React, { useState } from "react";

const Timer = () => {
  //현재시간 타이머
  const [timer, setTimer] = useState("0000-00-00 00:00:00");

  const currentTimer = () => {
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth() + 1).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${years}-${months}-${days} ${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();
  return <div className="DashboardTimeBox">{timer}</div>;
};

export default Timer;
