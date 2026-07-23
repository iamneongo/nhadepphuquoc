"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!run || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [run, target, duration]);
  return value;
}

function Counter({
  value,
  suffix,
  label,
  run,
}: {
  value: number;
  suffix: string;
  label: string;
  run: boolean;
}) {
  const n = useCountUp(value, run);
  return (
    <div className="px-4 lg:px-10">
      <div className="font-display text-6xl tracking-tight text-ink lg:text-8xl">
        {n.toLocaleString("en-US")}
        {suffix}
      </div>
      <p className="mt-4 text-sm font-medium text-ink">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const { ref, visible } = useReveal({ threshold: 0.3 });
  return (
    <section
      ref={ref}
      className="mx-auto w-full max-w-[1400px] px-5 py-16 md:px-9 lg:py-24"
    >
      <div
        className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-black/10"
        data-anim
      >
        {STATS.map((s) => (
          <Counter
            key={s.label}
            value={s.value}
            suffix={s.suffix}
            label={s.label}
            run={visible}
          />
        ))}
      </div>
    </section>
  );
}
