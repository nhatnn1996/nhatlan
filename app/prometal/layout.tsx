import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./prometal.css";

const inter = Inter({
  variable: "--font-pm-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-pm-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-pm-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProMetal Loyalty — Tích Điểm & Đổi Quà Dành Cho Đại Lý",
  description:
    "Ứng dụng tích điểm thông minh dành riêng cho đại lý và nhà thầu ngành vật liệu xây dựng. Scan hóa đơn, tích điểm tự động, đổi quà hấp dẫn. Công ty CP Hiệp Vĩnh Phú.",
  keywords: [
    "ProMetal",
    "tích điểm",
    "đổi quà",
    "đại lý",
    "nhà thầu",
    "vật liệu xây dựng",
    "khung trần thạch cao",
  ],
  openGraph: {
    title: "ProMetal Loyalty — Tích Điểm & Đổi Quà",
    description:
      "Tích điểm thông minh, đổi quà dễ dàng. Dành riêng cho đại lý & nhà thầu ProMetal.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function ProMetalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`prometal ${inter.variable} ${outfit.variable} ${spaceGrotesk.variable}`}
      style={{ fontFamily: "var(--font-pm-inter), system-ui, sans-serif" }}
    >
      {children}
    </div>
  );
}
