import { PARTNERS } from "@/lib/data";

function Row({ reverse }: { reverse?: boolean }) {
  // duplicate the list so the -50% translate loops seamlessly
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <div className="mnd-marquee overflow-hidden">
      <div
        className={`mnd-marquee-track flex w-max flex-nowrap items-center ${reverse ? "mnd-marquee-reverse" : ""}`}
      >
        {items.map((p, i) => (
          <span
            key={`${p.name}-${i}`}
            className="mx-10 flex shrink-0 items-center lg:mx-14"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.logo}
              alt={p.name}
              className="h-8 w-auto opacity-45 transition-opacity duration-300 hover:opacity-100 lg:h-9"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function PartnersMarquee() {
  return (
    <section className="w-full border-y border-black/10 bg-white py-16 lg:py-24">
      <div
        className="mx-auto mb-12 w-full max-w-[1400px] px-5 text-center md:px-9"
        data-anim
      >
        <span className="mnd-pill font-display">Đối tác &amp; vật liệu</span>
        <h2
          data-reveal="mask"
          className="mt-6 text-balance text-4xl leading-tight text-ink lg:text-5xl"
        >
          <span className="font-serif text-black/30">Đồng hành cùng</span>{" "}
          <span className="font-display">thương hiệu hàng đầu</span>
        </h2>
      </div>
      <Row />
    </section>
  );
}
