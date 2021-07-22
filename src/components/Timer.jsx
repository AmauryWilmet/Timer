import React, { useState } from "react";

function Timer() {
  let timeNow = new Date().toLocaleTimeString("fr", {
    hour: "2-digit",
    minute: "2-digit"
  });
  let [time, setTime] = useState(timeNow);

  let updateTime = () => {
    let newTimeNow = new Date().toLocaleTimeString("fr", {
      hour: "2-digit",
      minute: "2-digit"
    });
    setTime(newTimeNow);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="container pt-5">
      <h1 className="text-uppercase">{time}</h1>
      <button
        className="btn btn-outline-dark mt-3 text-uppercase"
        onClick={updateTime}
      >
        get time
      </button>
    </div>
  );
}

export default Timer;
