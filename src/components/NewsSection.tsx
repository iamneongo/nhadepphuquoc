import Image from "next/image";
import { NEWS } from "@/lib/data";
import { PlusIcon } from "@/components/icons";

export function NewsSection() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-5 py-16 md:px-9 lg:py-24">
      <h2
        data-reveal="mask"
        className="mb-12 text-balance text-5xl leading-[1.05] text-ink lg:mb-16 lg:text-6xl"
      >
        <span className="font-serif text-6xl text-black/30 lg:text-7xl">
          Tin tức
        </span>
        <br className="hidden sm:block" />{" "}
        <span className="font-display">mới nhất</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-3 lg:gap-10" data-anim>
        {NEWS.map((card) => (
          <a key={card.title} href={card.href} className="group block">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <span className="absolute bottom-0 right-0 flex items-center gap-2 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink">
                Read <PlusIcon className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.15em] text-black/45">
              {card.category}
            </p>
            <h3
              data-split
              className="mt-2 font-display text-xl text-ink transition-colors group-hover:text-brand-bronze lg:text-2xl"
            >
              {card.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
