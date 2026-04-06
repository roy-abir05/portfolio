"use client";

import Image from "next/image";
import { useState } from "react";

const DeveloperEnvironment = () => {
  const [enlargedImage, setEnlargedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/workspace/f1-setup.png",
      alt: "Arch Linux setup with Red Bull Racing wallpaper",
    },
    {
      src: "/workspace/terminal-setup.png",
      alt: "Terminal showing neofetch and C++ HPX code",
    },
  ];

  const changeEnlargedImage = (num: number | null) => {
    if (num == null) {
      document.body.classList.remove("overflow-hidden", "max-h-full");
    } else {
      document.body.classList.add("overflow-hidden", "max-h-full");
    }
    setEnlargedImage(num);
  };

  return (
    <>
      <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out delay-500 fill-mode-both">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            Developer Environment
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I believe an engineer should understand their tools from the kernel
            up. I daily-drive{" "}
            <strong className="text-foreground font-medium">Arch Linux</strong>{" "}
            and utilize{" "}
            <strong className="text-foreground font-medium">Hyprland</strong> as
            my window manager. Building, configuring, and maintaining my own
            custom desktop environment has given me a deep appreciation for
            Linux system architecture, shell scripting, and uncompromising
            performance.
          </p>
        </div>

        {/* Workspace Screenshots Grid */}
        <div className="static grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          {/* Screenshot 1: F1 Wallpaper */}
          <div
            className="group relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted/20 cursor-zoom-in"
            onClick={() => changeEnlargedImage(0)}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover grayscale transition-all duration-700 ease-in-out group-active:grayscale-0 group-hover:grayscale-0 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 pointer-events-none rounded-lg" />
          </div>

          {/* Screenshot 2: Terminal & Code */}
          <div
            className="group relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted/20 cursor-zoom-in"
            onClick={() => changeEnlargedImage(1)}
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover grayscale transition-all duration-700 ease-in-out group-active:grayscale-0 group-hover:grayscale-0 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 pointer-events-none rounded-lg" />
          </div>
        </div>
      </section>

      {/* The Overlay - Moved OUTSIDE the animated section */}
      {enlargedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => changeEnlargedImage(null)}
        >
          {/* Stop Propagation prevents the click from reaching the background */}
          <div
            className="relative w-full max-w-7xl h-full animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[enlargedImage].src}
              alt={images[enlargedImage].alt}
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DeveloperEnvironment;
