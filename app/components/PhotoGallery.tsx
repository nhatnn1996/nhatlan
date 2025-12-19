"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { motion } from "motion/react";

export default function PhotoGallery() {
  const IMAGES_ROW_A = [
    "/ll-1.jpg",
    "/ll-2.jpg",
    "/ll-3.png",
    "/ll-4.png",
    "/ll-5.png",
    "/ll-6.jpg",
    "/ll-7.jpg",
  ];
  const IMAGES_ROW_B = [
    "/lll-1.jpg",
    "/lll-2.jpg",
    "/lll-3.jpg",
    "/lll-4.jpg",
    "/lll-5.jpg",
  ];

  return (
    <>
      <section id="gallery" className="mb-4 bg-white">
        <div
          className="min-h-[50vh] bg-cneter bg-fixed grid grid-cols-1 md:grid-cols-2"
          style={{
            backgroundImage: "url('/bg-gellery.png')",
          }}
        >
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center text-white p-10 py-16"
            >
              {/* Logo */}
              <div className="mb-8">
                <h3 className="text-3xl font-black uppercase ">Hé hé hé</h3>
                <div
                  className="h-1 w-20 mt-2"
                  style={{ background: "#C41E3A" }}
                ></div>
              </div>

              {/* Main Title */}
              <h2
                className="text-3xl sm:text-6xl font-black uppercase leading-tight mb-8"
                style={{ letterSpacing: "2px" }}
              >
                Lưu giữ
                <br /> khoảnh khắc
              </h2>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <ScrollVelocityContainer className="w-full">
          <ScrollVelocityRow baseVelocity={3} direction={1} className="">
            {IMAGES_ROW_A.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Unsplash sample"
                loading="lazy"
                decoding="async"
                className="mx-2 aspect-video inline-block w-100  object-cover  "
              />
            ))}
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={3} direction={-1} className="py-2">
            {IMAGES_ROW_B.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="Unsplash sample"
                loading="lazy"
                decoding="async"
                className="mx-2 aspect-video inline-block w-100  object-cover  "
              />
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </>
  );
}
