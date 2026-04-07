"use client"
import { motion } from "framer-motion"

interface EnvelopeProps {
  onOpen: () => void
}

const ENVELOPE_PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${((i * 29 + 7) % 100)}%`,
  delay: (i * 1.3) % 6,
  duration: 6 + (i * 1.9) % 8,
  size: 2 + (i * 1.1) % 4,
  symbol: ['✦', '❦', '✧', '·'][i % 4],
}))

function FloatingParticles() {
  const particles = ENVELOPE_PARTICLES

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute text-[#b8965a]"
          style={{
            left: p.left,
            bottom: '-20px',
            fontSize: `${p.size * 3}px`,
            opacity: 0,
            animation: `drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  )
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden cursor-pointer select-none"
      style={{
        background: `
          radial-gradient(ellipse at 20% 10%, rgba(184,150,90,0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 90%, rgba(184,150,90,0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(212,196,175,0.4) 0%, transparent 70%),
          #f0ebe0
        `,
      }}
      onClick={onOpen}
    >
      <FloatingParticles />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Ccircle cx='60' cy='60' r='50' fill='none' stroke='%23a08060' stroke-width='0.3'/%3E%3Cellipse cx='60' cy='20' rx='10' ry='18' fill='%23a08060' opacity='0.2'/%3E%3Cellipse cx='60' cy='100' rx='10' ry='18' fill='%23a08060' opacity='0.2'/%3E%3Cellipse cx='20' cy='60' rx='18' ry='10' fill='%23a08060' opacity='0.2'/%3E%3Cellipse cx='100' cy='60' rx='18' ry='10' fill='%23a08060' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "140px 140px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="mb-8 text-center z-10"
      >
        <motion.div
          className="text-sm tracking-[0.4em] font-light uppercase mb-4"
          style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="gold-shimmer">You&apos;re Invited</span>
        </motion.div>
        <p
          className="text-[#5a4a35] tracking-[0.25em] uppercase text-xs font-light"
          style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
        >
          Come Celebrate With Us
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.75, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.04, y: -6 }}
        whileTap={{ scale: 0.96 }}
        className="relative z-10"
        style={{ width: "300px", height: "210px" }}
      >
        <motion.div
          className="absolute -inset-3 rounded-lg opacity-0"
          style={{
            background: "radial-gradient(ellipse, rgba(184,150,90,0.3), transparent 70%)",
          }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div
          className="absolute inset-0 rounded-sm"
          style={{
            background: "linear-gradient(160deg, #ede5d5 0%, #e0d5c0 50%, #d8cdb5 100%)",
            boxShadow: `
              0 25px 60px rgba(90,70,45,0.3),
              0 8px 20px rgba(90,70,45,0.15),
              inset 0 1px 0 rgba(255,255,255,0.4)
            `,
          }}
        />

        <div className="absolute top-0 left-0 right-0" style={{ height: "50%", overflow: "hidden" }}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "150px solid transparent",
              borderRight: "150px solid transparent",
              borderTop: "108px solid #cfc3ad",
            }}
          />
        </div>

        <div
          className="absolute bottom-0 left-0"
          style={{
            width: 0, height: 0,
            borderBottom: "105px solid #d4c9b5",
            borderRight: "150px solid transparent",
          }}
        />
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: 0, height: 0,
            borderBottom: "105px solid #ccc0ab",
            borderLeft: "150px solid transparent",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full"
          style={{
            width: "62px",
            height: "62px",
            background: "radial-gradient(circle at 35% 35%, #3a3a3a, #1a1a1a)",
            boxShadow: `
              0 6px 20px rgba(0,0,0,0.5),
              0 0 30px rgba(184,150,90,0.3),
              inset 0 1px 3px rgba(255,255,255,0.1)
            `,
          }}
          animate={{
            rotate: [0, 3, -3, 0],
            boxShadow: [
              "0 6px 20px rgba(0,0,0,0.5), 0 0 20px rgba(184,150,90,0.2), inset 0 1px 3px rgba(255,255,255,0.1)",
              "0 6px 20px rgba(0,0,0,0.5), 0 0 40px rgba(184,150,90,0.5), inset 0 1px 3px rgba(255,255,255,0.1)",
              "0 6px 20px rgba(0,0,0,0.5), 0 0 20px rgba(184,150,90,0.2), inset 0 1px 3px rgba(255,255,255,0.1)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-2xl font-bold italic"
            style={{
              fontFamily: 'var(--font-cinzel-decorative)',
              background: 'linear-gradient(135deg, #c9a96e, #e8d4a0, #c9a96e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: "none",
            }}
          >
            M
          </span>
        </motion.div>

        {[
          { top: '8px', left: '8px' },
          { top: '8px', right: '8px' },
          { bottom: '8px', left: '8px' },
          { bottom: '8px', right: '8px' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-[#b8965a] text-[8px]"
            style={pos}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
          >
            ✦
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-12 text-center z-10"
      >
        <motion.div
          className="inline-flex items-center gap-3"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #b8965a)" }} />
          <p
            className="text-[#5a4a35] tracking-[0.3em] uppercase text-xs"
            style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
          >
            Tap to Open
          </p>
          <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, #b8965a, transparent)" }} />
        </motion.div>
      </motion.div>
    </div>
  )
}
