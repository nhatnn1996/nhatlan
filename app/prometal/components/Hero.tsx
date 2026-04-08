"use client";

import { motion } from "motion/react";
import { ArrowRight, Smartphone } from "lucide-react";

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="absolute inset-0 blur-[80px] bg-[#E9A033]/20 rounded-full scale-75" />

      {/* Phone frame */}
      <div className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] rounded-[42px] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-[6px] pm-phone-shadow">
        {/* Inner bezel */}
        <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-[#FAFAF8]">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#111] rounded-full z-10" />

          {/* App Screen Content */}
          <div className="h-full flex flex-col">
            {/* Status bar area */}
            <div className="h-12" />

            {/* App Header */}
            <div className="px-5 pt-2 pb-4 bg-gradient-to-b from-[#E9A033] to-[#D4911F]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <span className="text-white/90 text-xs font-medium">
                    ProMETAL
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/60" />
                </div>
              </div>
              <p className="text-white/70 text-[10px] mb-0.5">Xin chào,</p>
              <p className="text-white font-bold text-base">Nguyễn Văn A</p>
            </div>

            {/* Points Card */}
            <div className="px-4 -mt-2 relative z-10">
              <div className="bg-white rounded-2xl p-4 shadow-lg shadow-black/5 border border-[#E5E2DC]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-[#888] uppercase tracking-wider font-medium">
                    Điểm tích lũy
                  </span>
                  <span className="text-[9px] px-2 py-0.5 bg-[#FEF3C7] text-[#92400E] rounded-full font-semibold">
                    Gold ★
                  </span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-[#111] tracking-tight">
                    24,580
                  </span>
                  <span className="text-xs text-[#888] mb-1.5">điểm</span>
                </div>
                <div className="mt-2.5 h-1.5 bg-[#F3F1ED] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#E9A033] to-[#F5C56A]"
                    style={{ width: "62%" }}
                  />
                </div>
                <p className="text-[9px] text-[#888] mt-1.5">
                  Còn 25,420 điểm để lên Platinum
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="px-4 mt-4">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { icon: "📷", label: "Scan" },
                  { icon: "🎁", label: "Đổi quà" },
                  { icon: "⭐", label: "Hạng" },
                  { icon: "📦", label: "Catalog" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-1 py-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FEF7EC] flex items-center justify-center text-sm">
                      {item.icon}
                    </div>
                    <span className="text-[9px] text-[#555] font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div className="px-4 mt-4 flex-1">
              <p className="text-[10px] text-[#888] font-semibold uppercase tracking-wider mb-2">
                Giao dịch gần đây
              </p>
              {[
                {
                  name: "Khung trần nổi CT-04",
                  pts: "+450",
                  date: "Hôm nay",
                },
                {
                  name: "Thanh chính T-Bar",
                  pts: "+280",
                  date: "Hôm qua",
                },
              ].map((tx, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5 border-b border-[#F3F1ED] last:border-0"
                >
                  <div>
                    <p className="text-[11px] font-medium text-[#111]">
                      {tx.name}
                    </p>
                    <p className="text-[9px] text-[#999]">{tx.date}</p>
                  </div>
                  <span className="text-xs font-bold text-[#16A34A]">
                    {tx.pts}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="flex items-center justify-around py-3 border-t border-[#E5E2DC] bg-white">
              {["🏠", "🔍", "📷", "🎁", "👤"].map((icon, i) => (
                <div
                  key={i}
                  className={`text-sm ${i === 0 ? "opacity-100" : "opacity-40"
                    }`}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#141414]">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 pm-grid-pattern opacity-60" />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#E9A033]/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#E9A033]/[0.05] rounded-full blur-[100px]" />

        {/* Diagonal lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diag"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="40"
                  stroke="#E9A033"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 w-full py-24 sm:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left max-w-xl lg:max-w-none">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E9A033]/10 border border-[#E9A033]/20 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E9A033] animate-pulse" />
              <span className="text-xs font-medium text-[#E9A033]">
                Dành cho đại lý & nhà thầu ProMetal
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight text-white mb-5"
              style={{ fontFamily: "var(--font-pm-display)" }}
            >
              Tăng trưởng.
              <br />
              <span className="pm-gradient-text">Quản lý.</span>
              <br />
              Giữ chân.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#999] leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
            >
              Giải pháp chuyển đổi số toàn diện: Thúc đẩy doanh số, tối ưu vận hành
              và quản lý kênh phân phối tự động.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#tai-app")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#111] bg-gradient-to-r from-[#E9A033] to-[#F5C56A] rounded-2xl hover:shadow-[0_0_32px_rgba(233,160,51,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Smartphone size={18} />
                Tải App Ngay
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() =>
                  document
                    .querySelector("#tinh-nang")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/80 border border-white/15 rounded-2xl hover:border-[#E9A033]/40 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
              >
                Tìm hiểu thêm
              </button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-xs text-[#666]"
            >
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  />
                </svg>
                Miễn phí triển khai
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  />
                </svg>
                Tích hợp ERP
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  />
                </svg>
                Bảo mật Data
              </div>
            </motion.div>
          </div>

          {/* Right — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex-shrink-0"
            style={{ animation: "pm-float-slow 6s ease-in-out infinite" }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[white]" />
    </section>
  );
}
