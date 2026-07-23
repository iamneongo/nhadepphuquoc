import { INTRO } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

export function AboutSection() {
  return (
    <section
      id="gioi-thieu"
      className="relative mx-auto w-full max-w-[1400px] overflow-hidden px-5 py-24 md:px-9 lg:py-36"
    >
      <div data-anim className="relative">
        <div className="flex items-center gap-4">
          <span className="h-px w-14 bg-brand-bronze" />
          <span className="mnd-pill font-display">{INTRO.eyebrow}</span>
        </div>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
          <h2 className="text-[15vw] leading-[1.05] text-ink sm:text-6xl lg:col-span-8 lg:text-[92px]">
            <span
              data-scrub
              data-y="26"
              className="block pb-3 font-serif leading-[1.3] text-black/35 lg:pb-5"
            >
              {INTRO.titleItalic}
            </span>
            <span className="block font-display leading-[1]">
              {INTRO.titleRest}
            </span>
          </h2>

          <div className="lg:col-span-4">
            <p className="text-[15px] leading-[1.95] text-black/60">
              {INTRO.paragraph}
            </p>
            <a
              href="#dich-vu"
              className="group mt-8 inline-flex items-center gap-3 font-display text-sm tracking-wide text-ink transition-colors hover:text-brand-bronze"
            >
              Khám phá dịch vụ
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-brand-bronze group-hover:bg-brand-bronze group-hover:text-white">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
