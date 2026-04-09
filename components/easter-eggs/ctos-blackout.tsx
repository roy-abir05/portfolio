"use client";

import { useState, useEffect } from "react";
import { useEasterEgg } from "./use-easter-egg";
import posthog from "posthog-js";

export function CtosBlackout() {
  const [isBlackoutActive, setIsBlackoutActive] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  useEasterEgg("ctos", () => {
    setIsBlackoutActive(true);
    posthog.capture("easter_egg_triggered", {
      type: "ctos",
      location: "global_listener",
    });
  });

  const exitBlackout = () => {
    setIsBlackoutActive(false);
    setLines([]);
  };

  useEffect(() => {
    if (!isBlackoutActive) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") exitBlackout();
    };
    window.addEventListener("keydown", handleKeyDown);

    const messages = [
      "> INITIATING ctOS OVERRIDE...",
      "> BYPASSING MAIN SECURITY KERNEL...",
      "> EXPLOITING CVE-2026-0492...",
      "> ROOT ACCESS GRANTED.",
      "> DOWNLOADING SYSTEM ARCHITECTURE...",
      "> EXTRACTING C++ HEAP DUMPS...",
      "> WIPING FOOTPRINTS...",
      "> CONNECTION TERMINATED.",
    ];

    let i = 0;

    const interval = setInterval(() => {
      if (i < messages.length) {
        setLines((prev) => [...prev, messages[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(exitBlackout, 1500);
      }
    }, 600);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [isBlackoutActive]);

  if (!isBlackoutActive) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] text-red-600 font-mono p-6 sm:p-12 flex flex-col justify-end overflow-hidden selection:bg-red-900 selection:text-white">
      {/* Background Glitch Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
        <h1 className="text-[150px] sm:text-[250px] font-black tracking-tighter text-muted-foreground animate-pulse">
          ctOS
        </h1>
      </div>

      {/* Terminal Output */}
      <div className="relative z-10 flex flex-col gap-3 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12">
        {lines.map((line, idx) => (
          <p
            key={idx}
            className="animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            {line}
          </p>
        ))}
        {/* Blinking Cursor */}
        <span className="w-3 h-5 bg-red-500 animate-pulse mt-2" />
      </div>

      {/* Helper text */}
      <div className="absolute top-6 right-6 text-xs text-foreground font-mono opacity-50">
        PRESS ESC TO ABORT
      </div>
    </div>
  );
}
