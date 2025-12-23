"use client";

import { motion } from "motion/react";

// Animation Variants - Tái sử dụng cho các phần tử khác nhau
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function WeddingInfo() {
  const weddingEvents = [
    {
      id: 1,
      icon: "💍",
      title: "Lễ Cưới Nhà Trai",
      date: "Thứ Bảy, 05/01/2025",
      time: "11:00 - 13:00",
      location: "Thị Xã Bình Dương, Tỉnh Gia Lai",
      address: "Phường 1, Thành Phố Tuy Hòa, Tỉnh Phú Yên",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3434567890123!2d109.3040123!3d13.0780823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f5e5e5e5e5e5d%3A0x0!2sThuy%20Hoa%20City!5e0!3m2!1svi!2svn!4v1234567890",
      mapsLink:
        "https://www.google.com/maps/search/Phường+1,+Thành+Phố+Tuy+Hòa,+Tỉnh+Phú+Yên",
    },
    {
      id: 2,
      icon: "🌸",
      title: "Lễ Cưới Nhà Gái",
      date: "Thứ 6, 04/01/2025",
      time: "16:00 - 18:00",
      location: "Xã Vệ Giang Tỉnh Quảng Ngãi",
      address: "Tuy An, Tỉnh Phú Yên",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.3434567890123!2d109.3040123!3d13.0780823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f5e5e5e5e5e5d%3A0x0!2sTuy%20An!5e0!3m2!1svi!2svn!4v1234567890",
      mapsLink: "https://www.google.com/maps/search/Tuy+An,+Tỉnh+Phú+Yên",
    },
  ];

  return (
    <section
      id="wedding-info rowdies"
      className="w-screen overflow-hidden py-16"
      style={{ background: "#F5F1ED" }}
    >
      <div className="w-full">
        {/* Section Title */}

        {/* Wedding Events Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            {weddingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className=" overflow-hidden transition-all duration-300 hover:shadow-2xl w-full"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 4px 15px rgba(93, 93, 93, 0.08)",
                }}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <div
                  className="p-10 text-center border-b"
                  style={{ borderColor: "#E8E4DF" }}
                >
                  <h3
                    className="text-2xl font-black mb-3 prompt uppercase whitespace-nowrap"
                    style={{ color: "#5D5D5D" }}
                  >
                    {event.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-10">
                  {/* Date and Time */}
                  <div
                    className="mb-6 pb-6 border-b"
                    style={{ borderColor: "#E8E4DF" }}
                  >
                    <div className="mb-3">
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#999999", marginBottom: "0.5rem" }}
                      >
                        <img
                          src="/wedding-couple.png"
                          alt=""
                          className="w-4 h-4"
                        />
                        Ngày Tháng
                      </p>
                      <p
                        className="text-lg font-light"
                        style={{ color: "#5D5D5D" }}
                      >
                        {event.date}
                      </p>
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{ color: "#999999", marginBottom: "0.5rem" }}
                      >
                        ⏰ Thời Gian
                      </p>
                      <p
                        className="text-lg font-light"
                        style={{ color: "#5D5D5D" }}
                      >
                        {event.time}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-6">
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#999999", marginBottom: "0.5rem" }}
                    >
                      📍 Địa Điểm
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#6D6D6D" }}
                    >
                      {event.location}
                    </p>
                  </div>

                  {/* Direction Button */}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={imageVariants}
            className="flex items-center justify-center"
          >
            <img
              src="/bg-hihi2.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
