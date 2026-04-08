"use client";

import { motion } from "motion/react";
import { ScanLine, Gift, Crown, BookOpen } from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "Tích điểm qua hóa đơn",
    tag: "Core",
    description:
      "Scan QR hoặc nhập mã hóa đơn — hệ thống tự động quy đổi điểm theo sản phẩm và số lượng. Tỷ lệ linh hoạt theo từng dòng hàng.",
    details: [
      "1.000đ = 1 điểm (tùy cấu hình)",
      "Tích điểm real-time sau xác minh",
      "Lịch sử giao dịch đầy đủ",
    ],
    screen: "scan",
  },
  {
    icon: Gift,
    title: "Catalog quà đổi điểm",
    tag: "Core",
    description:
      "Đổi điểm lấy quà vật lý — dụng cụ thi công, thiết bị điện, voucher chiết khấu. Tồn kho real-time, giao tận nơi hoặc nhận tại kho.",
    details: [
      "Quà vật lý & voucher chiết khấu",
      "Giao tận nơi hoặc nhận tại kho",
      "Theo dõi trạng thái đổi quà",
    ],
    screen: "gift",
  },
  {
    icon: Crown,
    title: "Hạng thành viên VIP",
    tag: "Core",
    description:
      "4 hạng Silver → Gold → Platinum → Diamond. Mỗi hạng mở khóa hệ số tích điểm và ưu đãi exclusive riêng.",
    details: [
      "Hệ số điểm x1 → x2",
      "Quà exclusive theo hạng",
      "Tự động nâng hạng",
    ],
    screen: "tier",
  },
  {
    icon: BookOpen,
    title: "Catalog & tài liệu kỹ thuật",
    tag: "Core",
    description:
      "Xem toàn bộ danh mục sản phẩm, tải tài liệu kỹ thuật, video hướng dẫn thi công. Bookmark sản phẩm hay dùng.",
    details: [
      "Đầy đủ catalog sản phẩm",
      "Tài liệu kỹ thuật & video",
      "Bookmark sản phẩm yêu thích",
    ],
    screen: "catalog",
  },
];

