"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CustomSelectProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string | number; label: string }>;
  label?: string;
  required?: boolean;
}

export default function CustomSelect({
  name,
  value,
  onChange,
  options,
  label,
  required,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedValue: string | number) => {
    // Create a synthetic event to match HTMLSelectElement behavior
    const event = {
      target: {
        name,
        value: selectedValue.toString(),
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(event);
    setIsOpen(false);
  };

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative">
      {label && (
        <label
          className="block text-xs uppercase tracking-widest font-semibold mb-3"
          style={{ color: "#4A7C4E" }}
        >
          {label} {required && "*"}
        </label>
      )}

      {/* Hidden select for form submission */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="hidden"
        required={required}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom Dropdown Button */}
      <motion.button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all flex items-center justify-between"
        style={{
          borderColor: "#E8E4DF",
          background: "#FAFAF8",
        }}
        whileHover={{ borderColor: "#D8D4CF" }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-gray-700 font-medium">
          {selectedOption?.label || "Chọn tùy chọn"}
        </span>
        <motion.svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-xl z-50"
            style={{
              borderColor: "#E8E4DF",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="max-h-64 overflow-y-auto py-2">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className="w-full px-4 py-3 text-left transition-all flex items-center justify-between group"
                  style={{
                    background:
                      value === option.value
                        ? "rgba(74, 124, 78, 0.1)"
                        : "transparent",
                  }}
                  whileHover={{
                    background: "rgba(74, 124, 78, 0.08)",
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span
                    className="font-medium transition-colors"
                    style={{
                      color:
                        value === option.value ? "#4A7C4E" : "#666666",
                    }}
                  >
                    {option.label}
                  </span>
                  {value === option.value && (
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        stroke="#4A7C4E"
                      />
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

