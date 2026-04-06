"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-05-03T18:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, mins, secs });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 px-4 flex flex-col items-center">
      {/* Section ornament */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <div className="text-[#b8965a] text-sm mb-3">❧ ✦ ❧</div>
        <h2
          className="text-[#3a2e1e] italic text-2xl md:text-3xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Counting Down to Our Day
        </h2>
        <div className="text-[#b8965a] text-sm mt-3">❧ ✦ ❧</div>
      </motion.div>

      {/* Timer box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative px-8 py-6 rounded-sm"
        style={{
          background: "linear-gradient(135deg, #ede5d5, #e0d5c0)",
          border: "1px solid #c9b896",
          boxShadow: "0 8px 32px rgba(90,70,45,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
          minWidth: "280px",
        }}
      >
        {/* Corner decorations */}
        {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos, i) => (
          <div key={i} className={`absolute ${pos} text-[#b8965a] text-xs opacity-60`}>✦</div>
        ))}

        <div className="flex gap-4 md:gap-6 items-center justify-center">
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.mins, label: "Mins" },
            { value: timeLeft.secs, label: "Secs" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-4 md:gap-6">
              <div className="text-center">
                <motion.div
                  key={value}
                  initial={{ y: -8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl md:text-4xl font-bold text-[#3a2e1e]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", minWidth: "2ch" }}
                >
                  {pad(value)}
                </motion.div>
                <div
                  className="text-[10px] tracking-widest uppercase text-[#8B7355] mt-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {label}
                </div>
              </div>
              {i < 3 && (
                <div className="text-[#b8965a] text-xl font-light pb-4">:</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
