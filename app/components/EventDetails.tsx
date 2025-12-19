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

  console.log(hover);

  return (
    <section
      id="events"
      className="py-16 w-full"
      style={{ background: "white" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
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
                        className="aspect-5/2 relative"
                        style={{
                          background:
                            "linear-gradient(135deg, #4A7C4E 0%, #6BA36B 100%)",
                        }}
                      >
                        <img
                          src="/nha-hang-2.jpg"
                          className="w-full h-full object-cover"
                          alt=""
                        />
                        <div className="absolute w-full h-full grid grid-cols-2 top-0 left-0">
                          <div
                            className="w-full h-full"
                            onMouseEnter={() => setHover("left")}
                          ></div>
                          <div
                            className="w-full h-full"
                            onMouseEnter={() => setHover("right")}
                          ></div>
                        </div>
                        <motion.div
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          animate={{ x: hover === "left" ? 0 : "100%" }}
                          className="absolute z-20 top-0 left-0 w-1/2 h-full"
                        >
                          <div className="bg-white/95 p-10 w-full h-full">
                            <div className="">
                              {/* <h3
                                className="text-3xl font-black uppercase"
                                style={{ color: "#4A7C4E" }}
                              >
                                Lễ Báo Hỷ
                              </h3>
                              <div
                                className="h-1 w-20 mt-2"
                                style={{ background: "#C41E3A" }}
                              ></div> */}
                              <h2
                                className="text-3xl sm:text-4xl font-black uppercase leading-tight mb-8"
                                style={{
                                  color: "#4A7C4E",
                                  letterSpacing: "2px",
                                }}
                              >
                                Thông Tin
                                <br />
                                Sự Kiện
                              </h2>

                              {/* Description */}

                              <div className="space-y-2 mb-4 mt-6">
                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                  ⏰ Giờ
                                </p>
                                <p
                                  className="font-bold"
                                  style={{ color: "#4A7C4E" }}
                                >
                                  {event.time}
                                </p>
                              </div>

                              <div className="space-y-2 mb-4">
                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                  📍 Địa điểm
                                </p>
                                <p
                                  className="font-bold mt-4"
                                  style={{ color: "#4A7C4E" }}
                                >
                                  {event.location}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {event.address}
                                </p>
                              </div>
                            </div>
                            <p
                              className="text-gray-700 text-sm"
                              style={{
                                color: "#666666",
                                fontFamily: "'Courier New', monospace",
                                lineHeight: "1.8",
                              }}
                            >
                              Hãy cùng chúng mình chia sẻ những khoảnh khắc đặc
                              biệt nhất trong ngày trọng đại này.
                            </p>
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
