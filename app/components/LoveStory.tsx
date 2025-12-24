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
        "Tụi mình vốn là hai người lạ ở đối diện phòng trọ, chỉ bắt đầu xích lại gần nhau qua những lần giúp đỡ lúc khó khăn. Từ việc chạy đi mua thuốc, lo từng bữa ăn mỗi khi đối phương đổ bệnh, đến những đêm cùng nhau thức trắng để hoàn thiện những bộ hồ sơ chất đống. Chính sự quan tâm chân thành và những lần giúp đỡ nhau kịp thời ấy đã xóa tan khoảng cách hành lang, biến hai người hàng xóm thành người thương chung lối.",
      image: "/hinh-cuoi-3.png",
    },
    {
      year: "2024",
      title: "Yêu Thương",
      description:
        "Sau nhiều ngày trò chuyện và chia sẻ những điều vui vẻ, tụi mình quyết định hẹn nhau đi chơi. Một nồi lẩu cua Năm Ri cho buổi tối thêm ấm, rồi cả hai kéo nhau đi xem Người vợ cuối cùng. Trớ trêu là tụi mình vào trễ, vừa ngồi xuống đã “đụng ngay” một cảnh nóng khá táo bạo, khiến cả hai không khỏi ngượng ngùng. Mà công tâm thì bộ phim cũng không hay như kỳ vọng.",
      image: "/hinh2.png",
    },
    {
      year: "2024",
      title: "Đính Hôn",
      description:
        "Trong sự ngỡ ngàng tột độ của em, anh bất ngờ quỳ xuống ngay trên chiếc thảm lau nhà quen thuộc để ngỏ lời cầu hôn. Không cần nến hay hoa lộng lẫy, chính lời cầu hôn chân thành và có phần hài hước ngay tại lối đi giữa hai phòng trọ đã đánh dấu cột mốc đính hôn đầy hạnh phúc.",
      image: "/hinh3.png",
    },
    {
      year: "2025",
      title: "Bước Vào Hôn Nhân",
      description:
        "Tụi mình chính thức về chung một nhà và bắt đầu chuỗi ngày làm vợ chồng trẻ. Cuộc sống hôn nhân hóa ra là những trải nghiệm đầy mới mẻ: từ việc tranh nhau xem hôm nay ai rửa bát, cho đến việc phát hiện ra đối phương lúc ngủ cũng có những thói hư tật xấu lầy lội không kém gì mình. Dù thỉnh thoảng có chí chóe vì những chuyện vặt vãnh, nhưng sau tất cả, tụi mình vẫn cứ dính lấy nhau như sam và quan trọng là... vẫn còn yêu nhau lắm hé hé hé!",
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
            "Thế giới này vốn dĩ ồn ào, cảm ơn vì đã là khoảng lặng dịu dàng của
            nhau."
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
