import type { Metadata } from "next";
import { Anybody } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const anybody = Anybody({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

// Primary display font — strong bold caps for headings & UI accents
const youngBold = localFont({
  src: "./fonts/Young-Bold.otf",
  variable: "--font-display",
  display: "swap",
});

// Accent subfont — elegant handwritten script for elegant/italic display words
const mrDakota = localFont({
  src: "./fonts/Fz-MrDakota.ttf",
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = "https://nhadepphuquoc.vn";
const SITE_NAME = "Nhà Đẹp Phú Quốc";
const SITE_TITLE = "Nhà Đẹp Phú Quốc — Thiết kế & Thi công Nội thất Cao cấp";
const SITE_DESC =
  "Nhà Đẹp Phú Quốc — thiết kế kiến trúc & nội thất cao cấp, thi công trọn gói villa, căn hộ, resort, showroom tại Phú Quốc. Lắng nghe và đồng hành.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Nhà Đẹp Phú Quốc",
  },
  description: SITE_DESC,
  keywords: [
    "Nhà Đẹp Phú Quốc",
    "thiết kế nội thất Phú Quốc",
    "thi công nội thất",
    "thiết kế kiến trúc",
    "thiết kế villa biệt thự",
    "nội thất cao cấp",
  ],
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nhà Đẹp Phú Quốc — Thiết kế & Thi công Nội thất",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/seo/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${anybody.variable} ${youngBold.variable} ${mrDakota.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
