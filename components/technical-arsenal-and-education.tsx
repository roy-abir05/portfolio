"use client";

export function TechnicalArsenalAndEducation() {
  return (
    <section className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out delay-700 fill-mode-both mt-16 mb-24">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          Technical Arsenal & Education
        </h3>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A categorized overview of the languages, frameworks, and
          infrastructure I use to build scalable systems, alongside my academic
          foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {/* SKILLS TAXONOMY (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 flex flex-col gap-6 border border-[#222] bg-[#0a0a0a] rounded-lg p-6 sm:p-8 transition-colors hover:border-[#444]">
          <h4 className="text-lg font-bold text-foreground font-sans tracking-tight mb-2">
            Engineering Stack
          </h4>

          {/* Category 1: Systems & Core */}
          <div className="flex flex-col gap-3">
            <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">
              Systems & Low-Level
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "C++ (17/20)", color: "#60A5FA" },
                { name: "C", color: "#CBD5E1" },
                { name: "POSIX Sockets", color: "#FBBF24" },
                { name: "Multithreading", color: "#FBBF24" },
                { name: "Lock-free Data Structures", color: "#FBBF24" },
                { name: "Memory Arenas", color: "#FBBF24" },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-foreground font-mono transition-colors hover:bg-[#222] hover:text-(--hover-color) cursor-default"
                  style={
                    { "--hover-color": skill.color } as React.CSSProperties
                  }
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Category 2: Full-Stack Web */}
          <div className="flex flex-col gap-3">
            <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">
              Web Infrastructure
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "TypeScript", color: "#60A5FA" },
                { name: "Node.js", color: "#4ADE80" },
                { name: "Next.js", color: "#FFFFFF" },
                { name: "React", color: "#22D3EE" },
                { name: "Spring Boot", color: "#84CC16" },
                { name: "Tailwind CSS", color: "#2DD4BF" },
                { name: "PostgreSQL", color: "#38BDF8" },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-foreground font-mono transition-colors hover:bg-[#222] hover:text-(--hover-color) cursor-default"
                  style={
                    { "--hover-color": skill.color } as React.CSSProperties
                  }
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Category 3: Tooling & OS */}
          <div className="flex flex-col gap-3">
            <span className="text-muted-foreground text-xs uppercase tracking-wider font-mono">
              DevOps & Tooling
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Docker", color: "#38BDF8" },
                { name: "Git/GitHub Actions", color: "#F87171" },
                { name: "Linux (Arch)", color: "#22D3EE" },
                { name: "Bash/Shell Scripting", color: "#4ADE80" },
                { name: "CMake", color: "#60A5FA" },
                { name: "GDB", color: "#F472B6" },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded-md bg-[#111] border border-[#333] text-xs text-foreground font-mono transition-colors hover:bg-[#222] hover:text-(--hover-color) cursor-defaul"
                  style={
                    { "--hover-color": skill.color } as React.CSSProperties
                  }
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION CARD (Spans 1 column) */}
        <div className="flex flex-col border border-[#222] bg-[#0a0a0a] rounded-lg p-6 sm:p-8 transition-colors hover:border-[#444]">
          <h4 className="text-lg font-bold text-foreground font-sans tracking-tight mb-6">
            Education
          </h4>

          <div className="flex flex-col h-full justify-between gap-6">
            <div>
              <h5 className="text-base font-semibold text-foreground font-sans leading-snug">
                National Institute of Technology (NIT), Durgapur
              </h5>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Bachelor of Technology
                <br />
                <span className="text-foreground">Chemical Engineering</span>
              </p>
            </div>

            <div className="flex flex-col gap-1 border-t border-[#333] pt-4 mt-auto">
              <span className="text-muted-foreground text-xs font-mono uppercase tracking-wider">
                Timeline
              </span>
              <span className="text-foreground font-mono text-sm">
                2023 — 2027
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
