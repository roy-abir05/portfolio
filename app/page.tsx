"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import posthog from "posthog-js";
import Link from "next/link";
import { GithubActivity } from "@/components/github-activity";
import { NowStatus } from "@/components/now-status";
import DeveloperEnvironment from "@/components/developer-environment";
import Image from "next/image";
import {
  ExternalLink,
  GitPullRequest,
  GitMerge,
  GitPullRequestClosed,
} from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="max-w-3xl mx-auto px-6 py-20 flex flex-col gap-20">
        {/* HERO SECTION */}
        <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
          {/* Image  */}
          <div className="mx-auto bg-transparent">
            <Image
              src="/me.png"
              alt="Abir Roy"
              priority
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              width={220}
              height={220}
              quality={100}
            />
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-4xl sm:text-7xl font-medium tracking-tight text-foreground text-center">
              Abir Roy
            </h1>
            <h2 className="text-xl font-normal text-muted-foreground flex items-center gap-2 text-center">
              Systems & Software Engineer
            </h2>
          </div>

          <p className="max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed">
            I build high-performance systems where efficiency isn&apos;t an
            afterthought—it&apos;s the foundation. From low-latency{" "}
            <span className="underline text-foreground">C++ architectures</span>{" "}
            and lock-free data structures to scalable{" "}
            <span className="underline text-foreground">
              full-stack web application
            </span>
            , I focus on writing code that holds up under real-world pressure.
            <br /> <br />
            My foundation is built on the algorithmic rigor of{" "}
            <span className="underline text-foreground">
              competitive programming
            </span>
            , which drives my approach to system design: crafting solutions that
            are not just correct, but mathematically fast, resilient, and built
            to scale
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Link href="https://github.com/roy-abir05" target="_blank">
              <Button
                className="h-10 px-6 font-medium"
                onClick={() =>
                  posthog.capture("github_button_clicked", { location: "hero" })
                }
              >
                GitHub
              </Button>
            </Link>
            <Link
              href={
                process.env.NEXT_PUBLIC_RESUME_URL ||
                "https://drive.google.com/file/d/1NGzczTl1p25wr2c0wMfTFtueV72GXUhk/view?usp=sharing"
              }
              target="_blank"
            >
              <Button
                variant="secondary"
                className="h-10 px-6 font-medium"
                onClick={() =>
                  posthog.capture("resume_download_clicked", {
                    location: "hero",
                  })
                }
              >
                Resume
              </Button>
            </Link>
          </div>

          <div className="pt-2">
            <NowStatus />
          </div>
        </section>

        <div className="h-px w-full bg-border" />

        {/* ALGORITHMIC FOUNDATION (CP SECTION) */}
        <section className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out delay-700 fill-mode-both mt-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Algorithmic Foundation
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Algorithms dictate system limits. My competitive programming
              background drives how I approach low-latency design, memory
              alignment, and concurrency in production.
            </p>
          </div>

          {/* The AST / Staircase Directory UI */}
          <div className="relative font-mono text-sm sm:text-base mt-2">
            {/* Main Vertical Trunk */}
            <div className="absolute left-1.5 top-2 bottom-6 w-px bg-[#333]" />

            {/* NODE 1: Global & National Tier */}
            {/* Base indent: ml-8, Desktop indent: ml-12 */}
            <div className="relative mb-10 ml-8 sm:ml-12 group">
              {/* Connector Line */}
              <div className="absolute top-7 -left-[26px] sm:-left-[42px] w-[26px] sm:w-[42px] h-px bg-[#333] transition-colors group-hover:bg-[#555]" />
              {/* Trunk Dot */}
              <div className="absolute top-[25px] -left-[30px] sm:-left-[46px] w-2.5 h-2.5 rounded-full bg-foreground outline outline-4 outline-background" />

              <div className="border border-[#222] bg-[#0a0a0a] rounded-lg p-5 transition-colors hover:border-[#444]">
                <h4 className="text-foreground font-semibold font-sans text-lg mb-4 flex items-center gap-2">
                  <span className="text-muted-foreground font-mono text-sm tracking-wider">
                    /global-tier
                  </span>
                </h4>
                <ul className="flex flex-col gap-3 font-sans text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-[#555] mt-0.5">├─</span>
                    <span>
                      <strong className="text-foreground font-medium">
                        INOI 2023 Bronze Medalist:
                      </strong>{" "}
                      Secured rank among <span className="italic">top 64</span>{" "}
                      nationally in the Indian National Olympiad in Informatics.
                      Qualified via{" "}
                      <span className="italic">
                        ZIO (Zonal Informatics Olympiad)
                      </span>
                      , demonstrating aptitude in discrete mathematics and
                      logical reasoning
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#555] mt-0.5">└─</span>
                    <span>
                      <strong className="text-foreground font-medium">
                        Meta Hacker Cup (2021-2025):
                      </strong>{" "}
                      5x Qualifier. Ranked Top 2000 globally in 2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* NODE 2: The Crucible / HFT Arenas */}
            {/* Base indent: ml-12, Desktop indent: ml-24 */}
            <div className="relative mb-10 ml-12 sm:ml-24 group">
              {/* Connector Line */}
              <div className="absolute top-7 -left-[42px] sm:-left-[90px] w-[42px] sm:w-[90px] h-px bg-[#333] transition-colors group-hover:bg-[#555]" />
              {/* Trunk Dot */}
              <div className="absolute top-[25px] -left-[46px] sm:-left-[94px] w-2.5 h-2.5 rounded-full bg-foreground outline outline-4 outline-background" />

              <div className="border border-[#222] bg-[#0a0a0a] rounded-lg p-5 transition-colors hover:border-[#444]">
                <h4 className="text-foreground font-semibold font-sans text-lg mb-4 flex items-center gap-2">
                  <span className="text-muted-foreground font-mono text-sm tracking-wider">
                    /high-frequency-arenas
                  </span>
                </h4>
                <ul className="flex flex-col gap-3 font-sans text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-[#555] mt-0.5">└─</span>
                    <span>
                      <strong className="text-foreground font-medium">
                        IICPC Codefest 2025 Regionals (Rank 201):
                      </strong>{" "}
                      Competed in high-stakes arenas backed by Jane Street and
                      Citadel, focusing on extreme optimization and edge-case
                      resolution
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* NODE 3: Baseline & Leadership */}
            {/* Base indent: ml-16, Desktop indent: ml-36 */}
            <div className="relative ml-16 sm:ml-36 group">
              {/* Connector Line */}
              <div className="absolute top-7 -left-[58px] sm:-left-[138px] w-[58px] sm:w-[138px] h-px bg-[#333] transition-colors group-hover:bg-[#555]" />
              {/* Trunk Dot */}
              <div className="absolute top-[25px] -left-[62px] sm:-left-[142px] w-2.5 h-2.5 rounded-full bg-foreground outline outline-4 outline-background shadow-[0_0_10px_rgba(255,255,255,0.3)]" />

              <div className="border border-[#222] bg-[#0a0a0a] rounded-lg p-5 transition-colors hover:border-[#444]">
                <h4 className="text-foreground font-semibold font-sans text-lg mb-4 flex items-center gap-2">
                  <span className="text-muted-foreground font-mono text-sm tracking-wider">
                    /metrics-and-leadership
                  </span>
                </h4>
                <ul className="flex flex-col gap-3 font-sans text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-[#555] mt-0.5">├─</span>
                    <span>
                      <strong className="text-foreground font-medium">
                        Verified Ratings:
                      </strong>{" "}
                      <div>
                        <Link
                          href="https://codeforces.com/profile/roy_abir05"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 hover:text-foreground/80"
                        >
                          Codeforces Specialist (Max 1556)
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                        <Link
                          href="https://www.codechef.com/users/roy_abir05"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 hover:text-foreground/80"
                        >
                          CodeChef 4-Star (Max 1924)
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#555] mt-0.5">└─</span>
                    <span>
                      <strong className="text-foreground font-medium">
                        Architected Codecracker 2025:
                      </strong>{" "}
                      Managed infrastructure, designed edge-case test suites,
                      and led community engagement for 150+ participants
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-border" />

        {/* OPEN SOURCE & PRODUCTION CODE */}
        <section className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out delay-700 fill-mode-both mt-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              Production Code & Open Source
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I thrive in massive, undocumented codebases. From implementing
              parallel algorithms in C++ standard libraries to shipping
              enterprise features for platforms used by 200k+ teams.
            </p>
          </div>

          {/* PR Tracker List */}
          <div className="flex flex-col gap-3 mt-2">
            {/* TICKET 1: HPX (The Low-Latency Flex) */}
            <div className="group relative flex flex-col gap-3 border border-[#222] bg-[#0a0a0a] rounded-lg p-5 transition-all hover:border-[#444] hover:bg-[#0f0f0f]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs sm:text-sm">
                  <GitMerge className="w-4 h-4 text-[#8957e5]" />{" "}
                  {/* GitHub Purple */}
                  <span>STEllAR-GROUP/hpx</span>
                </div>
                <div className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#8957e5]/10 text-[#8957e5] border border-[#8957e5]/20">
                  Merged
                </div>
              </div>
              <div>
                <a
                  href="https://github.com/STEllAR-GROUP/hpx/pull/7110"
                  target="_blank"
                  className="text-foreground font-semibold font-sans text-lg hover:underline decoration-[#333] underline-offset-4"
                >
                  Implement Segmented version of equal algorithm ↗
                </a>
                <p className="text-muted-foreground font-sans text-sm mt-2 leading-relaxed">
                  Developed the distributed parallel implementation of{" "}
                  <code className="text-foreground bg-[#222] px-1 rounded">
                    hpx::equal
                  </code>
                  . Handled complex iterator type resolution and parallel
                  dispatch mechanisms, diagnosing boundary-alignment edge cases
                  that inspired architectural improvements to the C++ Standard
                  Library for Concurrency
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                  C++
                </span>
                <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                  Parallelism
                </span>
                <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                  HPC
                </span>
              </div>
            </div>

            {/* TICKET 2: Cal.com (The Full-Stack Flex) */}
            <div className="group relative flex flex-col gap-3 border border-[#222] bg-[#0a0a0a] rounded-lg p-5 transition-all hover:border-[#444] hover:bg-[#0f0f0f]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs sm:text-sm">
                  <GitMerge className="w-4 h-4 text-[#8957e5]" />
                  <span>calcom/cal.com</span>
                </div>
                <div className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider bg-[#8957e5]/10 text-[#8957e5] border border-[#8957e5]/20">
                  3 PRs MERGED
                </div>
              </div>
              <div>
                <span className="text-foreground font-semibold font-sans text-lg">
                  Core Infrastructure & Production Features
                </span>
                <p className="text-muted-foreground font-sans text-sm mt-2 leading-relaxed mb-3">
                  Shipped production features for a high-scale scheduling
                  platform used by 200k+ teams, collaborating directly with core
                  maintainers
                </p>
                <ul className="flex flex-col gap-2 font-sans text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-[#555] mt-0.5">↳</span>
                    <span>
                      <a
                        href="https://github.com/calcom/cal.com/pull/25638"
                        target="_blank"
                        className="text-foreground hover:underline"
                      >
                        PR #25638:
                      </a>{" "}
                      Implemented SPA-safe History API listeners; reduced
                      duplicate tracking signals by 80% via Zod schema
                      validation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#555] mt-0.5">↳</span>
                    <span>
                      <a
                        href="https://github.com/calcom/cal.com/pull/25499"
                        target="_blank"
                        className="text-foreground hover:underline"
                      >
                        PR #25499:
                      </a>{" "}
                      Refactored fragile slug logic with URI encoding to resolve
                      critical routing failures for enterprise clients
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#555] mt-0.5">↳</span>
                    <span>
                      <a
                        href="https://github.com/calcom/cal.com/pull/24849"
                        target="_blank"
                        className="text-foreground hover:underline"
                      >
                        PR #24849:
                      </a>{" "}
                      Diagnosed and patched Docker Compose networking errors,
                      restoring cross-platform build consistency
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                  Next.js
                </span>
                <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                  TypeScript
                </span>
                <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                  Docker
                </span>
              </div>
            </div>

            {/* TICKET 3 & 4 Grid: Gemini & Rocket.Chat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Gemini CLI */}
              <div className="group relative flex flex-col gap-3 border border-[#222] bg-[#0a0a0a] rounded-lg p-5 transition-all hover:border-[#444] hover:bg-[#0f0f0f]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs sm:text-sm">
                    <GitPullRequestClosed className="w-4 h-4 text-[#89929b]" />{" "}
                    {/* GitHub Gray */}
                    <span>google-gemini/gemini-cli</span>
                  </div>
                </div>
                <div>
                  <a
                    href="https://github.com/google-gemini/gemini-cli/pull/21426"
                    target="_blank"
                    className="text-foreground font-semibold font-sans text-md hover:underline decoration-[#333] underline-offset-4"
                  >
                    Automated Update Command ↗
                  </a>
                  <p className="text-muted-foreground font-sans text-sm mt-2 leading-relaxed">
                    Implemented an update subcommand with automatic package
                    manager detection (npm, brew, yarn) and secure,
                    platform-aware error handling.{" "}
                    <span className="italic opacity-80">
                      (Feature complete; automatically closed by repo triage
                      policy)
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                    CLI
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                    Node.js
                  </span>
                </div>
              </div>

              {/* Rocket.Chat */}
              <div className="group relative flex flex-col gap-3 border border-[#222] bg-[#0a0a0a] rounded-lg p-5 transition-all hover:border-[#444] hover:bg-[#0f0f0f]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs sm:text-sm">
                    <GitPullRequest className="w-4 h-4 text-[#238636]" />{" "}
                    {/* GitHub Green */}
                    <span>RocketChat/Rocket.Chat</span>
                  </div>
                  <div className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#238636]/10 text-[#238636] border border-[#238636]/20">
                    Open
                  </div>
                </div>
                <div>
                  <a
                    href="https://github.com/RocketChat/Rocket.Chat/pull/38578"
                    target="_blank"
                    className="text-foreground font-semibold font-sans text-md hover:underline decoration-[#333] underline-offset-4"
                  >
                    Strict Token Compliance ↗
                  </a>
                  <p className="text-muted-foreground font-sans text-sm mt-2 leading-relaxed">
                    Resolved a UI rendering bug and console error by enforcing
                    strict design token compliance within the enterprise
                    Fuselage component library, eliminating invalid state
                    warnings
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                    React
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-muted-foreground font-mono">
                    Design Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GitHub Heatmap */}
        <div className="flex flex-col gap-4 transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-25">
          <GithubActivity />
        </div>

        {/* Next divider */}
        <div className="h-px w-full bg-border" />

        {/* SYSTEMS & ALGORITHMS */}
        <section className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out delay-300 fill-mode-both">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            Systems & Algorithms
          </h3>

          <div className="flex flex-col gap-12">
            {/* AtomicQueue & Micromatch */}
            <div className="flex flex-col gap-4 group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium text-foreground">
                    AtomicQueue & Micromatch
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    Low-Latency C++ Engineering
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="w-fit transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  C++ • CMake
                </Badge>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li>
                  Designed and implemented a lock-free ring buffer and Limit
                  Order Book engine tailored for high-frequency trading
                  environments.
                </li>
                <li>
                  Engineered custom memory management and synchronization
                  primitives to eliminate thread blocking and reduce latency.
                </li>
                <li>
                  Focused heavily on cache-line optimization and mechanical
                  sympathy to maximize algorithmic throughput.
                </li>
              </ul>
            </div>

            {/* Competitive Programming */}
            <div className="flex flex-col gap-4 group">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium text-foreground">
                    Algorithmic Problem Solving
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    Competitive Programming
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="w-fit transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  C++ • Data Structures
                </Badge>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li>
                  Indian National Olympiad in Informatics (INOI) Bronze
                  Medalist.
                </li>
                <li>
                  Regionalist at the IICPC CodeFest 2025, demonstrating the
                  ability to write highly optimized logic under extreme time
                  constraints.
                </li>
                <li>
                  Consistently leverage advanced data structures and algorithms
                  to solve complex mathematical and computational problems.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-border mt-8" />

        {/* DEVELOPER ENVIRONMENT */}
        <DeveloperEnvironment />

        {/* FOOTER & EASTER EGG HINT */}
        <footer className="mt-16 pb-28 sm:pb-12 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-muted-foreground border-t border-[#222] pt-8 animate-in fade-in duration-700 ease-in-out delay-700 fill-mode-both">
          <p>© {new Date().getFullYear()} Abir Roy. All systems operational.</p>

          <div className="hidden sm:flex items-center gap-2 font-mono text-xs">
            <span>[ type</span>
            <kbd className="px-1.5 py-0.5 bg-[#111] border border-[#333] rounded-md text-foreground font-sans text-[10px] uppercase tracking-wider shadow-sm">
              sudo
            </kbd>
            <span>anywhere ]</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
