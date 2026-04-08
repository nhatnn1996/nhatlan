"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Tính năng", href: "#tinh-nang" },
  { label: "Cách hoạt động", href: "#cach-hoat-dong" },
  { label: "Hạng thành viên", href: "#hang-thanh-vien" },
  { label: "Câu hỏi", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-[#2E2E2E]/60 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#E9A033] to-[#CC8818] flex items-center justify-center shadow-md group-hover:shadow-[0_0_20px_rgba(233,160,51,0.3)] transition-shadow duration-300">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-pm-display)" }}
                >
                  P
                </span>
              </div>
              <span
                className="text-xl font-semibold tracking-wide text-white"
                style={{ fontFamily: "var(--font-pm-display)" }}
              >
                Pro
                <span className="text-[#E9A033]">METAL</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="px-4 py-2 text-sm font-medium text-[#ccc] hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleClick("#tai-app")}
                className="px-5 py-2.5 text-sm font-semibold text-[#111] bg-gradient-to-r from-[#E9A033] to-[#F5C56A] rounded-xl hover:shadow-[0_0_24px_rgba(233,160,51,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Tải App Ngay
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-2xl pt-20"
          >
            <div className="flex flex-col items-center gap-2 px-8 py-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleClick(link.href)}
                  className="w-full text-center text-lg font-medium text-white/80 hover:text-white py-4 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => handleClick("#tai-app")}
                className="mt-4 w-full py-4 text-lg font-bold text-[#111] bg-gradient-to-r from-[#E9A033] to-[#F5C56A] rounded-2xl"
              >
                Tải App Ngay
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
