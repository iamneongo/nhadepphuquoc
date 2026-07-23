import { HERO } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="w-full">
      {/* fullscreen video banner */}
      <div className="relative h-screen min-h-[560px] w-full overflow-hidden bg-ink">
        <div
          data-scrub
          data-scale-from="1"
          data-scale-to="1.15"
          className="pointer-events-none absolute inset-0"
        >
          <iframe
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${HERO.videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&playlist=${HERO.videoId}`}
            title="Nhà Đẹp Phú Quốc"
            allow="autoplay; encrypted-media"
            style={{ border: 0 }}
          />
        </div>
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO.poster})` }}
          aria-hidden
        />
      </div>
    </section>
  );
}
