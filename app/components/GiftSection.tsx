"use client";

import { motion } from "motion/react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function GiftSection() {
  const giftOptions = [
    {
      id: 1,
      name: "Ngọc Nhất",
      role: "Chú Rể",
      icon: "💚",
      qrCode: "/nhat.png",
      description: "Mã QR chú rể",
    },
    {
      id: 2,
      name: "Thùy Lan",
      role: "Cô Dâu",
      icon: "💕",
      qrCode: "/lan.png",
      description: "Mã QR cô dâu",
    },
  ];

  return (
    <section
      id="gift"
      className="py-24 w-full"
      style={{ background: "#F5F1ED" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2
            className="text-5xl sm:text-6xl font-black uppercase leading-tight mb-6"
            style={{ color: "#4A7C4E", letterSpacing: "2px" }}
          >
            Hộp Mừng Cưới
          </h2>
          <div
            className="h-1 w-20 mx-auto mb-8"
            style={{ background: "#C41E3A" }}
          ></div>
          <p
            className="text-lg leading-relaxed"
            style={{
              color: "#666666",
              fontFamily: "'Courier New', monospace",
              lineHeight: "1.8",
            }}
          >
            Cảm ơn bạn đã chia sẻ niềm vui cùng chúng mình. Bạn có thể gửi lời
            chúc hoặc món quà qua các mã QR dưới đây.
          </p>
        </motion.div>

        {/* QR Codes Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 w-full max-w-200 mx-auto gap-8 md:gap-12 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {giftOptions.map((gift) => (
            <motion.div key={gift.id} variants={cardVariants}>
              <div
                className="rounded-md overflow-hidden  p-8 sm:p-12 text-center"
                style={{
                  background: "white",
                  // boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Icon & Name */}
                <div className="mb-8">
                  {/* <div className="text-6xl mb-4 flex justify-center">
                    {gift.icon}
                  </div> */}
                  <h3
                    className="text-3xl font-black uppercase mb-2"
                    style={{ color: "#4A7C4E" }}
                  >
                    {gift.name}
                  </h3>
                  <p
                    className="text-sm uppercase tracking-widest font-semibold"
                    style={{ color: "#C41E3A" }}
                  >
                    {gift.role}
                  </p>
                </div>

                {/* QR Code Container */}
                <div
                  className="rounded-xl p-6 mb-8 flex items-center justify-center"
                  style={{ background: "#F9F7F5" }}
                >
                  <div className="w-full max-w-xs overflow-hidden border-5 border-white rounded-md">
                    <img
                      src={gift.qrCode}
                      alt={gift.description}
                      className="w-full aspect-square rounded-lg scale-105"
                    />
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-sm uppercase tracking-widest font-semibold mb-6"
                  style={{ color: "#999999" }}
                >
                  {gift.description}
                </p>

                {/* Instructions */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <p
            className="text-sm italic"
            style={{
              color: "#999999",
              fontFamily: "'Courier New', monospace",
            }}
          >
            💝 Cảm ơn lời chúc và sự ủng hộ của các bạn!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
