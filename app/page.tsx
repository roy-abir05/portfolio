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

        {/* Placeholder for the next section */}
        <div className="h-px w-full bg-border" />
      </div>
    </main>
  );
}
