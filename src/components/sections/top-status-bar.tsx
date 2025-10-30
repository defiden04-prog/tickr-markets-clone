"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const padZero = (num: number) => num.toString().padStart(2, "0");

const TopStatusBar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = `${padZero(dateTime.getHours())}:${padZero(
    dateTime.getMinutes()
  )}:${padZero(dateTime.getSeconds())}`;
  const dateString = `${padZero(dateTime.getMonth() + 1)}/${padZero(
    dateTime.getDate()
  )}/${dateTime.getFullYear()}`;

  return (
    <div className="bg-background border-b border-border/50 px-2 py-0">
      <div className="flex h-6 items-center justify-between">
        <div className="font-mono text-[10px] text-[#666666]">
          TICKR TERMINAL v1.2.0
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#666666]">
          <Clock className="h-2.5 w-2.5" />
          <span>
            {timeString} | {dateString}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopStatusBar;