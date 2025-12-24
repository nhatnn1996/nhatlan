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
  const [hover, setHover] = useState("left");
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
      className="py-8 sm:py-12 md:py-16 w-full"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Right Section - Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}

            {/* Carousel Container */}
            <motion.div>
              {events.map((event, index) => {
                return (
                  <motion.div key={index + "event"}>
                    <motion.div
                      className="overflow-hidden relative"
                      style={{
                        background: "white",
                      }}
                      variants={itemVariants}
                    >
                      {/* Image Container */}
                      <div
                        className="aspect-square sm:aspect-video md:aspect-5/2 relative"
                        style={{
                          background:
                            "linear-gradient(135deg, #4A7C4E 0%, #6BA36B 100%)",
                        }}
                      >
                        <img
                          src="/nha-hang-2.jpg"
                          className="w-full h-full object-cover"
                          alt="Nhà hàng"
                        />
                        <div className="absolute w-full h-full grid grid-cols-2 top-0 left-0">
                          <div
                            className="w-full h-full hidden md:block"
                            onMouseEnter={() => setHover("left")}
                          ></div>
                          <div
                            className="w-full h-full hidden md:block"
                            onMouseEnter={() => setHover("right")}
                          ></div>
                        </div>

                        {/* Mobile Overlay - Static */}
                        <motion.div
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          animate={{
                            x:
                              window.innerWidth < 768
                                ? 0
                                : hover === "left"
                                ? 0
                                : "100%",
                          }}
                          className="absolute z-20 top-0 left-0 w-full md:w-1/2 h-full"
                        >
                          <div className="bg-white/95 md:bg-white/95 p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full overflow-y-auto md:overflow-y-visible flex flex-col justify-center">
                            <div className="">
                              <h2
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-tight mb-4 sm:mb-6 md:mb-8"
                                style={{
                                  color: "#4A7C4E",
                                  letterSpacing: "1px",
                                }}
                              >
                                Thông Tin
                                <br />
                                Sự Kiện
                              </h2>

                              {/* Description */}

                              <div className="space-y-2 mb-3 sm:mb-4 mt-4 sm:mt-6">
                                <p className="text-xs sm:text-xs uppercase tracking-widest text-gray-500">
                                  ⏰ Giờ
                                </p>
                                <p
                                  className="font-bold text-sm sm:text-base"
                                  style={{ color: "#4A7C4E" }}
                                >
                                  {event.time}
                                </p>
                              </div>

                              <div className="space-y-2 mb-3 sm:mb-4">
                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                  📍 Địa điểm
                                </p>
                                <p
                                  className="font-bold text-sm sm:text-base mt-2 sm:mt-4"
                                  style={{ color: "#4A7C4E" }}
                                >
                                  {event.location}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                                  {event.address}
                                </p>

                                <a
                                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                    event.address
                                  )}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg  hover:bg-green-200 border-b-2 border-[#4a7c4e] transition-colors text-sm font-semibold"
                                  style={{
                                    color: "#35633A",
                                    textDecoration: "none",
                                  }}
                                >
                                  {/* Inline SVG for Map Icon */}
                                  <svg
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                                    />
                                    <circle
                                      cx="12"
                                      cy="10"
                                      r="3"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    />
                                  </svg>
                                  Xem bản đồ
                                </a>
                              </div>

                              <p
                                className="text-gray-700 text-xs sm:text-sm mt-4 sm:mt-6"
                                style={{
                                  color: "#666666",
                                  fontFamily: "'Courier New', monospace",
                                  lineHeight: "1.6 sm:1.8",
                                }}
                              >
                                Hãy cùng chúng mình chia sẻ những khoảnh khắc
                                đặc biệt nhất trong ngày trọng đại này.
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Content */}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
