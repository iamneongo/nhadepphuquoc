import { SERVICES } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

export function ServicesSection() {
  return (
    <section
      id="dich-vu"
      className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-9 lg:py-28"
    >
      <div className="mb-12 max-w-2xl lg:mb-16" data-anim>
        <span className="mnd-pill font-display">Dịch vụ cung cấp</span>
        <h2
          data-reveal="mask"
          className="mt-6 text-balance text-5xl leading-[1.05] text-ink lg:text-6xl"
        >
          <span className="font-serif text-black/30">Kiến tạo</span>{" "}
          <span className="font-display">trọn vẹn</span>
        </h2>
      </div>

      <div className="border-t border-black/10" data-anim>
        {SERVICES.map((s) => (
          <a
            key={s.index}
            href="#linh-vuc"
            className="group grid grid-cols-1 items-start gap-5 border-b border-black/10 py-9 transition-colors duration-500 hover:bg-[#faf8f4] md:grid-cols-12 md:gap-8 md:px-4 lg:py-12"
          >
            {/* number */}
            <div className="font-display text-5xl leading-none text-black/15 transition-colors duration-500 group-hover:text-brand-bronze md:col-span-2 lg:text-6xl">
              {s.index}
            </div>

            {/* title */}
            <h3 className="text-balance text-3xl leading-tight text-ink md:col-span-4 lg:text-[38px]">
              <span className="font-serif">{s.titleItalic}</span>
              <br />
              <span className="font-display">{s.titleRest}</span>
            </h3>

            {/* description */}
            <p className="text-pretty text-[15px] leading-[1.9] text-black/55 md:col-span-5">
              {s.description}
            </p>

            {/* arrow */}
            <div className="hidden justify-end md:col-span-1 md:flex">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 text-ink transition-all duration-500 group-hover:border-brand-bronze group-hover:bg-brand-bronze group-hover:text-white">
                <ArrowRightIcon className="h-5 w-5 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
