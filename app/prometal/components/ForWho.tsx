"use client";

import { motion } from "motion/react";
import { Store, HardHat, Wrench } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "Đại lý",
    subtitle: "Dealer",
    description:
      "Mua hàng số lượng lớn, định kỳ. Hưởng chiết khấu theo hạng và ưu đãi ưu tiên theo sản lượng hàng năm.",
    highlight: "Chiết khấu theo hạng thành viên",
    color: "#E9A033",
    bgColor: "#FEF7EC",
  },
  {
    icon: HardHat,
    title: "Nhà thầu",
    subtitle: "Contractor",
    description:
      "Tích điểm gộp theo từng công trình. Nhận thưởng milestone khi đạt sản lượng nhất định.",
    highlight: "Tích điểm gộp theo dự án",
    color: "#D97706",
    bgColor: "#FEF3C7",
  },
  {
    icon: Wrench,
    title: "Thợ thi công",
    subtitle: "Worker",
    description:
      "Trải nghiệm đơn giản nhất — chỉ cần scan hóa đơn, xem điểm và đổi quà ngay.",
    highlight: "Scan & tích, nhanh 3 giây",
    color: "#B45309",
    bgColor: "#FDE68A",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ForWho() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#FAFAF8] overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pm-dot-pattern opacity-40" />

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
            Đối tượng sử dụng
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Được thiết kế riêng{" "}
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {audiences.map((item, i) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className={`group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E2DC] hover:border-[#E9A033]/40 transition-all duration-500 pm-card-shadow hover:pm-card-shadow-hover ${i === 0 ? "md:mt-0" : i === 1 ? "md:mt-6" : "md:mt-12"
                }`}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: item.bgColor }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>

              {/* Title */}
              <div className="mb-3">
                <h3
                  className="text-xl font-bold text-[#111]"
                  style={{ fontFamily: "var(--font-pm-outfit)" }}
                >
                  {item.title}
                </h3>
                <span className="text-xs text-[#999]">{item.subtitle}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#666] leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlight */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  backgroundColor: item.bgColor,
                  color: item.color,
                }}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                </svg>
                {item.highlight}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-[#E9A033] to-[#F5C56A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
