"use client";

import { motion } from "motion/react";
import {
  Bot,
  Camera,
  Flame,
  Dices,
  Trophy,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "OCR scan hóa đơn",
    description:
      "Chụp ảnh hóa đơn giấy — AI đọc tự động mã, ngày, số tiền. Không cần nhập tay, tích điểm nhanh hơn.",
    badge: "AI",
    badgeColor: "#06B6D4",
  },
  {
    icon: Bot,
    title: "AI gợi ý sản phẩm",
    description:
      "Phân tích lịch sử mua hàng, gợi ý sản phẩm phù hợp và dự báo thời điểm cần nhập hàng.",
    badge: "AI",
    badgeColor: "#06B6D4",
  },
  {
    icon: Flame,
    title: "Flash deal điểm",
    description:
      "Quà giới hạn trong khung giờ vàng, đếm ngược real-time. Push notification 30 phút trước khi bắt đầu.",
    badge: "Hot",
    badgeColor: "#EF4444",
  },
  {
    icon: Dices,
    title: "Quay số may mắn",
    description:
      "Dùng điểm quay vòng quay nhận quà ngẫu nhiên. Gamification tăng engagement, giới hạn theo hạng thành viên.",
    badge: "Mới",
    badgeColor: "#10B981",
  },
  {
    icon: Trophy,
    title: "Bảng xếp hạng khu vực",
    description:
      "Leaderboard theo tỉnh/thành và ngành nghề. Top 10 mỗi quý nhận quà đặc biệt từ ProMetal.",
    badge: null,
    badgeColor: null,
  },
  {
    icon: CalendarCheck,
    title: "Nhiệm vụ hàng ngày",
    description:
      "Hoàn thành nhiệm vụ mua hàng, chia sẻ, review để nhận điểm bonus. Streak thưởng check-in liên tiếp.",
    badge: null,
    badgeColor: null,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AdvancedFeatures() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#FAFAF8] overflow-hidden">
      <div className="absolute inset-0 pm-dot-pattern opacity-30" />

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
            Tính năng nâng cao
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Và còn{" "}
            <span className="pm-gradient-text-dark">nhiều hơn thế</span>
          </h2>
          <p className="mt-4 text-[#888] max-w-lg mx-auto text-sm sm:text-base">
            AI thông minh, gamification hấp dẫn, và cộng đồng sôi động — giữ
            chân người dùng mỗi ngày.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-6 border border-[#E5E2DC] hover:border-[#E9A033]/30 transition-all duration-400 pm-card-shadow hover:pm-card-shadow-hover"
            >
              {/* Left accent line */}
              <div className="absolute top-6 bottom-6 left-0 w-0.5 bg-gradient-to-b from-[#E9A033] to-[#F5C56A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#FEF7EC] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feat.icon
                    size={20}
                    className="text-[#E9A033]"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3
                      className="text-base font-bold text-[#111]"
                      style={{ fontFamily: "var(--font-pm-outfit)" }}
                    >
                      {feat.title}
                    </h3>
                    {feat.badge && (
                      <span
                        className="text-[9px] font-bold text-white px-1.5 py-0.5 rounded uppercase tracking-wider"
                        style={{ backgroundColor: feat.badgeColor! }}
                      >
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#888] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
