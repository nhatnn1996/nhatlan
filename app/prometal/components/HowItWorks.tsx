"use client";

import { motion } from "motion/react";
import { Smartphone, ScanLine, Star, Gift } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Tải app & đăng ký",
    description:
      "Tải ứng dụng ProMetal trên App Store hoặc Google Play. Đăng ký bằng số điện thoại, xác minh OTP trong 30 giây.",
  },
  {
    icon: ScanLine,
    number: "02",
    title: "Scan hóa đơn",
    description:
      "Mỗi khi mua hàng, scan QR code trên hóa đơn hoặc nhập mã số. Hệ thống tự động xác minh với dữ liệu kho.",
  },
  {
    icon: Star,
    number: "03",
    title: "Tích điểm tự động",
    description:
      "Điểm được cộng ngay sau khi hóa đơn xác minh thành công. Theo dõi số dư và lịch sử tích điểm real-time.",
  },
  {
    icon: Gift,
    number: "04",
    title: "Đổi quà yêu thích",
    description:
      "Chọn quà trong catalog — dụng cụ, thiết bị, voucher. Nhận tại kho hoặc giao tận nơi. Đơn giản, minh bạch.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="cach-hoat-dong"
      className="relative py-20 sm:py-28 bg-white overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5E2DC] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#E9A033] uppercase tracking-[0.2em] mb-3">
            Cách hoạt động
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Chỉ <span className="pm-gradient-text-dark">4 bước</span> đơn giản
          </h2>
          <p className="mt-4 text-[#888] max-w-md mx-auto text-sm sm:text-base">
            Từ tải app đến nhận quà — mọi thứ được thiết kế tối giản cho trải
            nghiệm nhanh nhất.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-[#E9A033]/20 via-[#E9A033]/40 to-[#E9A033]/20" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#E9A033] to-[#F5C56A]"
              style={{
                maskImage:
                  "repeating-linear-gradient(90deg, transparent 0px, transparent 4px, black 4px, black 12px)",
                WebkitMaskImage:
                  "repeating-linear-gradient(90deg, transparent 0px, transparent 4px, black 4px, black 12px)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center"
              >
                {/* Step circle */}
                <div className="relative mx-auto w-[104px] h-[104px] mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#E9A033]/20" />

                  {/* Inner circle */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#FEF7EC] to-[#FDE68A]/30 flex flex-col items-center justify-center">
                    <step.icon
                      size={24}
                      className="text-[#E9A033] mb-0.5"
                      strokeWidth={1.8}
                    />
                    <span
                      className="text-[10px] font-bold text-[#CC8818]"
                      style={{ fontFamily: "var(--font-pm-display)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3
                  className="text-lg font-bold text-[#111] mb-2"
                  style={{ fontFamily: "var(--font-pm-outfit)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>

                {/* Mobile connecting arrow */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden flex justify-center my-4">
                    <svg
                      className="w-5 h-5 text-[#E9A033]/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14m0 0l-4-4m4 4l4-4" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
