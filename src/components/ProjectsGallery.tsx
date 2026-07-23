"use client";

import Image from "next/image";
import { PROJECT_GALLERY } from "@/lib/data";

/**
 * Desktop: pinned section, the track scrolls horizontally as you scroll down
 * (ScrollFX [data-hscroll] handler). Mobile: native horizontal snap scroll.
 */
export function ProjectsGallery() {
  return (
    <section
      data-hscroll
      className="w-full overflow-hidden bg-white py-6 md:flex md:h-screen md:items-center md:py-0"
    >
      <div
        data-hscroll-track
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-3 md:snap-none md:overflow-visible md:px-6 lg:gap-4"
      >
        {PROJECT_GALLERY.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-[4/3] h-[280px] shrink-0 snap-start overflow-hidden md:h-[64vh] md:w-[46vw] lg:w-[38vw]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 60vw, 45vw"
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
