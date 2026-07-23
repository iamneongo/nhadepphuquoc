"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="lien-he" className="w-full bg-ink text-white">
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 py-20 md:px-9 lg:grid-cols-2 lg:gap-24 lg:py-28">
        {/* left: intro + info */}
        <div>
          <span className="mnd-pill font-display bg-white/10 text-white">
            {CONTACT.eyebrow}
          </span>
          <h2 className="mt-6 text-5xl leading-[1.05] lg:text-6xl">
            <span className="font-serif text-white/40">{CONTACT.title}</span>
            <br />
            <span className="font-display">{CONTACT.titleAccent}</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            {CONTACT.intro}
          </p>

          <ul className="mt-12 space-y-6">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-bronze">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <span className="text-sm text-white/75">
                {CONTACT.info.address}
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-bronze">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <a
                href={`tel:${CONTACT.info.phone.replace(/\s/g, "")}`}
                className="font-display text-lg tracking-wide transition-colors hover:text-brand-bronze"
              >
                {CONTACT.info.phone}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-brand-bronze">
                <MailIcon className="h-5 w-5" />
              </span>
              <a
                href={`mailto:${CONTACT.info.email}`}
                className="text-sm text-white/75 transition-colors hover:text-white"
              >
                {CONTACT.info.email}
              </a>
            </li>
          </ul>
        </div>

        {/* right: form */}
        <div className="bg-white p-8 text-ink md:p-10">
          {sent ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center text-center">
              <h3 className="font-serif text-3xl">Cảm ơn bạn!</h3>
              <p className="mt-3 max-w-xs text-sm text-black/60">
                Yêu cầu đã được ghi nhận. Nhà Đẹp Phú Quốc sẽ liên hệ với bạn
                trong thời gian sớm nhất.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Họ và tên" name="name" required />
                <Field label="Số điện thoại" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" />
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-black/50">
                  Loại dự án
                </label>
                <select
                  name="projectType"
                  className="w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn loại dự án
                  </option>
                  {CONTACT.projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-black/50">
                  Lời nhắn
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full resize-none border-b border-black/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink"
                  placeholder="Chia sẻ mong muốn của bạn..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 font-display text-sm tracking-wide text-white transition-colors hover:bg-brand-bronze"
              >
                Gửi yêu cầu tư vấn
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wide text-black/50"
      >
        {label}
        {required && <span className="text-brand-bronze"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={cn(
          "w-full border-b border-black/20 bg-transparent py-3 text-sm outline-none transition-colors focus:border-ink",
        )}
      />
    </div>
  );
}
