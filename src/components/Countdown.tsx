"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const WEDDING_DATE = new Date("2026-05-03T19:00:00")

function pad(n: number) {
  return String(n).padStart(2, "0")
}

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
  }),
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now()
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 })
        return
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.mins, label: "Mins" },
    { value: timeLeft.secs, label: "Secs" },
  ]

  return (
    <section className="py-20 px-4 flex flex-col items-center relative z-10">
      <motion.div
        variants={ fadeInUp }
        initial="hidden"
        whileInView="visible"
        viewport={ { once: true, margin: "-50px" } }
        custom={ 0 }
        className="text-center mb-10"
      >
        <motion.div
          className="text-sm mb-4"
          animate={ { opacity: [0.5, 1, 0.5] } }
          transition={ { duration: 4, repeat: Infinity } }
        >
          <span className="gold-shimmer">❧ ✦ ❧</span>
        </motion.div>
        <h2
          className="text-[#3a2e1e] italic text-2xl md:text-3xl mb-2"
          style={ { fontFamily: 'var(--font-playfair-display)' } }
        >
          Counting Down to Our Day
        </h2>
        <motion.div
          className="text-sm mt-4"
          animate={ { opacity: [0.5, 1, 0.5] } }
          transition={ { duration: 4, delay: 2, repeat: Infinity } }
        >
          <span className="gold-shimmer">❧ ✦ ❧</span>
        </motion.div>
      </motion.div>

      <motion.div
        variants={ fadeInUp }
        initial="hidden"
        whileInView="visible"
        viewport={ { once: true, margin: "-50px" } }
        custom={ 0.2 }
        className="relative px-6 py-8 rounded-md card-glow"
        style={ {
          background: "linear-gradient(135deg, #ede5d5, #e8dcc8, #ede5d5)",
          border: "1px solid rgba(184,150,90,0.3)",
          boxShadow: "0 12px 48px rgba(90,70,45,0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
          minWidth: "300px",
        } }
      >
        { ['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
          <motion.div
            key={ pos }
            className={ `absolute ${ pos } text-[#b8965a] text-xs` }
            animate={ { opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.2, 0.8] } }
            transition={ { duration: 3, delay: i * 0.5, repeat: Infinity } }
          >
            ✦
          </motion.div>
        )) }

        <div className="flex gap-3 md:gap-5 items-center justify-center">
          { units.map(({ value, label }, i) => (
            <div key={ label } className="flex items-center gap-3 md:gap-5">
              <div className="text-center">
                <div
                  className="relative rounded-md px-3 py-2 mb-2"
                  style={ {
                    background: "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
                    border: "1px solid rgba(184,150,90,0.15)",
                    minWidth: "52px",
                  } }
                >
                  <motion.div
                    key={ value }
                    initial={ { y: -10, opacity: 0, scale: 0.9 } }
                    animate={ { y: 0, opacity: 1, scale: 1 } }
                    transition={ { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
                    className="text-3xl md:text-4xl font-bold text-[#3a2e1e]"
                    style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
                  >
                    { pad(value) }
                  </motion.div>
                </div>
                <div
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
                >
                  <span className="gold-shimmer">{ label }</span>
                </div>
              </div>
              { i < 3 && (
                <motion.div
                  className="text-xl font-light pb-6"
                  animate={ { opacity: [0.3, 1, 0.3] } }
                  transition={ { duration: 1.5, repeat: Infinity } }
                >
                  <span className="gold-shimmer">:</span>
                </motion.div>
              ) }
            </div>
          )) }
        </div>
      </motion.div>
    </section>
  )
}
