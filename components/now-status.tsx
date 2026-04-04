"use client";

import { useEffect, useState } from "react";

export function NowStatus() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Forces the exact time in IST, regardless of where the recruiter is located
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setTime(`${formatter.format(now)} IST`);
    };

    updateClock();
    // Update every minute (60000ms) to save performance, no need for ticking seconds
    const interval = setInterval(updateClock, 60000);
    return () => clearInterval(interval);
  }, []);

  // Hydration safety: render a transparent block of the same height until mounted
  if (!time) return <div className="h-5 opacity-0" />;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground animate-in fade-in duration-700">
      {/* Live Indicator & Location */}
      <div className="flex items-center gap-2.5">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </div>
        <span className="font-mono">{time}</span>
        <span className="hidden sm:inline-block border-l border-border h-3"></span>
        <span>NIT Durgapur, India</span>
      </div>

      <span className="hidden sm:inline-block border-l border-border h-3"></span>

      {/* Current Engineering Focus */}
      <p className="flex items-center gap-1.5">
        Currently building{" "}
        <span className="text-foreground font-medium">AtomicQueue</span>{" "}
        (Lock-free C++ ring buffer)
      </p>
    </div>
  );
}
