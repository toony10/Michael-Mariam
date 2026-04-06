"use client";
import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden cursor-pointer select-none"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(212,196,175,0.4) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, rgba(196,179,155,0.3) 0%, transparent 60%),
          #f0ebe0
        `,
      }}
      onClick={onOpen}
    >
      {/* Floral background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23a08060' stroke-width='0.5'/%3E%3Cellipse cx='50' cy='20' rx='8' ry='14' fill='%23a08060' opacity='0.3'/%3E%3Cellipse cx='50' cy='80' rx='8' ry='14' fill='%23a08060' opacity='0.3'/%3E%3Cellipse cx='20' cy='50' rx='14' ry='8' fill='%23a08060' opacity='0.3'/%3E%3Cellipse cx='80' cy='50' rx='14' ry='8' fill='%23a08060' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Top ornament */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-6 text-center"
      >
        <div className="text-[#8B7355] text-sm tracking-[0.35em] font-light uppercase mb-3">
          ✦ ✦ ✦
        </div>
        <p
          className="text-[#5a4a35] tracking-[0.25em] uppercase text-sm font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Come Celebrate With Us
        </p>
        <div className="text-[#8B7355] text-sm tracking-[0.35em] font-light mt-3">
          ✦ ✦ ✦
        </div>
      </motion.div>

      {/* Envelope */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        className="relative"
        style={{ width: "280px", height: "195px" }}
      >
        {/* Envelope body */}
        <div
          className="absolute inset-0 rounded-sm shadow-xl"
          style={{
            background: "linear-gradient(160deg, #ede5d5 0%, #e0d5c0 50%, #d8cdb5 100%)",
            boxShadow: "0 20px 60px rgba(90,70,45,0.25), 0 4px 12px rgba(90,70,45,0.15)",
          }}
        />

        {/* Envelope flap (top triangle) */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "50%",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "140px solid transparent",
              borderRight: "140px solid transparent",
              borderTop: "100px solid #cfc3ad",
            }}
          />
        </div>

        {/* Bottom left triangle */}
        <div
          className="absolute bottom-0 left-0"
          style={{
            width: 0,
            height: 0,
            borderBottom: "97px solid #d4c9b5",
            borderRight: "140px solid transparent",
          }}
        />
        {/* Bottom right triangle */}
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: 0,
            height: 0,
            borderBottom: "97px solid #ccc0ab",
            borderLeft: "140px solid transparent",
          }}
        />

        {/* Wax seal */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
          style={{
            width: "56px",
            height: "56px",
            background: "radial-gradient(circle at 35% 35%, #3a3a3a, #1a1a1a)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.1)",
          }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-[#c9a96e] text-2xl font-bold italic"
            style={{ fontFamily: "'Cinzel Decorative', cursive", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
          >
            M
          </span>
        </motion.div>
      </motion.div>

      {/* Tap to open */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-10 text-center"
      >
        <motion.p
          className="text-[#5a4a35] tracking-[0.3em] uppercase text-xs"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Tap to Open...
        </motion.p>
      </motion.div>
    </div>
  );
}
