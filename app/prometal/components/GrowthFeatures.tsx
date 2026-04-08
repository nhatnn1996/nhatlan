"use client";

import { motion } from "motion/react";
import { Brain, Target, Share2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Demand Forecasting",
    description: "Phân tích chu kỳ mua hàng của thợ thầu, tự động cảnh báo cho Sales khi đại lý sắp cạn nguồn hàng hoặc có khả năng chuyển sang đối thủ.",
    badge: "AI & Data",
    badgeColor: "#06B6D4",
  },
  {
    icon: Target,
    title: "Push Sales Campaign",
    description: "Khởi tạo chiến dịch xả kho hoặc đẩy dòng SKU mới với cơ chế nhân điểm linh hoạt (Ví dụ: Mua 100 T-Bar tặng vé xem phim).",
    badge: "Doanh số",
    badgeColor: "#EF4444",
  },
  {
    icon: Share2,
    title: "Hệ thống Affiliate",
    description: "Đại lý mời gọi thầu phụ vào mạng lưới. Thợ cấp dưới mua hàng, đại lý được trích % hoa hồng điểm, tạo ra vòng lặp viral bán hàng.",
    badge: "Mạng lưới",
    badgeColor: "#10B981",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function GrowthFeatures() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#FAFAF8] overflow-hidden">
      <div className="absolute inset-0 pm-dot-pattern opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#06B6D4] uppercase tracking-[0.2em] mb-3">
            Tăng trưởng kinh doanh
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Biến Data thành <span className="text-[#06B6D4]">Doanh thu</span>
          </h2>
          <p className="mt-4 text-[#888] max-w-2xl mx-auto text-sm sm:text-base">
            Ứng dụng công nghệ AI và mô hình mạng lưới để dự báo nhu cầu tương lai, tạo chiến dịch xả hàng và liên tục mở rộng tập khách hàng.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl p-8 border border-[#E5E2DC] hover:border-[#06B6D4]/30 transition-all duration-400 pm-card-shadow hover:pm-card-shadow-hover"
            >
              <div className="absolute top-0 right-0 p-6">
                {feat.badge && (
                  <span
                    className="text-[10px] font-bold text-white px-2 py-1 rounded uppercase tracking-widest"
                    style={{ backgroundColor: feat.badgeColor }}
                  >
                    {feat.badge}
                  </span>
                )}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0 mb-6 group-hover:scale-110 group-hover:bg-cyan-100 transition-all duration-300">
                <feat.icon
                  size={32}
                  className="text-[#06B6D4]"
                  strokeWidth={1.5}
                />
              </div>

              <h3
                className="text-xl font-bold text-[#111] mb-3"
                style={{ fontFamily: "var(--font-pm-outfit)" }}
              >
                {feat.title}
              </h3>
              
              <p className="text-[#666] leading-relaxed text-sm">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
