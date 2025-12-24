"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import CustomSelect from "./CustomSelect";
import { cn } from "@/lib/utils";

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

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    attendees: 2,
    message:
      "Rất vui được tham dự ngày trọng đại của hai bạn! Chúc hai bạn hạnh phúc bên nhau 💕",
  },
  {
    id: 2,
    name: "Trần Thị B",
    attendees: 3,
    message: "Cả gia đình mình đều háo hức chờ đợi đám cưới của hai bạn!",
  },
  {
    id: 3,
    name: "Lê Quốc C",
    attendees: 1,
    message: "Wishing you both a lifetime of love and happiness! 🎉",
  },
  {
    id: 4,
    name: "Phạm Minh D",
    attendees: 2,
    message: "Hai bạn là đôi vợ chồng đẹp đôi nhất! Chúc mừng nhé! 🌹",
  },
  {
    id: 5,
    name: "Hoàng Thu E",
    attendees: 1,
    message: "Looking forward to celebrating with you both!",
  },
  {
    id: 6,
    name: "Võ Minh F",
    attendees: 2,
    message: "Một ngày tuyệt vời đang chờ đợi. Hẹn gặp lại! 🥂",
  },
];

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    attendees: 1,
    note: "",
  });

  const [list, setList] = useState([]);
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
    setSubmitted(true);
    fetch("https://cms.ninhbinhdinh.com/items/nhat_wedding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  useEffect(() => {
    fetch("https://cms.ninhbinhdinh.com/items/nhat_wedding")
      .then((res) => res.json())
      .then((data) => {
        setList(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
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
                    <motion.div variants={itemVariants}>
                      <CustomSelect
                        name="attendees"
                        value={formData.attendees}
                        onChange={handleChange}
                        label="Số Người Tham Dự"
                        required
                        options={[1, 2, 3, 4, 5].map((num) => ({
                          value: num.toString(),
                          label: `${num} ${num === 1 ? "người" : "người"}`,
                        }))}
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div variants={itemVariants}>
                      <label
                        className="block text-xs uppercase tracking-widest font-semibold mb-3"
                        style={{ color: "#4A7C4E" }}
                      >
                        Ghi Chú / Lời Chúc
                      </label>
                      <textarea
                        name="note"
                        value={formData.note}
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
                    {/* <div className="text-6xl mb-6">✅</div> */}
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
                      Xác nhận của bạn đã được ghi nhận thành công. Chúng tôi
                      mong được gặp bạn vào ngày cưới! 💕
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials & Confirmations Section */}
      <section
        id="testimonials"
        className="py-16 sm:py-20 md:py-24 w-full"
        style={{ background: "#FAFAF8" }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h3
              className="text-xs sm:text-sm uppercase tracking-widest font-light"
              style={{ color: "#999999" }}
            >
              Những Lời Chúc Mừng
            </h3>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mt-3 sm:mt-4 md:mt-6"
              style={{ color: "#4A7C4E", letterSpacing: "1px" }}
            >
              Xác Nhận Tham Dự
            </h2>
            <div
              className="h-1 w-16 sm:w-20 mx-auto mt-4 sm:mt-6 md:mt-8"
              style={{ background: "#C41E3A" }}
            ></div>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
          >
            {list?.map((testimonial: any, index: number) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <div
                  className={cn(
                    "p-4 sm:p-5 md:p-6 h-full transition-all hover:shadow-lg border-r border-slate-200 border-b",
                    { "border-l": index % 3 === 0, "border-t": index < 3 }
                  )}
                  style={{
                    background: "white",
                  }}
                >
                  {/* Header - Name & Attendees */}
                  <div className="mb-3 sm:mb-4 md:mb-5">
                    <h3
                      className="text-sm sm:text-base md:text-lg font-black uppercase"
                      style={{ color: "#4A7C4E" }}
                    >
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 sm:mt-2 flex-wrap">
                      <span
                        className="text-xs sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full"
                        style={{
                          background: "#E8F0E9",
                          color: "#4A7C4E",
                        }}
                      >
                        {testimonial.attendees}{" "}
                        {testimonial.attendees === 1 ? "người" : "người"}
                      </span>
                      {/* <span
                        className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full text-gray-500 bg-slate-100"
                        style={{}}
                      >
                        ✓ Xác nhận
                      </span> */}
                    </div>
                  </div>

                  {/* Message */}
                  <p
                    className="text-xs sm:text-sm leading-relaxed italic"
                    style={{
                      color: "#666666",
                      fontFamily: "'Courier New', monospace",
                      lineHeight: "1.6",
                    }}
                  >
                    "{testimonial.note}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Section - Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="mt-12 sm:mt-16 md:mt-20 text-center"
          >
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
              style={{
                color: "#666666",
                fontFamily: "'Courier New', monospace",
                lineHeight: "1.8",
              }}
            >
              Cảm ơn tất cả những bạn đã xác nhận tham dự đám cưới của chúng
              mình.
              <br className="hidden sm:block" />
              Chúng mình rất mong được gặp gỡ và chia sẻ niềm vui cùng các bạn!
              🎉
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
