"use client";

import { motion } from "motion/react";
import { TrendingUp, Users, SmartphoneNfc } from "lucide-react";

const impacts = [
  {
    icon: TrendingUp,
    title: "100% Data Insight",
    description: "Nắm giữ trực tiếp dữ liệu khách hàng cuối (nhà thầu, thợ thi công) thay vì bị giới hạn bởi đại lý cấp 1.",
    stat: "100%",
    statLabel: "Kiểm soát",
  },
  {
    icon: SmartphoneNfc,
    title: "Tỷ lệ tiếp cận 98%",
    description: "Push notification miễn phí trực tiếp qua App, thay cho SMS/Zalo tốn kém mà tỷ lệ đọc thấp.",
    stat: "98%",
    statLabel: "Open Rate",
  },
  {
    icon: Users,
    title: "Giảm 40% chi phí",
    description: "Loại bỏ hoàn toàn thẻ cứng, giảm chi phí nhân sự vận hành chương trình tích điểm thủ công truyền thống.",
    stat: "-40%",
    statLabel: "Chi phí",
  },
];

export default function BusinessImpact() {
  return (
    <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#16A34A] uppercase tracking-[0.2em] mb-3 bg-green-50 px-3 py-1 rounded-full">
            The ROI
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Lợi ích chiến lược cho <span className="pm-gradient-text-dark">ProMetal</span>
          </h2>
          <p className="mt-4 text-[#888] max-w-2xl mx-auto text-sm sm:text-base">
            Không chỉ là thẻ tích điểm, đây là công cụ thấu hiểu thị trường và tối ưu hóa chi phí vận hành cho doanh nghiệp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 rounded-[2rem] bg-[#FAFAF8] border border-[#E5E2DC]"
            >
              <div className="absolute top-8 right-8">
                <span className="text-4xl font-black text-[#E5E2DC] opacity-50 font-display">
                  {item.stat}
                </span>
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                <item.icon size={28} className="text-[#E9A033]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#111] mb-3" style={{ fontFamily: "var(--font-pm-outfit)" }}>
                {item.title}
              </h3>
              
              <p className="text-sm text-[#666] leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 pt-6 border-t border-[#E5E2DC]/60 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
                 <span className="text-xs font-semibold text-[#111] uppercase tracking-wider">{item.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
