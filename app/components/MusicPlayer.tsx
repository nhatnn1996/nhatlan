"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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
        src="/wedding-music.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Music Player - Fixed Position */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            // Expanded Player
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-2xl p-6 w-80 backdrop-blur-lg bg-white/95"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-800">Nhạc nền</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Album Art or Icon */}
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="w-24 h-24 rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg"
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 20, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                >
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v9.28c-.47-.46-1.12-.72-1.84-.72C7.33 11.56 5.6 13.29 5.6 15.28c0 1.99 1.73 3.72 3.76 3.72 2.03 0 3.76-1.73 3.76-3.72V7.00h2.6v8.28c0 2.3-1.88 4.16-4.20 4.16s-4.20-1.86-4.20-4.16c0-1.29.61-2.42 1.56-3.20V3h2.52z" />
                  </svg>
                </motion.div>
              </div>

              {/* Song Info */}
              <div className="text-center mb-6">
                <h4 className="font-semibold text-gray-800 mb-1">Bài hát cưới</h4>
                <p className="text-sm text-gray-500">Âm nhạc cho ngày hôm nay</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-6">
                <button
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white flex items-center justify-center transition-all transform hover:scale-105 shadow-lg"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
              className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 hover:shadow-rose-400/50"
            >
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v9.28c-.47-.46-1.12-.72-1.84-.72C7.33 11.56 5.6 13.29 5.6 15.28c0 1.99 1.73 3.72 3.76 3.72 2.03 0 3.76-1.73 3.76-3.72V7.00h2.6v8.28c0 2.3-1.88 4.16-4.20 4.16s-4.20-1.86-4.20-4.16c0-1.29.61-2.42 1.56-3.20V3h2.52z" />
                </svg>
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}


