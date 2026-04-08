"use client";

import { motion } from "motion/react";
import { Truck, Wrench, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Quản lý đơn hàng & Công nợ",
    description: "Nhà thầu có thể theo dõi tiến độ giao hàng theo thời gian thực kể từ khi xe xuất bến, kiểm tra công nợ ngay trên ứng dụng.",
  },
  {
    icon: Wrench,
    title: "Cổng hỗ trợ kỹ thuật",
    description: "Gửi yêu cầu bảo hành, báo lỗi sản phẩm bằng cách chụp ảnh. Đội ngũ kỹ thuật ProMetal sẽ tiếp nhận và xử lý trong 24h.",
  },
  {
    icon: GraduationCap,
    title: "Học viện ProMetal",
    description: "Module đào tạo kỹ thuật thi công. Nhà thầu hoàn thành khóa học để nhận chứng nhận thi công chuẩn và thưởng bonus điểm.",
  },
];

function MiniPhoneEcosystem() {
  return (
    <div className="relative w-[280px] h-[560px] rounded-[42px] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-[6px] pm-phone-shadow mx-auto">
      <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-[#FAFAF8] flex flex-col">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#111] rounded-full z-10" />
        
        {/* Header */}
        <div className="pt-12 pb-4 px-5 bg-white border-b border-[#E5E2DC]">
           <h3 className="text-lg font-bold text-[#111] text-center">Đơn hàng #PM-8820</h3>
           <p className="text-xs text-[#888] text-center mt-0.5">Dự án: Sunrise City</p>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-hidden">
           {/* Tracker Map Mock */}
           <div className="w-full h-40 bg-[#E5E2DC] rounded-2xl mb-5 relative overflow-hidden flex-shrink-0">
              {/* Map background placeholder */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
              
              {/* Path line */}
              <div className="absolute top-1/2 left-1/4 right-1/4 h-1 bg-[#16A34A] rounded-full opacity-30" />
              <div className="absolute top-1/2 left-1/4 w-1/2 h-1 bg-[#16A34A] rounded-full origin-left" style={{ animation: "pm-slide-right 3s ease-in-out infinite" }} />
              
              {/* Point A */}
              <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white border-[3px] border-[#111] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
              {/* Truck */}
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white shadow-md rounded-full -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-[#16A34A]">
                <Truck size={16} />
              </div>
              {/* Point B */}
              <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-white border-[3px] border-[#16A34A] rounded-full -translate-x-1/2 -translate-y-1/2 z-10" />
           </div>

           {/* Timeline */}
           <div className="space-y-4">
              <div className="flex gap-3">
                 <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A] flex items-center justify-center text-white text-[10px]">✓</div>
                    <div className="w-0.5 h-[20px] bg-[#16A34A]/30 flex-1 my-1" />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-[#111]">Đang vận chuyển</p>
                    <p className="text-xs text-[#888]">Tài xế Nguyễn Văn B — 0909 123 456</p>
                 </div>
              </div>
              <div className="flex gap-3">
                 <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#E5E2DC]" />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-[#888]">Dự kiến giao hàng</p>
                    <p className="text-xs text-[#888]">14:30 hôm nay</p>
                 </div>
              </div>
           </div>

           {/* Quick Support */}
           <div className="mt-8 bg-[#FEF7EC] rounded-2xl p-4 border border-[#E9A033]/20">
              <div className="flex items-start gap-3">
                 <div className="w-8 h-8 rounded-full bg-[#E9A033]/10 flex items-center justify-center flex-shrink-0 text-[#E9A033]">
                   <Wrench size={16} />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-[#111]">Cần hỗ trợ kỹ thuật?</p>
                    <p className="text-xs text-[#666] mt-0.5">Yêu cầu bảo hành vật tư tại công trình.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default function EcosystemFeatures() {
  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Phone */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2"
            style={{ animation: "pm-float 6s ease-in-out infinite" }}
          >
            <MiniPhoneEcosystem />
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <span className="inline-block text-xs font-semibold text-[#6366F1] uppercase tracking-[0.2em] mb-3 bg-indigo-50 px-3 py-1 rounded-full">
                Hệ Sinh Thái Vận Hành
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] leading-tight"
                style={{ fontFamily: "var(--font-pm-outfit)" }}
              >
                Số hóa mọi <span className="text-[#6366F1]">điểm chạm</span>
              </h2>
              <p className="mt-4 text-[#888] text-sm sm:text-base">
                Không chỉ là chương trình khuyến mãi, hệ sinh thái giúp ProMetal số hóa toàn bộ quy trình chăm sóc và tương tác với các đối tác phân phối và thi công.
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0 text-[#6366F1]">
                    <feat.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#111] mb-2" style={{ fontFamily: "var(--font-pm-outfit)" }}>
                      {feat.title}
                    </h3>
                    <p className="text-[15px] text-[#666] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
