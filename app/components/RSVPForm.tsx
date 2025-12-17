"use client";

import { useState } from "react";
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

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "1",
    diet: "normal",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        guests: "1",
        diet: "normal",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      id="rsvp"
      className="py-24 w-full"
      style={{ background: "#F5F1ED" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Branding */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            {/* Label */}
            <h3
              className="text-sm uppercase tracking-widest font-light"
              style={{ color: "#999999" }}
            >
              Xác Nhận Tham Dự
            </h3>

            {/* Main Title */}
            <h2
              className="text-5xl sm:text-6xl font-black uppercase leading-tight mt-4 mb-8"
              style={{ color: "#4A7C4E", letterSpacing: "1px" }}
            >
              Vui Lòng
              <br />
              Gửi Xác Nhận
            </h2>

            {/* Accent Line */}
            <div
              className="h-1 w-20 mb-8"
              style={{ background: "#C41E3A" }}
            ></div>

            {/* Description */}
            <p
              className="text-lg leading-relaxed mb-6"
              style={{
                color: "#666666",
                fontFamily: "'Courier New', monospace",
                lineHeight: "1.8",
              }}
            >
              Chúng mình rất mong bạn để lại thông tin để tụi mình có thể tiếp
              đón bạn chu đáo hơn.
            </p>

            {/* Contact */}
            <div className="mt-12">
              <p
                className="text-sm uppercase tracking-widest mb-4"
                style={{ color: "#999999" }}
              >
                Có câu hỏi?
              </p>
              <div className="space-y-3">
                <a
                  href="tel:0966643223"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#4A7C4E] transition-colors"
                >
                  <span>📱</span>
                  <span className="font-semibold">0966 643 223</span>
                </a>
                <a
                  href="mailto:wedding@example.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#4A7C4E] transition-colors"
                >
                  <span>✉️</span>
                  <span className="font-semibold">newbie.dev.js@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div
              className="rounded-2xl p-8 sm:p-10 shadow-lg"
              style={{
                background: "white",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-xs uppercase tracking-widest font-semibold mb-3"
                      style={{ color: "#4A7C4E" }}
                    >
                      Họ Tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nhập họ tên của bạn"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all"
                      style={{
                        borderColor: "#E8E4DF",
                        background: "#FAFAF8",
                      }}
                    />
                  </motion.div>
                  {/* Guests and Diet */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label
                        className="block text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: "#4A7C4E" }}
                      >
                        Số Người Tham Dự *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all"
                        style={{
                          borderColor: "#E8E4DF",
                          background: "#FAFAF8",
                        }}
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "người" : "người"}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label
                        className="block text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: "#4A7C4E" }}
                      >
                        Chế Độ Ăn Kiêng
                      </label>
                      <select
                        name="diet"
                        value={formData.diet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all"
                        style={{
                          borderColor: "#E8E4DF",
                          background: "#FAFAF8",
                        }}
                      >
                        <option value="normal">Bình thường</option>
                        <option value="vegetarian">Ăn chay</option>
                        <option value="halal">Halal</option>
                        <option value="other">Khác</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-xs uppercase tracking-widest font-semibold mb-3"
                      style={{ color: "#4A7C4E" }}
                    >
                      Ghi Chú / Lời Chúc
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Gửi lời chúc hoặc ghi chú đặc biệt..."
                      rows={4}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all resize-none"
                      style={{
                        borderColor: "#E8E4DF",
                        background: "#FAFAF8",
                      }}
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    variants={itemVariants}
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-white text-lg transition-all hover:scale-105 shadow-lg uppercase tracking-widest"
                    style={{ background: "#4A7C4E" }}
                  >
                    Gửi Xác Nhận
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-12"
                  initial="hidden"
                  animate="visible"
                  variants={successVariants}
                >
                  <div className="text-6xl mb-6">✅</div>
                  <h3
                    className="text-3xl font-black mb-4"
                    style={{ color: "#4A7C4E" }}
                  >
                    Cảm Ơn Bạn!
                  </h3>
                  <p
                    className="text-lg mb-4 leading-relaxed"
                    style={{
                      color: "#666666",
                      fontFamily: "'Courier New', monospace",
                    }}
                  >
                    Xác nhận của bạn đã được ghi nhận thành công. Chúng tôi mong
                    được gặp bạn vào ngày cưới! 💕
                  </p>
                  <p className="text-sm text-gray-600">
                    Trang sẽ tải lại sau giây lát...
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
