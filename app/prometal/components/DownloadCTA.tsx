"use client";

import { motion } from "motion/react";
import { Smartphone, ArrowRight } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section
      id="tai-app"
      className="relative py-20 sm:py-28 bg-[#111111] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pm-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#E9A033]/[0.06] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E9A033] to-[#CC8818] mb-6 pm-glow-strong"
        >
          <Smartphone size={28} className="text-white" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-pm-outfit)" }}
        >
          Bắt đầu tích điểm{" "}
          <span className="pm-gradient-text">ngay hôm nay</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#999] text-base sm:text-lg max-w-xl mx-auto mb-8"
        >
          Tải app miễn phí, đăng ký trong 30 giây và bắt đầu tích điểm từ hóa
          đơn mua hàng đầu tiên.
        </motion.p>

        {/* Store Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10"
        >
          {/* App Store */}
          <a
            href="#"
            className="group flex items-center gap-3 px-6 py-3.5 bg-white rounded-2xl hover:bg-[#F5F5F5] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-w-[200px]"
          >
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
              <path
                d="M22.666 16.88c-.032-3.376 2.752-4.992 2.88-5.072-1.568-2.288-4-2.608-4.864-2.64-2.064-.216-4.048 1.216-5.088 1.216-1.056 0-2.672-1.2-4.4-1.168-2.256.032-4.352 1.328-5.504 3.344-2.368 4.08-.608 10.112 1.68 13.424 1.136 1.616 2.48 3.424 4.24 3.36 1.712-.064 2.352-1.104 4.416-1.104 2.048 0 2.64 1.104 4.432 1.072 1.84-.032 3.008-1.632 4.112-3.264 1.312-1.872 1.84-3.696 1.872-3.792-.048-.016-3.584-1.376-3.616-5.456l-.16.08z"
                fill="#111"
              />
              <path
                d="M19.312 7.392c.928-1.136 1.568-2.704 1.392-4.288-1.344.064-2.992.912-3.952 2.032-.864 1.008-1.632 2.64-1.424 4.192 1.504.112 3.04-.768 3.984-1.936z"
                fill="#111"
              />
            </svg>
            <div className="text-left">
              <p className="text-[9px] text-[#888] leading-none">
                Tải trên
              </p>
              <p className="text-sm font-bold text-[#111] leading-tight">
                App Store
              </p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="group flex items-center gap-3 px-6 py-3.5 bg-white rounded-2xl hover:bg-[#F5F5F5] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-w-[200px]"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.37 2.37 0 01-.61-1.6V3.414a2.37 2.37 0 01.609-1.6z" fill="#4285F4" />
              <path d="M17.445 8.347L5.17.755C4.59.414 3.94.253 3.31.321l10.48 10.48 3.655-2.454z" fill="#EA4335" />
              <path d="M3.31 23.679c.63.068 1.28-.093 1.86-.434l12.275-7.592-3.655-2.454L3.31 23.679z" fill="#34A853" />
              <path d="M20.852 10.286l-3.407-2.11-3.654 3.824 3.654 3.654 3.407-2.11a2.368 2.368 0 000-3.258z" fill="#FBBC04" />
            </svg>
            <div className="text-left">
              <p className="text-[9px] text-[#888] leading-none">
                Tải trên
              </p>
              <p className="text-sm font-bold text-[#111] leading-tight">
                Google Play
              </p>
            </div>
          </a>
        </motion.div>

        {/* QR Code area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex flex-col items-center"
        >
          <div className="w-28 h-28 bg-white rounded-2xl p-3 mb-3">
            {/* QR placeholder */}
            <div className="w-full h-full bg-[#F3F1ED] rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-5 grid-rows-5 gap-0.5 w-16 h-16">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-[1px] ${
                      [0, 1, 2, 4, 5, 6, 10, 12, 14, 18, 19, 20, 22, 23, 24].includes(
                        i
                      )
                        ? "bg-[#111]"
                        : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-[#666]">Quét QR để tải app</p>
        </motion.div>

        {/* Hotline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 pt-8 border-t border-[#2E2E2E]"
        >
          <p className="text-sm text-[#888]">
            Cần hỗ trợ?{" "}
            <a
              href="tel:19001234"
              className="text-[#E9A033] font-semibold hover:underline"
            >
              Gọi 1900 xxxx
            </a>{" "}
            hoặc nhắn tin qua{" "}
            <a
              href="#"
              className="text-[#E9A033] font-semibold hover:underline"
            >
              Zalo OA ProMetal
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
