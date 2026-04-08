"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 500, suffix: "+", label: "Đại lý trên toàn quốc" },
  { value: 1200, suffix: "+", label: "Nhà thầu tin dùng" },
  { value: 15000, suffix: "+", label: "Giao dịch mỗi tháng" },
  { value: 98, suffix: "%", label: "Khách hàng hài lòng" },
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  const formatted =
    count >= 10000
      ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K"
      : count.toLocaleString("vi-VN");

  return (
    <span className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-[#FAFAF8] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <div
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#111] mb-1.5"
                style={{ fontFamily: "var(--font-pm-display)" }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>
              <p className="text-sm text-[#888]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#E9A033]/30 to-transparent" />
    </section>
  );
}
