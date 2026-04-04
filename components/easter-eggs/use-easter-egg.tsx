"use client";

import { useEffect, useRef } from "react";

export function useEasterEgg(secretCode: string, action: () => void) {
  const actionRef = useRef(action);

  useEffect(() => {
    actionRef.current = action;
  }, [action]);

  useEffect(() => {
    let buffer = "";
    const target = secretCode.toLowerCase();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.key.length > 1) return;

      buffer += e.key.toLowerCase();

      if (buffer.length > target.length) {
        buffer = buffer.slice(-target.length);
      }

      if (buffer === target) {
        buffer = "";
        actionRef.current();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [secretCode]);
}
