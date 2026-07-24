"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

/**
 * Smooth-scroll storytelling engine.
 *
 * Lenis drives the window scroll and is synced to GSAP's ticker so every
 * ScrollTrigger effect stays perfectly in step with the smoothed scroll.
 *
 * Declarative hooks (add the attribute in JSX, no per-component JS):
 *  - [data-anim]                 → children fade + rise in, staggered
 *  - [data-reveal] (opt ="mask", data-reveal-delay)
 *                                → single element fades/rises in; "mask" unveils
 *                                  upward via clip-path (safe on nested-span titles)
 *  - [data-split]                → heading words rise out of a mask
 *  - [data-parallax]             → inner <img> drifts vertically (scrub)
 *  - [data-hscroll] > [data-hscroll-track]
 *                                → pin section, translate track horizontally
 *  - [data-pin] (opt data-pin-end="+=100%")
 *                                → pin element while scrolling past
 *  - [data-scrub] (opt data-y, data-scale)
 *                                → custom scrubbed transform across viewport
 *
 * Respects prefers-reduced-motion. Horizontal-scroll runs on all viewports;
 * the simple [data-pin] helper stays desktop-only (native flow on mobile).
 */
export function ScrollFX() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Touch devices scroll natively — Lenis' smooth wheel-scroll is a desktop
    // enhancement. ScrollTrigger listens to native scroll on its own, so the
    // reveal/parallax/scrub effects still run on mobile; we just don't route
    // them through Lenis (which would otherwise starve them of scroll updates).
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;
    const useLenis = !reduced && !isTouch;

    // Flag the document synchronously (before any paint work below) so the
    // anti-FOUC CSS can pre-hide animated elements and GSAP owns the reveal —
    // avoids the flash-then-hide jump. Reduced-motion keeps everything visible.
    if (!reduced) document.documentElement.classList.add("fx-ready");

    gsap.registerPlugin(ScrollTrigger);

    // --- Lenis smooth scroll (desktop), synced to GSAP ticker ---
    let lenis: Lenis | null = null;
    let rafCallback: ((time: number) => void) | null = null;
    let onAnchorClick: ((e: MouseEvent) => void) | null = null;
    if (useLenis) {
      lenis = new Lenis({
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      lenis.on("scroll", ScrollTrigger.update);
      rafCallback = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(rafCallback);
      gsap.ticker.lagSmoothing(0);
    }

    // smooth in-page anchor navigation (nav links + CTAs) — Lenis on desktop,
    // native scroll with header offset on touch
    if (!reduced) {
      onAnchorClick = (e: MouseEvent) => {
        const a = (e.target as HTMLElement)?.closest?.(
          'a[href^="#"]',
        ) as HTMLAnchorElement | null;
        if (!a) return;
        const id = a.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, { offset: -96 });
        } else {
          const top =
            (target as HTMLElement).getBoundingClientRect().top +
            window.scrollY -
            96;
          window.scrollTo({ top, behavior: "smooth" });
        }
      };
      document.addEventListener("click", onAnchorClick);
    }

    const ctx = gsap.context(() => {
      // --- fade-up stagger ---
      gsap.utils.toArray<HTMLElement>("[data-anim]").forEach((el) => {
        const items = el.hasAttribute("data-anim-self")
          ? [el]
          : gsap.utils
              .toArray<HTMLElement>(":scope > *", el)
              // children with their own [data-reveal] manage themselves
              .filter((c) => !c.hasAttribute("data-reveal"));
        if (reduced) {
          gsap.set(items, { opacity: 1, y: 0 });
          return;
        }
        gsap.set(items, { opacity: 0, y: 60 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 82%",
          once: true,
          onEnter: () =>
            gsap.to(items, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.12,
            }),
        });
      });

      // --- split-text mask reveal ---
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        if (el.dataset.splitDone) return;
        el.dataset.splitDone = "1";
        const words = (el.textContent || "").trim().split(/\s+/);
        el.innerHTML = words
          .map(
            (w) =>
              `<span class="inline-block overflow-hidden align-bottom"><span class="mnd-word inline-block will-change-transform">${w}</span></span>`,
          )
          .join(" ");
        const inner = el.querySelectorAll<HTMLElement>(".mnd-word");
        if (reduced) {
          gsap.set(inner, { yPercent: 0 });
          return;
        }
        gsap.set(inner, { yPercent: 115 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(inner, {
              yPercent: 0,
              duration: 0.9,
              ease: "power4.out",
              stagger: 0.06,
            }),
        });
      });

      // --- markup-safe reveal (works on headings with nested spans) ---
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const mask = el.dataset.reveal === "mask";
        const delay = parseFloat(el.dataset.revealDelay || "0");
        if (reduced) {
          gsap.set(el, { opacity: 1, y: 0, clipPath: "none" });
          return;
        }
        const from = mask
          ? { opacity: 1, y: 20, clipPath: "inset(0 0 100% 0)" }
          : { opacity: 0, y: 24 };
        const to = mask
          ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
          : { opacity: 1, y: 0 };
        gsap.set(el, from);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(el, {
              ...to,
              duration: mask ? 0.9 : 0.8,
              delay,
              ease: "power3.out",
              onStart: () => (el.style.willChange = "transform, opacity"),
              onComplete: () => (el.style.willChange = ""),
            }),
        });
      });

      if (reduced) {
        ScrollTrigger.refresh();
        return;
      }

      // --- parallax images ---
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const img = el.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // --- custom scrubbed transforms ---
      gsap.utils.toArray<HTMLElement>("[data-scrub]").forEach((el) => {
        const y = parseFloat(el.dataset.y || "0");
        const scaleFrom = parseFloat(el.dataset.scaleFrom || "1");
        const scaleTo = parseFloat(el.dataset.scaleTo || "1");
        gsap.fromTo(
          el,
          { y: y ? -y : 0, scale: scaleFrom },
          {
            y: y ? y : 0,
            scale: scaleTo,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // --- horizontal scroll: pin section, translate track (all viewports) ---
      gsap.utils.toArray<HTMLElement>("[data-hscroll]").forEach((section) => {
        const track = section.querySelector<HTMLElement>(
          "[data-hscroll-track]",
        );
        if (!track) return;
        const distance = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });

      // desktop-only simple pin (mobile keeps native flow)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        // --- simple pin ---
        gsap.utils.toArray<HTMLElement>("[data-pin]").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top top",
            end: el.dataset.pinEnd || "+=60%",
            pin: true,
            pinSpacing: el.dataset.pinSpacing !== "false",
            scrub: true,
          });
        });
      });

      ScrollTrigger.refresh();
    });

    // Custom fonts (Young Bold / MrDakota) swap in after first paint and change
    // heading heights — recompute trigger positions so reveals stay aligned.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("fx-ready");
      if (onAnchorClick) document.removeEventListener("click", onAnchorClick);
      if (rafCallback) gsap.ticker.remove(rafCallback);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
