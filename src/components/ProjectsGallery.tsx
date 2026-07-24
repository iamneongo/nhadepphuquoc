"use client";

import Image from "next/image";
import { PROJECT_GALLERY } from "@/lib/data";

/**
 * The section pins and the track scrolls horizontally as you scroll down
 * (ScrollFX [data-hscroll] handler) — same effect on mobile and desktop.
 */
export function ProjectsGallery() {
  return (
    <section
      data-hscroll
      className="flex h-screen w-full items-center overflow-hidden bg-white"
    >
      <div
        data-hscroll-track
        className="flex gap-3 px-4 md:px-6 lg:gap-4"
      >
        {PROJECT_GALLERY.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-[3/4] w-[80vw] shrink-0 overflow-hidden md:aspect-[4/3] md:h-[64vh] md:w-[46vw] lg:w-[38vw]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 80vw, 45vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            {/* readability gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <span className="h-8 w-1 shrink-0 bg-brand-bronze" />
              <p className="font-display text-lg leading-tight text-white lg:text-xl">
                {img.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
