"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";
import posthog from "posthog-js";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-30 w-full animate-pulse bg-muted/50 rounded-md" />
    ),
  },
);

export function GithubActivity() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col gap-4 group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchCancel={() => setIsHovered(false)}
    >
      <div className="flex justify-between px-5 text-xs text-muted-foreground">
        <span className="font-semibold">GITHUB CONTRIBUTIONS</span>
        <Link
          href="https://github.com/roy-abir05"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          onClick={() =>
            posthog.capture("github_button_clicked", {
              location: "github_activity",
            })
          }
        >
          @roy-abir05
          <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* CHANGED: Adjusted padding and added strict overflow handling */}
      <div className="border border-background group-hover:border-border rounded-md overflow-hidden transition-all duration-300">
        <div className="p-4 sm:p-6 w-full overflow-x-auto flex justify-start sm:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="min-w-max">
            <GitHubCalendar
              username="roy-abir05"
              colorScheme={!isHovered ? "dark" : undefined}
              theme={
                !isHovered
                  ? {
                      dark: [
                        "#191919", // Empty squares
                        "#404040", // Light activity
                        "#737373", // Med activity
                        "#a3a3a3", // High activity
                        "#ffffff", // Highest activity
                      ],
                    }
                  : undefined
              }
              blockSize={10}
              blockMargin={3}
              fontSize={14}
              blockRadius={0}
              style={{ transition: "color 300ms ease-in-out" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
