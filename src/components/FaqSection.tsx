"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@/components/icons";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-9 lg:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start" data-anim>
          <span className="mnd-pill font-display">Hỏi &amp; Đáp</span>
          <h2
            data-reveal="mask"
            className="mt-6 text-balance text-4xl leading-[1.05] text-ink lg:text-5xl"
          >
            <span className="font-serif text-black/30">Câu hỏi</span>
            <br className="hidden sm:block" />{" "}
            <span className="font-display">thường gặp</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-black/55">
            Những băn khoăn phổ biến khi bắt đầu hành trình kiến tạo tổ ấm cùng
            Nhà Đẹp Phú Quốc.
          </p>
        </div>

        <div className="divide-y divide-black/10 border-t border-black/10" data-anim>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={cn(
                      "text-pretty text-lg transition-colors lg:text-xl",
                      isOpen ? "text-ink" : "text-black/70",
                    )}
                  >
                    {faq.question}
                  </span>
                  <PlusIcon
                    className={cn(
                      "h-5 w-5 shrink-0 text-ink transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-400 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm leading-[1.9] text-black/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
