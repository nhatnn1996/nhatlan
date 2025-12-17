"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const scaleBackground = useSpring(
    useTransform(scrollYProgress, [0.5, 0.8], [1, 1.2]),
    springConfig
  );

  const scaleBGTranslateY = useSpring(
    useTransform(scrollYProgress, [0.3, 0.7], [0, 100]),
    springConfig
  );

  const colorText1 = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#2D6A4F", "#F9F6F0"]
  );
  const colorText2 = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["#620000", "#F9F6F0"]
  );

  const opacityText1 = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 0]),
    springConfig
  );

  const translateYBackground = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1.5, 1.8]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );

  const opacityBackground = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 1]),
    springConfig
  );

  const translateYOverlay = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-500, -500, 0]),
    springConfig
  );

  return (
    <section
      ref={ref}
      className="relative flex flex-col self-auto prompt"
      style={{
        background: "#F9F6F0",
        height: "200vh",
      }}
    >
      <motion.div
        id="hero"
        className="min-h-screen sticky top-0 w-full overflow-hidden flex flex-col items-center justify-center"
      >
        <div
          className={cn(
            "absolute inset-0 h-[45vh]",
            "[background-size:30px_30px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <motion.div
          style={{
            scale: scaleBackground,
            opacity: opacityBackground,
          }}
          className="w-full absolute inset-0 h-screen z-10 overflow-hidden"
        >
          <motion.img
            style={{ translateY: scaleBGTranslateY }}
            src="/hero-section.png"
            className="object-cover scale-150"
            alt=""
          />
        </motion.div>
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none top-0 left-0 h-1/2"
          style={{
            opacity: opacityBackground,
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 33%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></motion.div>
        <div className="relative z-30 w-full pt-10 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center">
          <div className="max-w-6xl mx-auto w-full">
            {/* Main Title - Very Large & Bold */}
            <div className="text-center mb-16 md:mb-24">
              <motion.h1
                style={{
                  // opacity: opacityText1,
                  color: colorText1,
                  // Thêm border bằng shadow
                  textShadow: "0 0px 0 #11121220, 0 1px 2px #11121220", // strong shadow border
                }}
                className="text-7xl text-[#2D6A4F] sm:text-8xl uppercase md:text-8xl font-black tracking-wider mb-6"
              >
                NHÀ CÓ HỶ
              </motion.h1>
              <motion.h1
                style={{
                  color: colorText2,

                  textShadow: "0 0px 0 #11121220, 0 1px 2px #11121220", // strong shadow border
                }}
                className="text-6xl text-[#620000] sm:text-6xl uppercase md:text-6xl font-black tracking-wider mb-6"
              >
                18 giờ 30
              </motion.h1>
              <motion.div
                style={{
                  color: colorText2,
                  textShadow: "0 0px 0 #11121220, 0 1px 2px #11121220", // strong shadow border
                }}
                className="text-2xl sm:text-3xl text-white"
              >
                Ngày 27-12-2025
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div className="mt-auto z-20 w-fit mx-auto flex items-end gap-4 sticky bottom-0">
          <motion.div
            style={{
              opacity: opacityText1,
            }}
            className="mb-10"
          >
            <h1
              className="text-3xl sm:text-4xl w-fit md:text-6xl whitespace-nowrap font-black tracking-wide mb-3"
              style={{ color: "#2D6A4F" }}
            >
              NGỌC NHẤT
            </h1>
            <div className="text-md text-gray-500 text-right">
              Ngày sinh: 18-12-1996{" "}
            </div>
          </motion.div>
          <motion.img
            style={{
              scale,
              filter: "drop-shadow(5px 5px 8px rgba(0, 0, 0, 0.1))",
            }}
            className="w-140"
            src="/hinh-cua-tui.png"
          />
          <motion.div
            style={{
              opacity: opacityText1,
            }}
            className="mb-10"
          >
            <h1
              className="text-3xl sm:text-4xl w-fit md:text-6xl whitespace-nowrap font-black tracking-wide mb-3"
              style={{ color: "#2D6A4F" }}
            >
              THÙY LAN
            </h1>
            <div className="text-md text-gray-500 ">Ngày sinh: 15-08-2002 </div>
          </motion.div>
        </motion.div>

        <div className="w-full absolute inset-0 h-screen z-50 overflow-hidden">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </motion.div>
    </section>
  );
}
