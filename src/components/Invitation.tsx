"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Countdown from "./Countdown"
import GettingThere from "./GettingThere"
import MessageForm from "./MessageForm"
import Image from "next/image"

const PARTICLE_DATA = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${ (((i * 37 + 13) % 100)) }%`,
  delay: (i * 1.7) % 8,
  duration: 8 + (i * 2.3) % 10,
  symbol: ['✦', '❦', '✧'][i % 3],
  size: 8 + (i * 1.5) % 6,
}))

function FloatingParticles() {
  const particles = PARTICLE_DATA

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      { particles.map(p => (
        <div
          key={ p.id }
          className="absolute text-[#b8965a]"
          style={ {
            left: p.left,
            bottom: '-20px',
            fontSize: `${ p.size }px`,
            opacity: 0,
            animation: `drift ${ p.duration }s ease-in-out ${ p.delay }s infinite`,
          } }
        >
          { p.symbol }
        </div>
      )) }
    </div>
  )
}

function SectionDivider() {
  return (
    <motion.div
      initial={ { opacity: 0, scaleX: 0 } }
      whileInView={ { opacity: 1, scaleX: 1 } }
      viewport={ { once: true, margin: "-50px" } }
      transition={ { duration: 1, ease: "easeOut" } }
      className="flex items-center justify-center py-8 px-8"
    >
      <div className="flex-1 h-px gold-divider" />
      <motion.div
        className="mx-5 text-[#b8965a]"
        animate={ { rotate: [0, 180, 360], scale: [1, 1.2, 1] } }
        transition={ { duration: 6, repeat: Infinity, ease: "easeInOut" } }
      >
        ✦
      </motion.div>
      <div className="flex-1 h-px gold-divider" />
    </motion.div>
  )
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE_OUT_EXPO },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }),
}

export default function Invitation() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <div
      className="min-h-screen overflow-x-hidden relative"
      style={ {
        background: `
          radial-gradient(ellipse at 20% 10%, rgba(184,150,90,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 30%, rgba(184,150,90,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 70%, rgba(212,196,175,0.3) 0%, transparent 60%),
          #f0ebe0
        `,
      } }
    >
      <FloatingParticles />

      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={ {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Ccircle cx='60' cy='60' r='50' fill='none' stroke='%23a08060' stroke-width='0.3'/%3E%3Cellipse cx='60' cy='20' rx='10' ry='18' fill='%23a08060' opacity='0.2'/%3E%3Cellipse cx='60' cy='100' rx='10' ry='18' fill='%23a08060' opacity='0.2'/%3E%3Cellipse cx='20' cy='60' rx='18' ry='10' fill='%23a08060' opacity='0.2'/%3E%3Cellipse cx='100' cy='60' rx='18' ry='10' fill='%23a08060' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "140px 140px",
        } }
      />

      {/* ========== HERO SECTION ========== */ }
      <motion.section
        ref={ heroRef }
        style={ { y: heroY, opacity: heroOpacity } }
        className="relative flex flex-col items-center pt-12 pb-8 px-4 z-10"
      >
        {/* Envelope (open, flap up) */ }
        <motion.div
          variants={ scaleIn }
          initial="hidden"
          animate="visible"
          custom={ 0 }
          className="relative mb-[-40px] z-10"
          style={ { width: "min(340px, 90vw)", height: "245px" } }
        >
          <div
            className="absolute inset-0 rounded-sm"
            style={ {
              background: "linear-gradient(160deg, #ede5d5 0%, #e0d5c0 50%, #d8cdb5 100%)",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(90,70,45,0.25), 0 4px 16px rgba(90,70,45,0.1)",
            } }
          >
            <motion.div
              initial={ { opacity: 0, scale: 1.1 } }
              animate={ { opacity: 1, scale: 1 } }
              transition={ { duration: 2.5, ease: "easeOut", delay: 0.7 } }
            >
              <Image src="/images/wedding.png" alt="Wedding" width={ 340 } height={ 245 } className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <motion.div
            initial={ { rotateX: 0 } }
            animate={ { rotateX: -160 } }
            transition={ { duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] } }
            className="absolute top-0 left-0 right-0 origin-top"
            style={ { transformStyle: "preserve-3d", perspective: "600px", height: "50%" } }
          >
            <div
              style={ {
                width: 0,
                height: 0,
                borderLeft: "min(170px, 45vw) solid transparent",
                borderRight: "min(170px, 45vw) solid transparent",
                borderTop: "130px solid #cfc3ad",
              } }
            />
          </motion.div>

          <div
            className="absolute bottom-0 left-0"
            style={ {
              width: 0, height: 0,
              borderBottom: "122px solid #d4c9b5",
              borderRight: "min(170px, 45vw) solid transparent",
            } }
          />
          <div
            className="absolute bottom-0 right-0"
            style={ {
              width: 0, height: 0,
              borderBottom: "122px solid #ccc0ab",
              borderLeft: "min(170px, 45vw) solid transparent",
            } }
          />
        </motion.div>

        {/* Names Card */ }
        <motion.div
          variants={ fadeInUp }
          initial="hidden"
          animate="visible"
          custom={ 0.8 }
          className="relative z-20 w-full flex flex-col items-center card-glow"
          style={ {
            background: "linear-gradient(180deg, #ede5d5 0%, #f0ebe0 60%, #ede5d5 100%)",
            borderRadius: "4px",
            padding: "52px 28px 36px",
            maxWidth: "400px",
            boxShadow: "0 16px 64px rgba(90,70,45,0.18), 0 4px 12px rgba(90,70,45,0.08)",
            border: "1px solid rgba(184,150,90,0.3)",
          } }
        >
          {/* Corner ornaments */ }
          { ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
            <motion.div
              key={ pos }
              className={ `absolute ${ pos } text-[#b8965a] text-xs` }
              animate={ { opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] } }
              transition={ { duration: 3, delay: i * 0.4, repeat: Infinity } }
            >
              ❦
            </motion.div>
          )) }

          <motion.div
            className="text-lg mb-5 tracking-widest"
            animate={ { opacity: [0.5, 1, 0.5] } }
            transition={ { duration: 4, repeat: Infinity, ease: "easeInOut" } }
          >
            <span className="gold-shimmer text-xl">❦ ✦ ❦</span>
          </motion.div>

          {/* Names */ }
          <div className="flex items-center gap-3 mb-3">
            <motion.span
              initial={ { opacity: 0, x: -40 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] } }
              className="text-4xl md:text-5xl text-[#3a2e1e]"
              style={ { fontFamily: 'var(--font-great-vibes)' } }
            >
              Michael
            </motion.span>
            <motion.span
              initial={ { opacity: 0, scale: 0, rotate: -180 } }
              animate={ { opacity: 1, scale: 1, rotate: 0 } }
              transition={ { duration: 0.8, delay: 1.5, ease: "easeOut" } }
              className="text-xl"
            >
              <span className="gold-shimmer text-2xl" style={ { fontFamily: 'var(--font-cormorant-garamond)' } }>&amp;</span>
            </motion.span>
            <motion.span
              initial={ { opacity: 0, x: 40 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] } }
              className="text-4xl md:text-5xl text-[#3a2e1e]"
              style={ { fontFamily: 'var(--font-great-vibes)' } }
            >
              Mariam
            </motion.span>
          </div>

          {/* Animated Divider */ }
          <motion.div
            initial={ { scaleX: 0 } }
            animate={ { scaleX: 1 } }
            transition={ { duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] } }
            className="w-56 h-px mb-6 mt-2 gold-divider"
            style={ { height: "1.5px" } }
          />

          {/* Date */ }
          <motion.div
            initial={ { opacity: 0, y: 15 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 2.0, ease: "easeOut" } }
            className="text-center mb-5"
          >
            <div
              className="text-[#3a2e1e] font-semibold tracking-[0.25em] text-sm uppercase"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              3rd of May, 2026
            </div>
            <div
              className="text-xs tracking-wider mt-2"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              <span className="gold-shimmer">— At 6 PM —</span>
            </div>
          </motion.div>

          {/* Venues */ }
          <motion.div
            initial={ { opacity: 0, y: 15 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.8, delay: 2.3, ease: "easeOut" } }
            className="text-center space-y-3"
          >
            <div
              className="text-[#3a2e1e] text-sm tracking-wide"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              كنيسة مارجرجس . الواسطى
            </div>
            <motion.div
              className="text-xs"
              animate={ { scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] } }
              transition={ { duration: 3, repeat: Infinity } }
            >
              <span className="gold-shimmer">✦</span>
            </motion.div>
            <div
              className="text-[#3a2e1e] text-sm tracking-wide"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              قاعة الملكة
            </div>
          </motion.div>

          <motion.div
            className="text-lg mt-7 tracking-widest"
            animate={ { opacity: [0.5, 1, 0.5] } }
            transition={ { duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" } }
          >
            <span className="gold-shimmer text-xl">❦ ✦ ❦</span>
          </motion.div>
        </motion.div>
      </motion.section>

      <SectionDivider />

      {/* ========== COUNTDOWN ========== */ }
      <Countdown />

      <SectionDivider />

      {/* ========== GETTING THERE ========== */ }
      <GettingThere />

      <SectionDivider />

      {/* ========== MESSAGES ========== */ }
      <MessageForm />

      {/* ========== FOOTER ========== */ }
      <motion.footer
        initial={ { opacity: 0, y: 30 } }
        whileInView={ { opacity: 1, y: 0 } }
        viewport={ { once: true, margin: "-50px" } }
        transition={ { duration: 1, ease: "easeOut" } }
        className="text-center pb-16 pt-8 relative z-10"
      >
        <motion.div
          className="text-lg mb-3"
          animate={ { opacity: [0.4, 1, 0.4] } }
          transition={ { duration: 4, repeat: Infinity } }
        >
          <span className="gold-shimmer text-xl">❦ ✦ ❦</span>
        </motion.div>
        <motion.p
          className="text-xs tracking-[0.2em] uppercase mb-1"
          style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
          initial={ { opacity: 0 } }
          whileInView={ { opacity: 1 } }
          viewport={ { once: true } }
          transition={ { duration: 1, delay: 0.3 } }
        >
          <span className="gold-shimmer">We can&apos;t wait to share this moment with you</span>
        </motion.p>
        <motion.p
          className="text-[#8B7355] text-[10px] tracking-[0.15em] uppercase mt-3"
          style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
          initial={ { opacity: 0 } }
          whileInView={ { opacity: 1 } }
          viewport={ { once: true } }
          transition={ { duration: 1, delay: 0.5 } }
        >
          Michael &amp; Mariam
        </motion.p>
        <motion.div
          className="text-lg mt-3"
          animate={ { opacity: [0.4, 1, 0.4] } }
          transition={ { duration: 4, delay: 2, repeat: Infinity } }
        >
          <span className="gold-shimmer text-xl">❦ ✦ ❦</span>
        </motion.div>
      </motion.footer>
    </div>
  )
}
