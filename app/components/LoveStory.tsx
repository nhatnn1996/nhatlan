"use client";

import { motion } from "motion/react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function LoveStory() {
  const milestones = [
    {
      year: "2023",
      title: "Gặp Nhau",
      description:
        "Như định mệnh tụi mình đối diện phòng của nhau, hôm đó tụi trong nhóm các thành viên xóm trọ tụi mình đã trêu nhau.",
      image: "/hinh-cuoi-3.png",
    },
    {
      year: "2024",
      title: "Yêu Thương",
      description:
        "Sau nhiều hôm trò chuyện và chia sẻ những điều vui vẻ, tụi mình đã quyết định đi chơi với nhau. Tụi mình đi ăn lẩu cua Năm Ri rồi đi xem phim người vợ cuối cùng ( Phim dỡ ác )",
      image: "/hinh2.png",
    },
    {
      year: "2024",
      title: "Đính Hôn",
      description:
        "Anh quỳ xuống thảm lau nhà rồi cầu hôn em trong sự ngỡ ngàn của em. ",
      image: "/hinh3.png",
    },
    {
      year: "2025",
      title: "Bước Vào Hôn Nhân",
      description:
        "Tụi mình chính thức trở thành vợ chồng trẻ. Bắt đầu trãi nghiệm cuộc sống hôn nhân. Tụi mình vẫn còn yêu nhau lắm hé hé hé",
      image: "/hinh4.png",
    },
  ];

  return (
    <section
      id="story"
      className="py-16 w-full"
      style={{ background: "#F5F1ED" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2
            className="text-3xl sm:text-6xl font-black uppercase tracking-wide leading-normal"
            style={{ color: "#4A7C4E", letterSpacing: "2px" }}
          >
            Câu Chuyện
            <br />
            Tình Yêu Của Chúng Mình
          </h2>
        </motion.div>

        {/* Timeline Milestones */}
        <motion.div
          className="space-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className={`flex justify-center ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
                variants={imageVariants}
              >
                <div className="">
                  <img
                    className="w-full h-full object-cover"
                    src={milestone.image}
                    alt=""
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className={index % 2 !== 0 ? "lg:order-1" : ""}
                variants={itemVariants}
              >
                <div className="mb-4">
                  <span
                    className="text-sm uppercase tracking-widest font-light"
                    style={{ color: "#999999" }}
                  >
                    Năm {milestone.year}
                  </span>
                  <h3
                    className="text-4xl font-black mt-2 uppercase"
                    style={{ color: "#4A7C4E" }}
                  >
                    {milestone.title}
                  </h3>
                </div>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#666666",
                    fontFamily: "'Courier New', monospace",
                    lineHeight: "1.8",
                  }}
                >
                  {milestone.description}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Love Message */}
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <p
            className="text-2xl italic mb-6 leading-relaxed"
            style={{ color: "#666666", fontStyle: "italic" }}
          >
            "Thế giới này vốn dĩ ồn ào, cảm ơn vì đã là khoảng lặng dịu dàng của nhau." 
          </p>
          <p
            className="font-light text-lg"
            style={{ color: "#999999", letterSpacing: "1px" }}
          >
            ~ Ngọc Nhất - Thùy Lan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
