"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import posthog from "posthog-js";
import Link from "next/link";
import { GithubActivity } from "@/components/github-activity";
import { NowStatus } from "@/components/now-status";
import DeveloperEnvironment from "@/components/developer-environment";
import Image from "next/image";

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

        {/* OPEN SOURCE ENGINEERING */}
        <section className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out delay-150 fill-mode-both">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            Open Source Engineering
          </h3>

          {/* 1. Added 'group/list' to the parent container */}
          <div className="flex flex-col gap-12 group/list">
            {/* CERN-HSF (HPX) */}
            {/* 2. Added the transition and hover state classes to the child */}
            <div className="flex flex-col gap-4 group transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-25">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium text-foreground">
                    CERN-HSF (HPX)
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    C++ Core Contributor
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="w-fit transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  C++ • Parallelism
                </Badge>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li>
                  Successfully merged architectural improvements into HPX, the
                  C++ Standard Library for Concurrency and Parallelism.
                </li>
                <li>
                  Navigated a highly complex, globally distributed codebase to
                  optimize parallel execution components.
                </li>
                <li>
                  Demonstrated the ability to write robust, low-level C++ for
                  high-performance computing environments.
                </li>
              </ul>
            </div>

            {/* Cal.com */}
            {/* 2. Added the same transition and hover state classes to this child */}
            <div className="flex flex-col gap-4 group transition-all duration-300 hover:!opacity-100 group-hover/list:opacity-25">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium text-foreground">
                    Cal.com
                  </h4>
                  <span className="text-sm text-muted-foreground">
                    Production Contributor
                  </span>
                </div>
                <Badge
                  variant="secondary"
                  className="w-fit transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Next.js • TypeScript
                </Badge>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <li>
                  Shipped production-ready features and bug fixes for a modular
                  scheduling platform used by thousands of teams.
                </li>
                <li>
                  Collaborated asynchronously with core maintainers to ensure
                  strict backward compatibility, comprehensive test coverage,
                  and adherence to rigorous review standards.
                </li>
                <li>
                  Engineered solutions for complex routing forms, URI encoding
                  preservation, and configurable Meta standard conversion
                  events.
                </li>
              </ul>
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
