"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCT_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Sticky scroll storytelling: on desktop the section pins and the three
 * categories (Villa → Penthouse → Showroom) advance as the user scrolls.
 * On mobile it falls back to a click-driven slider.
 */
export function ProductCategories() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const count = PRODUCT_CATEGORIES.length;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * count,
        pin: pinRef.current,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(count - 1, Math.floor(self.progress * count));
          setActive((prev) => (prev === idx ? prev : idx));
        },
      });
      return () => st.kill();
    });

    return () => mm.revert();
  }, [count]);

  const item = PRODUCT_CATEGORIES[active];

  return (
    <section ref={sectionRef} id="san-pham" className="w-full bg-white">
      <div
        ref={pinRef}
        className="grid h-[560px] overflow-hidden lg:h-screen lg:grid-cols-2"
      >
        {/* image side */}
        <div className="relative h-full">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <Image
              key={cat.image}
              src={cat.image}
              alt={cat.title}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={cn(
                "object-cover transition-opacity duration-700 ease-out",
                i === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          {/* progress bar */}
          <div className="absolute bottom-0 left-0 z-10 h-1 w-full bg-white/20">
            <div
              className="h-full bg-brand-bronze transition-all duration-500"
              style={{ width: `${((active + 1) / count) * 100}%` }}
            />
          </div>
        </div>

        {/* content side */}
        <div className="relative flex flex-col justify-center px-5 py-14 md:px-12 lg:px-16">
          <div key={active} className="[animation:mnd-fade-up_0.6s_ease-out]">
            <span className="mnd-pill font-display self-start">
              {item.label}
            </span>
            <h2 className="mt-8 font-serif text-7xl text-black/30 lg:text-[110px] lg:leading-[0.9]">
              {item.title}
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-black/60">
              {item.description}
            </p>
          </div>

          {/* vertical pagination indicator */}
          <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-4 lg:right-10">
            {PRODUCT_CATEGORIES.map((cat, i) => (
              <button
                key={cat.number}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Xem ${cat.title}`}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border text-sm transition-colors",
                  i === active
                    ? "border-ink bg-ink text-white"
                    : "border-black/20 text-black/40 hover:border-black/50",
                )}
              >
                {cat.number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
