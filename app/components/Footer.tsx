"use client";

import { motion } from "motion/react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "💕", label: "Facebook", href: "#" },
    { icon: "📷", label: "Instagram", href: "#" },
    { icon: "🎥", label: "YouTube", href: "#" },
    { icon: "💬", label: "Messenger", href: "#" },
  ];

  const quickLinks = [
    { label: "Trang Chủ", id: "hero" },
    { label: "Câu Chuyện Tình Yêu", id: "story" },
    { label: "Thông Tin Sự Kiện", id: "events" },
    { label: "Xác Nhận Tham Dự", id: "rsvp" },
  ];

  return (
    <footer
      id="contact"
      className="text-white py-24"
      style={{ background: "#2C3E2F" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Branding */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h3
                className="text-3xl font-black uppercase mb-2"
                style={{ color: "#A8D5BA" }}
              >
                Ngọc Nhất
              </h3>
              <h3
                className="text-3xl font-black uppercase"
                style={{ color: "#A8D5BA" }}
              >
                Thùy Lan
              </h3>
              <div
                className="h-1 w-12 mt-3"
                style={{ background: "#C41E3A" }}
              ></div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#B8C9BA" }}>
              Cảm ơn quý vị đã là phần của câu chuyện tình yêu của chúng tôi.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">
              Liên Kết Nhanh
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() =>
                      document.getElementById(link.id)?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="text-sm transition-colors hover:text-white flex items-center gap-2"
                    style={{ color: "#B8C9BA" }}
                  >
                    <span>→</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">
              Liên Hệ Với Chúng Tôi
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">📱</span>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "#999" }}
                  >
                    Điện Thoại
                  </p>
                  <a
                    href="tel:0966643223"
                    className="text-sm font-semibold hover:text-white transition-colors"
                    style={{ color: "#B8C9BA" }}
                  >
                    0966 643 223
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">✉️</span>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "#999" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:newbie.dev.js@gmail.com"
                    className="text-sm font-semibold hover:text-white transition-colors break-all"
                    style={{ color: "#B8C9BA" }}
                  >
                    newbie.dev.js@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg mt-1">📍</span>
                <div>
                  <p
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "#999" }}
                  >
                    Địa Điểm
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#B8C9BA" }}
                  >
                    TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div
          className="my-12 h-px"
          style={{ background: "rgba(168, 213, 186, 0.2)" }}
        ></div>

        {/* Bottom Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <p className="text-sm mb-4" style={{ color: "#B8C9BA" }}>
            Tạo với ❤️ cho ngày đặc biệt của chúng ta
          </p>
          <p className="text-xs mb-8" style={{ color: "#6B7C6E" }}>
            © {currentYear} Ngọc Nhất & Thùy Lan Wedding
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold uppercase tracking-widest transition-all hover:scale-105 text-sm"
            style={{
              background: "#4A7C4E",
              color: "white",
            }}
          >
            <span>↑</span>
            <span>Lên Đầu Trang</span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
