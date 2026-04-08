"use client";

import { useEffect } from "react";

export function ConsoleGreeting() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ascii = `
   ╭──────────────╮
   │  SYSTEM  OK  │
   ╰─┬──────────┬─╯
     │          │
    `;

    console.log(
      `%c${ascii}\n%cLooking for memory leaks?\n%cYou won't find any here. Let's talk high-frequency architecture: %croyabirdhn@gmail.com`,
      "color: #00ff41; font-family: monospace; font-weight: bold;",
      "color: #fff; font-size: 14px; font-weight: bold; margin-top: 5px;",
      "color: #a3a3a3; font-size: 12px; margin-top: 5px;",
      "color: #38BDF8; font-size: 12px; text-decoration: underline;",
    );
  }, []);

  // It renders absolutely nothing to the DOM
  return null;
}
