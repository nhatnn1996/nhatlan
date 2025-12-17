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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export default function EventDetails() {
  const events = [
    {
      type: " ",
      time: "18:30 - 22:00",
      date: "Thứ Bảy, 27.12.2025",
      location: "Nhà Hàng Le Jardin",
      address: "195 Quốc Lộ 13, Hiệp Bình Chánh Thủ Đức, TP. Hồ Chí Minh",
    },
  ];

  return (
    <section
      id="events"
      className="py-16 w-full"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Section - Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}

            {/* Carousel Container */}
            <motion.div>
              {events.map((event, index) => {
                return (
                  <motion.div key={index + "event"}>
                    <motion.div
                      className="overflow-hidden  "
                      style={{
                        background: "white",
                      }}
                      variants={itemVariants}
                    >
                      {/* Image Container */}
                      <div
                        className="aspect-video"
                        style={{
                          background:
                            "linear-gradient(135deg, #4A7C4E 0%, #6BA36B 100%)",
                        }}
                      >
                        <img
                          src="/nhahang.webp"
                          className="w-full h-full"
                          alt=""
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 pl-0">
                        <h3
                          className="text-2xl font-black uppercase mb-2"
                          style={{ color: "#4A7C4E" }}
                        >
                          {event.type}
                        </h3>

                        <div className="space-y-2 mb-4">
                          <p className="text-xs uppercase tracking-widest text-gray-500">
                            ⏰ Giờ
                          </p>
                          <p className="font-bold" style={{ color: "#4A7C4E" }}>
                            {event.time}
                          </p>
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="text-xs uppercase tracking-widest text-gray-500">
                            📍 Địa điểm
                          </p>
                          <p className="font-bold" style={{ color: "#4A7C4E" }}>
                            {event.location}
                          </p>
                          <p className="text-sm text-gray-600">
                            {event.address}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            {/* Logo */}
            <div className="mb-8">
              <h3
                className="text-3xl font-black uppercase"
                style={{ color: "#4A7C4E" }}
              >
                Lễ Báo Hỷ
              </h3>
              <div
                className="h-1 w-20 mt-2"
                style={{ background: "#C41E3A" }}
              ></div>
            </div>

            {/* Main Title */}
            <h2
              className="text-6xl sm:text-7xl font-black uppercase leading-tight mb-8"
              style={{ color: "#4A7C4E", letterSpacing: "2px" }}
            >
              Thông Tin
              <br />
              Sự Kiện
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Hãy cùng chúng tôi chia sẻ những khoảnh khắc đặc biệt nhất trong
              ngày trọng đại này.
            </p>
            <button
              className="w-full mt-6 px-4 py-3 rounded-lg font-bold text-white uppercase transition-all hover:scale-105"
              style={{ background: "#4A7C4E" }}
            >
              Xem Bản Đồ
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
