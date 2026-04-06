"use client";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import GettingThere from "./GettingThere";
import Image from "next/image";
export default function Invitation() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={ {
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(212,196,175,0.4) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, rgba(196,179,155,0.3) 0%, transparent 60%),
          #f0ebe0
        `,
      } }
    >
      {/* Floral background */ }
      <div
        className="fixed inset-0 opacity-[0.07] pointer-events-none"
        style={ {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23a08060' stroke-width='0.5'/%3E%3Cellipse cx='50' cy='20' rx='8' ry='14' fill='%23a08060' opacity='0.3'/%3E%3Cellipse cx='50' cy='80' rx='8' ry='14' fill='%23a08060' opacity='0.3'/%3E%3Cellipse cx='20' cy='50' rx='14' ry='8' fill='%23a08060' opacity='0.3'/%3E%3Cellipse cx='80' cy='50' rx='14' ry='8' fill='%23a08060' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        } }
      />

      {/* ========== SECTION 1: Envelope open + Names ========== */ }
      <section className="relative flex flex-col items-center pt-12 pb-8 px-4">
        {/* Envelope (open, flap up) */ }
        <motion.div
          initial={ { opacity: 0, y: 40, scale: 0.85 } }
          animate={ { opacity: 1, y: 0, scale: 1 } }
          transition={ { duration: 0.9, ease: "easeOut" } }
          className="relative mb-[-40px] z-10"
          style={ { width: "min(320px, 90vw)", height: "230px" } }
        >
          {/* Envelope body */ }
          <div
            className="absolute inset-0 rounded-sm shadow-2xl"
            style={ {
              background: "linear-gradient(160deg, #ede5d5 0%, #e0d5c0 50%, #d8cdb5 100%)",
              overflow: "hidden",
            } }
          >
            <motion.div initial={ { opacity: 0, y: 40, scale: 0.85 } }
              animate={ { opacity: 1, y: 0, scale: 1 } }
              transition={ { duration: 1, ease: "easeOut" } }>
              <Image src="/images/wedding.jpg" alt="Envelope" width={ 320 } height={ 230 } />
            </motion.div>
          </div>
          {/* Open flap (rotated up) */ }
          <motion.div
            initial={ { rotateX: 0 } }
            animate={ { rotateX: -160 } }
            transition={ { duration: 1, delay: 0.5, ease: "easeInOut" } }
            className="absolute top-0 left-0 right-0 origin-top"
            style={ { transformStyle: "preserve-3d", perspective: "600px", height: "50%" } }
          >
            <div
              style={ {
                width: 0,
                height: 0,
                borderLeft: "min(160px, 45vw) solid transparent",
                borderRight: "min(160px, 45vw) solid transparent",
                borderTop: "122px solid #cfc3ad",
              } }
            />
          </motion.div>
          {/* Bottom triangles */ }
          <div
            className="absolute bottom-0 left-0"
            style={ {
              width: 0, height: 0,
              borderBottom: "115px solid #d4c9b5",
              borderRight: "min(160px, 45vw) solid transparent",
            } }
          />
          <div
            className="absolute bottom-0 right-0"
            style={ {
              width: 0, height: 0,
              borderBottom: "115px solid #ccc0ab",
              borderLeft: "min(160px, 45vw) solid transparent",
            } }
          />
        </motion.div>

        {/* Couple illustration area — names emerge from envelope */ }
        <motion.div
          initial={ { opacity: 0, y: 60 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 1, delay: 0.9, ease: "easeOut" } }
          className="relative z-20 w-full flex flex-col items-center"
          style={ {
            background: "linear-gradient(180deg, #ede5d5 0%, #f0ebe0 100%)",
            borderRadius: "2px",
            padding: "48px 24px 32px",
            maxWidth: "380px",
            boxShadow: "0 12px 48px rgba(90,70,45,0.15)",
            border: "1px solid #d4c4a0",
          } }
        >
          {/* Top ornament */ }
          <div className="text-[#b8965a] text-lg mb-4 tracking-widest">❦ ✦ ❦</div>

          {/* Names */ }
          <div className="flex items-center gap-3 mb-2">
            <motion.span
              initial={ { opacity: 0, x: -30 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 0.8, delay: 1.3 } }
              className="text-4xl md:text-5xl text-[#3a2e1e]"
              style={ { fontFamily: "'Great Vibes', cursive" } }
            >
              Michael
            </motion.span>
            <motion.span
              initial={ { opacity: 0, scale: 0 } }
              animate={ { opacity: 1, scale: 1 } }
              transition={ { duration: 0.5, delay: 1.6 } }
              className="text-[#b8965a] text-xl"
              style={ { fontFamily: "'Cormorant Garamond', serif" } }
            >
              &amp;
            </motion.span>
            <motion.span
              initial={ { opacity: 0, x: 30 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 0.8, delay: 1.3 } }
              className="text-4xl md:text-5xl text-[#3a2e1e]"
              style={ { fontFamily: "'Great Vibes', cursive" } }
            >
              Mariam
            </motion.span>
          </div>

          {/* Divider */ }
          <motion.div
            initial={ { scaleX: 0 } }
            animate={ { scaleX: 1 } }
            transition={ { duration: 0.8, delay: 1.8 } }
            className="w-48 h-px mb-6 mt-2"
            style={ { background: "linear-gradient(90deg, transparent, #b8965a, transparent)" } }
          />

          {/* Date */ }
          <motion.div
            initial={ { opacity: 0, y: 10 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6, delay: 2.0 } }
            className="text-center mb-4"
          >
            <div
              className="text-[#3a2e1e] font-semibold tracking-[0.2em] text-sm uppercase"
              style={ { fontFamily: "'Cormorant Garamond', serif" } }
            >
              3rd of May, 2026
            </div>
            <div
              className="text-[#8B7355] text-xs tracking-wider mt-1"
              style={ { fontFamily: "'Cormorant Garamond', serif" } }
            >
              — At 6 PM —
            </div>
          </motion.div>

          {/* Venues */ }
          <motion.div
            initial={ { opacity: 0, y: 10 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6, delay: 2.2 } }
            className="text-center space-y-2"
          >
            <div
              className="text-[#3a2e1e] text-sm tracking-wide"
              style={ { fontFamily: "'Cormorant Garamond', serif" } }
            >
              كنيسة مارجرجس . الواسطى
            </div>
            <div className="text-[#b8965a] text-xs">✦</div>
            <div
              className="text-[#3a2e1e] text-sm tracking-wide"
              style={ { fontFamily: "'Cormorant Garamond', serif" } }
            >
              قاعة الملكة
            </div>
          </motion.div>

          {/* Bottom ornament */ }
          <div className="text-[#b8965a] text-lg mt-6 tracking-widest">❦ ✦ ❦</div>
        </motion.div>
      </section>

      {/* Divider */ }
      <div className="flex items-center justify-center py-4 px-8">
        <div className="flex-1 h-px" style={ { background: "linear-gradient(90deg, transparent, #c9b896)" } } />
        <div className="mx-4 text-[#b8965a] text-sm">✦</div>
        <div className="flex-1 h-px" style={ { background: "linear-gradient(90deg, #c9b896, transparent)" } } />
      </div>

      {/* ========== SECTION 2: Countdown ========== */ }
      <Countdown />

      {/* Divider */ }
      <div className="flex items-center justify-center py-2 px-8">
        <div className="flex-1 h-px" style={ { background: "linear-gradient(90deg, transparent, #c9b896)" } } />
        <div className="mx-4 text-[#b8965a] text-sm">✦</div>
        <div className="flex-1 h-px" style={ { background: "linear-gradient(90deg, #c9b896, transparent)" } } />
      </div>

      {/* ========== SECTION 3: Getting There ========== */ }
      <GettingThere />

      {/* Footer */ }
      <motion.footer
        initial={ { opacity: 0 } }
        whileInView={ { opacity: 1 } }
        viewport={ { once: true } }
        className="text-center pb-12 pt-4"
      >
        <div className="text-[#b8965a] text-lg mb-2">❦ ✦ ❦</div>
        <p
          className="text-[#8B7355] text-xs tracking-widest uppercase"
          style={ { fontFamily: "'Cormorant Garamond', serif" } }
        >
          We can&apos;t wait to share this moment with you
        </p>
        <div className="text-[#b8965a] text-lg mt-2">❦ ✦ ❦</div>
      </motion.footer>
    </div>
  );
}
