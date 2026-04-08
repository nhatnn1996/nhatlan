"use client";

import { motion } from "motion/react";
import { Crown, Check, Zap, Star, Gem, ShieldCheck } from "lucide-react";

const tiers = [
  {
    name: "Silver",
    icon: ShieldCheck,
    points: "0 – 9.999",
    multiplier: "x1",
    color: "#9CA3AF",
    colorLight: "#F3F4F6",
    benefits: ["Tích điểm cơ bản", "Catalog quà tiêu chuẩn", "Hỗ trợ qua app"],
    featured: false,
  },
  {
    name: "Gold",
    icon: Star,
    points: "10.000 – 49.999",
    multiplier: "x1.2",
    color: "#E9A033",
    colorLight: "#FEF7EC",
    benefits: [
      "Hệ số điểm x1.2",
      "Ưu tiên hỗ trợ kỹ thuật",
      "Quà welcome hàng quý",
      "Flash deal sớm 1 giờ",
    ],
    featured: false,
  },
  {
    name: "Platinum",
    icon: Gem,
    points: "50.000 – 99.999",
    multiplier: "x1.5",
    color: "#06B6D4",
    colorLight: "#ECFEFF",
    benefits: [
      "Hệ số điểm x1.5",
      "Quà exclusive hàng quý",
      "Hotline ưu tiên 24/7",
      "Ưu đãi giao hàng nhanh",
      "Tham gia sự kiện VIP",
    ],
    featured: true,
  },
  {
    name: "Diamond",
    icon: Crown,
    points: "100.000+",
    multiplier: "x2",
    color: "#F59E0B",
    colorLight: "#FFFBEB",
    benefits: [
      "Hệ số điểm x2",
      "Account manager riêng",
      "Quà sinh nhật đặc biệt",
      "Ưu tiên hàng mới số 1",
      "Chính sách đổi trả VIP",
      "Sự kiện ProMetal Elite",
    ],
    featured: false,
  },
];

export default function MembershipTiers() {
  return (
    <section
      id="hang-thanh-vien"
      className="relative py-20 sm:py-28 bg-[#111111] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pm-grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#E9A033]/[0.04] rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#E9A033] uppercase tracking-[0.2em] mb-3">
            Hạng thành viên
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Mua nhiều hơn,{" "}
            <span className="pm-gradient-text">nhận nhiều hơn</span>
          </h2>
          <p className="mt-4 text-[#999] max-w-lg mx-auto text-sm sm:text-base">
            4 hạng thành viên — tích lũy điểm trong năm để mở khóa hệ số điểm
            và ưu đãi exclusive.
          </p>
        </motion.div>

        {/* Tier Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                tier.featured
                  ? "border-[#06B6D4]/30 bg-gradient-to-b from-[#06B6D4]/10 to-[#1A1A1A] lg:-mt-4 lg:mb-4"
                  : "border-[#2E2E2E] bg-[#1A1A1A] hover:border-[#E9A033]/20"
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]" />
              )}

              <div className="p-5 sm:p-6">
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: tier.color + "18" }}
                  >
                    <tier.icon size={20} style={{ color: tier.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-pm-outfit)" }}
                    >
                      {tier.name}
                    </h3>
                    {tier.featured && (
                      <span className="text-[9px] font-bold text-[#06B6D4] uppercase tracking-wider">
                        Phổ biến nhất
                      </span>
                    )}
                  </div>
                </div>

                {/* Multiplier */}
                <div className="mb-4">
                  <span
                    className="text-4xl font-bold"
                    style={{
                      color: tier.color,
                      fontFamily: "var(--font-pm-display)",
                    }}
                  >
                    {tier.multiplier}
                  </span>
                  <span className="text-sm text-[#888] ml-1.5">hệ số điểm</span>
                </div>

                {/* Points range */}
                <div className="px-3 py-2 rounded-lg bg-[#222] border border-[#2E2E2E] mb-5">
                  <span className="text-xs text-[#999]">Điểm tích lũy: </span>
                  <span className="text-xs font-semibold text-white">
                    {tier.points}
                  </span>
                </div>

                {/* Benefits */}
                <ul className="space-y-2">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: tier.color }}
                      />
                      <span className="text-sm text-[#ccc]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-[#666] mt-8"
        >
          * Hạng thành viên được tính dựa trên tổng điểm tích lũy trong năm.
          Reset vào ngày 01/01 hàng năm.
        </motion.p>
      </div>
    </section>
  );
}
