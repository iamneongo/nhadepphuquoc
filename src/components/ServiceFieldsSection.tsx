import Image from "next/image";
import { FIELDS } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

export function ServiceFieldsSection() {
  return (
    <section
      id="linh-vuc"
      className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-9 lg:py-28"
    >
      <div className="mb-14 max-w-2xl" data-anim>
        <span className="mnd-pill font-display">Lĩnh vực thi công</span>
        <h2
          data-reveal="mask"
          className="mt-6 text-balance text-4xl leading-[1.1] text-ink lg:text-5xl"
        >
          <span className="block pb-2 font-serif text-5xl leading-[1.2] text-black/30 lg:text-6xl">
            Giải pháp
          </span>
          <span className="block font-display">cho mọi không gian</span>
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" data-anim>
        {FIELDS.map((field) => (
          <a
            key={field.number}
            href="#lien-he"
            className="group relative block aspect-[4/5] overflow-hidden"
          >
            <Image
              src={field.image}
              alt={field.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            {/* dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-7 text-white">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm tracking-widest text-white/70">
                  {field.number}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  {field.subtitle}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl leading-tight lg:text-3xl">
                  {field.title}
                </h3>
                <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                  {field.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-bronze">
                  Xem chi tiết
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
