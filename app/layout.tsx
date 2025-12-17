import type { Metadata } from "next";
import { Prompt, Rowdies as RowdiesFont } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const Rowdies = RowdiesFont({
  variable: "--font-rowdies",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ngọc Nhất & Thủy Lan - Wedding",
  description: "Trang mời cưới của Ngọc Nhất & Thủy Lan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${prompt.variable} ${Rowdies.variable} antialiased`}
        style={{ fontFamily: "var(--font-rowdies)" }}
      >
        {children}
      </body>
    </html>
  );
}
