import { FOOTER } from "@/lib/data";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/icons";

const SOCIAL_ICONS = [YoutubeIcon, FacebookIcon, TiktokIcon, InstagramIcon];

export function SiteFooter() {
  return (
    <footer className="mnd-grid-pattern relative w-full bg-[#161616] text-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-9 lg:py-28">
        <h2
          data-reveal="mask"
          className="max-w-4xl text-balance py-2 font-serif text-5xl leading-[1.25] text-white sm:text-6xl lg:text-7xl"
        >
          {FOOTER.headings[0]}
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center" data-anim>
          <div>
            <a
              href="#"
              className="font-display relative inline-flex items-center justify-center px-14 py-5 text-sm tracking-[0.15em] text-white"
            >
              {/* corner-accented border box */}
              <span className="pointer-events-none absolute inset-0 border border-white/25" />
              <span className="pointer-events-none absolute -left-1 -top-1 h-3 w-3 border-l border-t border-white/60" />
              <span className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-white/60" />
              {FOOTER.contactLabel}
            </a>
            <p className="mt-8 max-w-sm text-sm italic leading-relaxed text-white/45">
              {FOOTER.tagline}
            </p>
          </div>

          <div className="flex gap-4 lg:justify-end">
            {FOOTER.socials.map((social, i) => {
              const Icon = SOCIAL_ICONS[i];
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:bg-white hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-xs text-white/40">
          © {new Date().getFullYear()} Nhà Đẹp Phú Quốc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