function MiniPhone({
  type,
}: {
  type: "scan" | "gift" | "tier" | "catalog";
}) {
  return (
    <div className="relative w-[220px] h-[440px] rounded-[32px] bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] p-[5px] pm-phone-shadow">
      <div className="relative w-full h-full rounded-[27px] overflow-hidden bg-[#FAFAF8]">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] rounded-full z-10" />

        {/* Screen Content */}
        <div className="h-full flex flex-col pt-10">
          {type === "scan" && (
            <>
              <div className="px-4 pb-3 bg-gradient-to-b from-[#E9A033] to-[#D4911F]">
                <p className="text-white font-bold text-sm">Scan hóa đơn</p>
                <p className="text-white/60 text-[9px]">
                  Quét QR để tích điểm
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full aspect-square border-2 border-dashed border-[#E9A033]/40 rounded-2xl flex items-center justify-center relative">
                  <div className="absolute inset-4 border border-[#E9A033]/20 rounded-xl" />
                  <div className="text-center">
                    <ScanLine size={32} className="mx-auto text-[#E9A033] mb-2" />
                    <p className="text-[10px] text-[#888]">Đưa QR vào khung</p>
                  </div>
                  {/* Scan line animation */}
                  <div className="absolute left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#E9A033] to-transparent top-1/3 opacity-70" style={{ animation: "pm-float 2s ease-in-out infinite" }} />
                </div>
              </div>
              <div className="px-4 py-3 border-t border-[#E5E2DC]">
                <div className="bg-[#FEF7EC] rounded-xl p-3 text-center">
                  <p className="text-[10px] text-[#888]">Hoặc nhập mã</p>
                  <div className="mt-1 h-7 bg-white rounded-lg border border-[#E5E2DC]" />
                </div>
              </div>
            </>
          )}

          {type === "gift" && (
            <>
              <div className="px-4 pb-3 bg-gradient-to-b from-[#E9A033] to-[#D4911F]">
                <p className="text-white font-bold text-sm">Đổi quà</p>
                <p className="text-white/60 text-[9px]">Bạn có 24,580 điểm</p>
              </div>
              <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden">
                {[
                  { name: "Máy khoan Bosch", pts: "5,000", hot: true },
                  { name: "Bộ tua vít đa năng", pts: "2,500", hot: false },
                  { name: "Voucher 500K", pts: "8,000", hot: true },
                  { name: "Thước laser mini", pts: "3,200", hot: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white rounded-xl p-2.5 border border-[#E5E2DC]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FEF7EC] flex items-center justify-center text-sm flex-shrink-0">
                      🎁
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-[#111] truncate">
                        {item.name}
                      </p>
                      <p className="text-[9px] text-[#E9A033] font-bold">
                        {item.pts} điểm
                      </p>
                    </div>
                    {item.hot && (
                      <span className="text-[7px] px-1.5 py-0.5 bg-red-50 text-red-500 font-bold rounded-full">
                        HOT
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {type === "tier" && (
            <>
              <div className="px-4 pb-3 bg-gradient-to-b from-[#E9A033] to-[#D4911F]">
                <p className="text-white font-bold text-sm">Hạng thành viên</p>
                <p className="text-white/60 text-[9px]">Cấp bậc của bạn</p>
              </div>
              <div className="flex-1 px-3 py-3 space-y-2">
                {[
                  { tier: "Diamond", pts: "100K+", mult: "x2", active: false, color: "#6366F1" },
                  { tier: "Platinum", pts: "50K+", mult: "x1.5", active: false, color: "#06B6D4" },
                  { tier: "Gold", pts: "10K+", mult: "x1.2", active: true, color: "#E9A033" },
                  { tier: "Silver", pts: "0+", mult: "x1", active: false, color: "#9CA3AF" },
                ].map((item) => (
                  <div
                    key={item.tier}
                    className={`flex items-center gap-2.5 rounded-xl p-2.5 border ${
                      item.active
                        ? "border-[#E9A033] bg-[#FEF7EC]"
                        : "border-[#E5E2DC] bg-white"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: item.color + "18" }}
                    >
                      <Crown size={14} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <p className="text-[10px] font-bold text-[#111]">
                          {item.tier}
                        </p>
                        {item.active && (
                          <span className="text-[7px] px-1 py-0.5 bg-[#E9A033] text-white rounded font-bold">
                            BẠN
                          </span>
                        )}
                      </div>
                      <p className="text-[8px] text-[#888]">{item.pts} điểm</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#E9A033]">
                      {item.mult}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}

          {type === "catalog" && (
            <>
              <div className="px-4 pb-3 bg-gradient-to-b from-[#E9A033] to-[#D4911F]">
                <p className="text-white font-bold text-sm">Sản phẩm</p>
                <p className="text-white/60 text-[9px]">Catalog ProMetal</p>
              </div>
              <div className="px-3 py-2">
                <div className="h-7 bg-white rounded-lg border border-[#E5E2DC] px-2 flex items-center">
                  <span className="text-[9px] text-[#999]">🔍 Tìm sản phẩm...</span>
                </div>
              </div>
              <div className="flex-1 px-3 grid grid-cols-2 gap-2 overflow-hidden">
                {[
                  "Khung trần nổi",
                  "Thanh chính T-Bar",
                  "Thanh phụ Cross-T",
                  "Phụ kiện treo",
                ].map((name, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-[#E5E2DC] p-2"
                  >
                    <div className="aspect-square bg-[#F3F1ED] rounded-lg mb-1.5 flex items-center justify-center">
                      <span className="text-lg">📦</span>
                    </div>
                    <p className="text-[8px] font-semibold text-[#111] leading-tight">
                      {name}
                    </p>
                    <p className="text-[7px] text-[#E9A033] font-bold mt-0.5">
                      x{(1 + i * 0.5).toFixed(1)} điểm
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CoreFeatures() {
  return (
    <section id="tinh-nang" className="relative py-20 sm:py-28 bg-[#FAFAF8]">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs font-semibold text-[#E9A033] uppercase tracking-[0.2em] mb-3 bg-[#FEF7EC] px-3 py-1 rounded-full">
            Hệ Thống Trải Nghiệm Khách Hàng (Loyalty)
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Giữ chân thầu thợ bằng <span className="pm-gradient-text-dark">Giá trị thực</span>
          </h2>
          <p className="mt-4 text-[#888] max-w-lg mx-auto text-sm sm:text-base">
            Xây dựng lòng trung thành bằng việc đem lại đặc quyền tự động thông qua Tích điểm, Hạng thành viên và kho đổi quà đa dạng.
          </p>
        </motion.div>

        {/* Feature Rows */}
        <div className="space-y-20 sm:space-y-28">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col items-center gap-10 lg:gap-16 ${
                i % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              {/* Text Side */}
              <div className="flex-1 max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF7EC] flex items-center justify-center">
                    <feat.icon size={20} className="text-[#E9A033]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#E9A033] uppercase tracking-wider px-2 py-0.5 bg-[#FEF7EC] rounded">
                    {feat.tag}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#111] mb-3"
                  style={{ fontFamily: "var(--font-pm-outfit)" }}
                >
                  {feat.title}
                </h3>

                <p className="text-[#666] leading-relaxed mb-6 text-sm sm:text-base">
                  {feat.description}
                </p>

                <ul className="space-y-2.5">
                  {feat.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5">
                      <svg
                        className="w-5 h-5 text-[#E9A033] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        />
                      </svg>
                      <span className="text-sm text-[#555]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Phone Side */}
              <div className="flex-shrink-0" style={{ animation: "pm-float-slow 6s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}>
                <MiniPhone type={feat.screen as "scan" | "gift" | "tier" | "catalog"} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
