import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col gap-20">
        {/* HERO SECTION */}
        <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Abir Roy
            </h1>
            <h2 className="text-xl font-medium text-muted-foreground flex items-center gap-2">
              Systems & Software Engineer
            </h2>
          </div>

          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            A Chemical Engineering undergrad who spends his time building
            high-performance C++ systems, optimizing low-latency architectures,
            and shipping production features to large-scale open-source
            platforms.
            <br className="hidden sm:block" />
            <br className="hidden sm:block" />I bridge the gap between
            algorithmic rigor and real-world system design, whether that means
            crafting lock-free data structures or writing resilient backend
            services.
          </p>

          <div className="flex items-center gap-4 mt-2">
            <Button className="h-10 px-6 font-medium">View GitHub</Button>
            <Button variant="secondary" className="h-10 px-6 font-medium">
              Download Resume
            </Button>
          </div>
        </section>

        <div className="h-px w-full bg-border" />

        {/* OPEN SOURCE ENGINEERING */}
        <section className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out delay-150 fill-mode-both">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            Open Source Engineering
          </h3>

          <div className="flex flex-col gap-12">
            {/* CERN-HSF (HPX) */}
            <div className="flex flex-col gap-4 group">
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
            <div className="flex flex-col gap-4 group">
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
                  Regionalist at the IICPC CodeFest 2025, demonstrating the ability
                  to write highly optimized logic under extreme time
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

        {/* Final divider before footer */}
        <div className="h-px w-full bg-border mt-8" />
      </div>
    </main>
  );
}
