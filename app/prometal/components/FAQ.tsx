"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Làm sao để tích điểm?",
    answer:
      "Rất đơn giản! Mỗi khi mua hàng ProMetal, bạn chỉ cần mở app lên, scan QR code trên hóa đơn hoặc nhập mã hóa đơn. Hệ thống sẽ tự động xác minh và cộng điểm vào tài khoản của bạn ngay lập tức. Tỷ lệ cơ bản là 1.000đ = 1 điểm, hệ số nhân có thể cao hơn tùy dòng sản phẩm và hạng thành viên.",
  },
  {
    question: "Điểm tích lũy có hết hạn không?",
    answer:
      "Có. Điểm tích lũy có hiệu lực 24 tháng kể từ ngày tích. App sẽ cảnh báo tự động trước 30 ngày, 7 ngày và 1 ngày khi điểm sắp hết hạn, giúp bạn không bỏ lỡ việc đổi quà.",
  },
  {
    question: "Hạng thành viên được tính như thế nào?",
    answer:
      "Hạng thành viên được xác định bởi tổng điểm tích lũy trong năm: Silver (0-9.999), Gold (10.000-49.999), Platinum (50.000-99.999) và Diamond (100.000+). Hạng được cập nhật tự động. Vào ngày 01/01 mỗi năm, hệ thống reset và đánh giá lại hạng dựa trên năm trước.",
  },
  {
    question: "Tôi có thể đổi quà gì?",
    answer:
      "Catalog quà rất đa dạng — bao gồm dụng cụ thi công (máy khoan, bộ tua vít, thước laser), thiết bị điện, quà tặng hàng gia dụng, và voucher chiết khấu cho đơn hàng tiếp theo. Quà được cập nhật thường xuyên và có hạn mức tồn kho rõ ràng.",
  },
  {
    question: "App có tính phí không?",
    answer:
      "Hoàn toàn miễn phí! App ProMetal Loyalty không thu bất kỳ phí nào. Bạn chỉ cần tải app, đăng ký tài khoản và bắt đầu tích điểm ngay.",
  },
  {
    question: "Tôi là thợ thi công, ít dùng smartphone, có sử dụng được không?",
    answer:
      "Chắc chắn rồi! App được thiết kế đặc biệt tối giản cho người dùng ít quen công nghệ — font chữ lớn, ít bước thao tác, hướng dẫn bằng hình ảnh. Chỉ cần mở app → bấm Scan → đưa hóa đơn vào khung là xong. Nếu cần hỗ trợ, gọi hotline 1900 xxxx bất kỳ lúc nào.",
  },
  {
    question: "Tài khoản đại lý và nhà thầu có khác nhau không?",
    answer:
      "Có. Đại lý (Dealer) theo dõi sản lượng tổng hàng năm và hưởng chiết khấu theo hạng. Nhà thầu (Contractor) có thêm tính năng tích điểm gộp theo công trình — hữu ích khi quản lý nhiều dự án cùng lúc. Thợ thi công có giao diện đơn giản nhất.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <span className="inline-block text-xs font-semibold text-[#E9A033] uppercase tracking-[0.2em] mb-3">
            Câu hỏi thường gặp
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#111] leading-tight"
            style={{ fontFamily: "var(--font-pm-outfit)" }}
          >
            Bạn cần biết <span className="pm-gradient-text-dark">thêm?</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`rounded-xl border transition-colors duration-300 ${
                openIndex === i
                  ? "border-[#E9A033]/30 bg-[#FFFCF5]"
                  : "border-[#E5E2DC] bg-white hover:border-[#E9A033]/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-start gap-3 px-5 py-4 text-left"
              >
                <div
                  className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    openIndex === i
                      ? "bg-[#E9A033] text-white"
                      : "bg-[#F3F1ED] text-[#888]"
                  }`}
                >
                  {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
                <span
                  className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                    openIndex === i ? "text-[#111]" : "text-[#333]"
                  }`}
                >
                  {faq.question}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-4 pl-14">
                      <p className="text-sm text-[#666] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
