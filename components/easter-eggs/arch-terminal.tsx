"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { useEasterEgg } from "./use-easter-egg";

const NeofetchOutput = () => (
  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-foreground mb-6">
    <pre className="text-foreground font-bold leading-tight hidden sm:block select-none">
      {`
             /\\
            /  \\
           /    \\
          /      \\
         /   ,,   \\
        /   |  |   \\
       /_-''    ''-_\\
      `}
    </pre>

    <div className="flex flex-col gap-1">
      <p className="font-bold">abir@archlinux</p>
      <p className="text-muted-foreground">-------------------</p>
      <p>
        <span className="font-bold">OS</span>: Arch Linux x86_64
      </p>
      <p>
        <span className="font-bold">Host</span>: Systems & Software Engineer
      </p>
      <p>
        <span className="font-bold">Kernel</span>: C++17 / Linux
      </p>
      <p>
        <span className="font-bold">Uptime</span>: 21 years (since: 2
        <sup>nd</sup> April, 2005)
      </p>
      <p>
        <span className="font-bold">Shell</span>: zsh 3.0.6
      </p>
      <p>
        <span className="font-bold">WM</span>: Hyprland
      </p>

      {/* Monochrome Color Blocks */}
      <div className="flex gap-1 mt-4">
        <div className="w-5 h-5 bg-[#0a0a0a] border border-[#333]"></div>
        <div className="w-5 h-5 bg-[#262626]"></div>
        <div className="w-5 h-5 bg-[#404040]"></div>
        <div className="w-5 h-5 bg-[#525252]"></div>
        <div className="w-5 h-5 bg-[#737373]"></div>
        <div className="w-5 h-5 bg-[#a3a3a3]"></div>
        <div className="w-5 h-5 bg-[#d4d4d4]"></div>
        <div className="w-5 h-5 bg-[#ffffff]"></div>
      </div>
    </div>
  </div>
);

export function ArchTerminal() {
  const [isVisible, setIsVisible] = useState(false);
  const [history, setHistory] = useState<ReactNode[]>([]);
  const [input, setInput] = useState("");

  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Toggle terminal and reset history on open
  useEasterEgg("sudo", () => {
    setIsVisible((prev) => {
      if (!prev) {
        setHistory([<NeofetchOutput key="init" />]);
        document.body.classList.add("overflow-hidden", "max-h-full");
      }
      return !prev;
    });
  });

  // Auto-focus the hidden input when terminal opens or is clicked
  useEffect(() => {
    if (isVisible) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isVisible]);

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Exiting Terminal and Clean-up Tasks
  const exitTerminal = () => {
    document.body.classList.remove("overflow-hidden", "max-h-full");
    setIsVisible(false);

    setHistory([]);
    setCmdHistory([]);
    setHistoryIndex(-1);
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Enter") {
      setInput("");

      const promptLine = (
        <div key={Date.now()} className="flex items-center gap-2 mb-1">
          <span className="text-foreground font-bold">➜</span>
          <span className="text-foreground font-bold">~</span>
          <span className="text-foreground">{input.trim()}</span>
        </div>
      );

      const cmd = input.trim().toLowerCase();

      if (cmd) {
        setCmdHistory((prev) => [cmd, ...prev]);
      }
      setHistoryIndex(-1);

      let output: ReactNode = null;

      if (cmd.startsWith("pacman")) {
        if (cmd === "pacman -syu" || cmd === "pacman -syu") {
          output = (
            <div className="text-muted-foreground mb-4 font-mono">
              :: Synchronizing package databases...
              <br />
              core is up to date
              <br />
              extra is up to date
              <br />
              :: Starting full system upgrade...
              <br />
              there is nothing to do
            </div>
          );
        } else {
          output = (
            <div className="text-red-500 mb-4">
              error: you cannot perform this operation unless you are root.
            </div>
          );
        }
      } else if (cmd.startsWith("sudo")) {
        output = (
          <div className="text-muted-foreground mb-4">Permission Denied!</div>
        );
      } else {
        switch (cmd) {
          case "help":
            output = (
              <div className="text-muted-foreground mb-4">
                Available commands: neofetch, whoami, pwd, clear, reset, exit
              </div>
            );
            break;
          case "whoami":
            output = (
              <div className="text-muted-foreground mb-4">
                abir (Systems & Software Engineer)
              </div>
            );
            break;
          case "pwd":
            output = (
              <div className="text-muted-foreground mb-4">
                /home/abir/portfolio/frontend
              </div>
            );
            break;
          case "clear":
            setHistory([]);
            return;
          case "reset":
            setHistory([<NeofetchOutput key={Date.now()} />]);
            return;
          case "exit":
            exitTerminal();
            return;
          case "neofetch":
            output = <NeofetchOutput />;
            break;
          case "":
            output = null;
            break;
          default:
            output = (
              <div className="text-muted-foreground mb-4">
                zsh: command not found: {cmd}
              </div>
            );
        }
      }

      setHistory((prev) =>
        [
          ...prev,
          promptLine,
          output && <div key={Date.now() + 1}>{output}</div>,
        ].filter(Boolean),
      );
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/10 backdrop-blur-md animate-in fade-in duration-300 p-4 sm:p-8"
      onClick={() => {
        exitTerminal();
      }}
    >
      <div
        className="w-full max-w-5xl h-[70vh] sm:h-[80vh] flex flex-col bg-[#050505] border border-[#222] rounded-xl shadow-2xl font-mono text-sm sm:text-base overflow-hidden"
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus(); // Re-focus input if they click inside the terminal
        }}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-[#222] select-none">
          <div className="w-3 h-3 rounded-full bg-[#333]" />
          <div className="w-3 h-3 rounded-full bg-[#333]" />
          <div className="w-3 h-3 rounded-full bg-[#333]" />
          <span className="ml-2 text-xs text-muted-foreground">
            abir@archlinux: ~
          </span>
        </div>

        {/* Terminal Body (Scrollable) */}
        <div
          ref={scrollRef}
          className="flex-1 p-6 overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {history}

          {/* Active Command Prompt */}
          <div className="flex items-center gap-2">
            <span className="text-foreground font-bold">➜</span>
            <span className="text-foreground font-bold">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-foreground caret-foreground shadow-none"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
