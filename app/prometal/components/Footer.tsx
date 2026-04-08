"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Youtube,
} from "lucide-react";

const footerLinks = {
  features: [
    { label: "Tích điểm qua hóa đơn", href: "#tinh-nang" },
    { label: "Catalog đổi quà", href: "#tinh-nang" },
    { label: "Hạng thành viên", href: "#hang-thanh-vien" },
    { label: "Flash deal", href: "#tinh-nang" },
    { label: "Quay số may mắn", href: "#tinh-nang" },
  ],
  support: [
    { label: "Câu hỏi thường gặp", href: "#faq" },
    { label: "Hướng dẫn sử dụng", href: "#" },
    { label: "Chính sách điểm", href: "#" },
    { label: "Điều khoản sử dụng", href: "#" },
    { label: "Chính sách bảo mật", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[#1E1E1E]">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E9A033]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#E9A033] to-[#CC8818] flex items-center justify-center">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-pm-display)" }}
                >
                  P
                </span>
              </div>
              <span
                className="text-xl font-semibold text-white tracking-wide"
                style={{ fontFamily: "var(--font-pm-display)" }}
              >
                Pro<span className="text-[#E9A033]">METAL</span>
              </span>
            </div>

            <p className="text-sm text-[#888] leading-relaxed mb-5 max-w-[280px]">
              Nhà sản xuất và phân phối khung trần thạch cao & vách ngăn hàng
              đầu Việt Nam. App tích điểm dành riêng cho đại lý & nhà thầu.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Globe, href: "https://prometal.com.vn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#888] hover:text-[#E9A033] hover:bg-[#1E1E1E]/80 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={16} />
                </a>
              ))}
              {/* Zalo custom icon */}
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-[#1E1E1E] flex items-center justify-center text-[#888] hover:text-[#E9A033] hover:bg-[#1E1E1E]/80 transition-colors duration-200"
              >
                <span className="text-xs font-bold">Z</span>
              </a>
            </div>
          </div>

          {/* Column 2: Features */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Tính năng
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.features.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888] hover:text-[#E9A033] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Hỗ trợ
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#888] hover:text-[#E9A033] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Liên hệ
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="text-[#E9A033] mt-1 flex-shrink-0"
                />
                <span className="text-sm text-[#888]">
                  Công ty CP Hiệp Vĩnh Phú
                  <br />
                  TP. Hồ Chí Minh, Việt Nam
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#E9A033] flex-shrink-0" />
                <a
                  href="tel:19001234"
                  className="text-sm text-[#888] hover:text-[#E9A033] transition-colors"
                >
                  1900 xxxx
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#E9A033] flex-shrink-0" />
                <a
                  href="mailto:info@prometal.com.vn"
                  className="text-sm text-[#888] hover:text-[#E9A033] transition-colors"
                >
                  info@prometal.com.vn
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe size={14} className="text-[#E9A033] flex-shrink-0" />
                <a
                  href="https://prometal.com.vn"
                  className="text-sm text-[#888] hover:text-[#E9A033] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  prometal.com.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1E1E1E] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#666]">
            © {new Date().getFullYear()} Công ty Cổ phần Hiệp Vĩnh Phú
            (ProMetal). Tất cả quyền được bảo lưu.
          </p>
          <p className="text-xs text-[#555]">
            🇻🇳 Made with ❤️ in Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
}
