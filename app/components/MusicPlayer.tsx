"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Music2 } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // <--- New State
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // New: handle initial user click to start music and allow browser autoplay
  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/am-nhac.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Initial Play Button Overlay */}
      {!hasStarted && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="absolute z-60">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleStartMusic}
              className="flex items-center gap-2 bg-white/80 hover:bg-white border px-5 py-2 rounded-xl shadow-lg transition-colors focus:outline-none"
              style={{
                backdropFilter: "blur(6px)",
                color: "#35633A",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "0.07em",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
              Bắt đầu
            </motion.button>
          </div>
        </div>
      )}

      {/* Music Player - Fixed Position */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        style={{ pointerEvents: !hasStarted ? "none" : undefined }} // Prevent interaction when blocked
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            // Expanded Player
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="rounded-lg shadow-2xl p-6 w-80 backdrop-blur-lg"
              style={{
                background: "white",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Nhạc nền</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Album Art or Icon */}
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="w-24 h-24 flex items-center justify-center shadow-lg border-2 border-white rounded-full"
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{
                    duration: 20,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "linear",
                  }}
                >
                  <img
                    src="/hinh1.png"
                    alt="Am nhac"
                    className="w-full h-full object-cover rounded-full "
                  />
                </motion.div>
              </div>

              {/* Song Info */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-gray-800 mb-1">
                  Bài hát cưới
                </h4>
                <p className="text-sm text-gray-500">
                  Âm nhạc cho ngày hôm nay
                </p>
              </div>

              <div className="flex justify-center gap-6">
                <button
                  className="w-14 h-14 rounded-full text-white flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                  style={{
                    background: "#4A7C4E",
                  }}
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </motion.div>
          ) : (
            // Compact Player
            <motion.button
              key="compact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setIsExpanded(true)}
              className="w-16 h-16 rounded-full border-4 border-white text-white flex items-center justify-center shadow-2xl hover:scale-110"
              style={{
                boxShadow: "0 0 20px rgba(74, 124, 78, 0.4)",
              }}
              onHoverStart={() => {}}
            >
              <motion.div
                className="w-full h-full"
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{
                  duration: 10,
                  repeat: isPlaying ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <img
                  src="/hinh2.png"
                  alt="Am nhac"
                  className="w-full h-full object-cover rounded-full opacity-90"
                />
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-4 h-4 bg-white rounded-full" />
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-2.5 h-2.5 bg-black rounded-full" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
