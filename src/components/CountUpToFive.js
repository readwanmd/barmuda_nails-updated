import React from "react";
import CountUp from "react-countup";

export default function CountUpToFiveHun() {
  return (
    <div>
      <CountUp
        enableScrollSpy
        scrollSpyOnce
        start={0}
        end={15}
        duration={3}
        suffix="+"
      />
    </div>
  );
}
