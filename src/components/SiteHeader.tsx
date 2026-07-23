"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, MenuIcon } from "@/components/icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300",
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "",
      )}
    >
      <div className="mx-auto flex h-[84px] w-full items-center justify-between px-5 md:px-9 lg:h-[104px]">
        {/* logo */}
        <a href="#" className="block">
          <Image
            src="/images/logo-nhadep.png"
            alt="Nhà Đẹp Phú Quốc"
            width={626}
            height={239}
            className="h-10 w-auto object-contain lg:h-[52px]"
            priority
          />
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 text-[15px] font-medium text-ink transition-colors hover:text-brand-bronze"
              >
                {item.label}
                {item.children && <ChevronDownIcon className="h-4 w-4" />}
              </a>
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[240px] translate-y-2 bg-white p-2 opacity-0 shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-black/70 transition-colors hover:bg-black/5 hover:text-ink"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* right: desktop CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#lien-he"
            className="hidden bg-ink px-6 py-3.5 font-display text-sm tracking-wide text-white transition-colors hover:bg-brand-bronze lg:inline-flex lg:px-8"
          >
            Gửi yêu cầu
          </a>
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-ink transition-colors hover:bg-black hover:text-white lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* overlay */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* drawer */}
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
          <Image
            src="/images/logo-nhadep.png"
            alt="Nhà Đẹp Phú Quốc"
            width={626}
            height={239}
            className="h-9 w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Đóng menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-ink"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-black/5 py-1">
              <a
                href={item.href}
                onClick={onClose}
                className="block py-3 text-lg text-ink"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="pb-2 pl-4">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-black/55"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="border-t border-black/10 p-6">
          <a
            href="#lien-he"
            onClick={onClose}
            className="flex w-full items-center justify-center bg-ink px-6 py-4 font-display text-sm tracking-wide text-white"
          >
            Gửi yêu cầu
          </a>
        </div>
      </aside>
    </div>
  );
}
