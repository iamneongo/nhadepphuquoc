"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { QuoteIcon, StarIcon, ArrowRightIcon } from "@/components/icons";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const item = TESTIMONIALS[active];

  return (
    <section id="cam-nhan" className="w-full bg-[#f7f5f1] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1100px] px-5 md:px-9">
        <div className="mb-12 text-center">
          <span className="mnd-pill font-display">Cảm nhận khách hàng</span>
          <h2 className="mt-6 text-4xl leading-tight text-ink lg:text-5xl">
            <span className="font-serif text-black/30">Niềm tin</span>{" "}
            <span className="font-display">được kiến tạo</span>
          </h2>
        </div>

        <div className="relative rounded-sm bg-white p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:p-14">
          <QuoteIcon className="mb-6 h-10 w-10 text-brand-bronze/40" />
          <blockquote
            key={active}
            className="text-xl font-light leading-relaxed text-ink md:text-[26px] md:leading-[1.5]"
          >
            &ldquo;{item.quote}&rdquo;
          </blockquote>

          <div className="mt-10 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-display text-sm tracking-wide text-ink">
                {item.name}
              </div>
              <div className="text-sm text-black/50">{item.role}</div>
            </div>
            <div className="ml-auto hidden gap-0.5 sm:flex">
              {Array.from({ length: item.rating }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-brand-bronze" />
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-6">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Cảm nhận ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === active ? "w-8 bg-ink" : "w-3 bg-black/20",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Cảm nhận tiếp theo"
              onClick={() => setActive((i) => (i + 1) % count)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
