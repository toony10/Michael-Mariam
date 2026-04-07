"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const locations = [
  {
    name: "كنيسة مارجرجس",
    subtitle: "Church of Saint George",
    icon: <Image src="/images/wedding-svgrepo-com.svg" alt="Church" width={32} height={32} />,
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.038323929082!2d31.2074831!3d29.339872600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145993afb26e947d%3A0x8bd50c850c467afc!2z2YPZhtmK2LPYqSDYp9mE2LTZh9mK2K8g2KfZhNi52LjZitmFINmF2KfYsdis2LHYrNizINio2KfZhNmI2KfYs9i32Ykg2KXZitio2KfYsdi02YrZhyDYqNmG2Ykg2LPZiNmK2YEg2Ygg2KrZiNin2KjYudmH2Kc!5e0!3m2!1sar!2seg!4v1775550515773!5m2!1sar!2seg",
    directionsUrl: "https://maps.app.goo.gl/aTt9PhngzdhkWWMK9",
  },
  {
    name: "قاعة الملكة",
    subtitle: "Al Maleka Hall",
    icon: <Image src="/images/wedding-cake-cook-svgrepo-com.svg" alt="Wedding Hall" width={32} height={32} />,
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.763041768951!2d31.2095239!3d29.347939500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145993650b991023%3A0x77841f34bbe4a647!2z2YLYp9i52Kkg2KfZhNmF2YTZg9ipINmE2YTYrdmB2YTYp9iq!5e0!3m2!1sar!2seg!4v1775550711468!5m2!1sar!2seg",
    directionsUrl: "https://maps.app.goo.gl/oyiriCSWCvMAQHCD7",
  },
]

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.25,
      ease: EASE_OUT_EXPO,
    },
  }),
}

export default function GettingThere() {
  return (
    <section className="py-20 px-4 flex flex-col items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
        <motion.div
          className="text-sm mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <span className="gold-shimmer">❧ ✦ ❧</span>
        </motion.div>
        <h2
          className="text-[#3a2e1e] italic text-2xl md:text-3xl mb-2"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          Getting There
        </h2>
        <p
          className="text-xs tracking-[0.15em] uppercase mt-3"
          style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
        >
          <span className="gold-shimmer">Two locations, one celebration</span>
        </p>
        <motion.div
          className="text-sm mt-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, delay: 2, repeat: Infinity }}
        >
          <span className="gold-shimmer">❧ ✦ ❧</span>
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-10 w-4/5 md:w-full max-w-lg">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            custom={i}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="rounded-lg overflow-hidden card-glow"
            style={{
              border: "1px solid rgba(184,150,90,0.3)",
              background: "#ede5d5",
            }}
          >
            <div
              className="px-6 py-5 flex items-center gap-3 justify-center relative"
              style={{
                background: "linear-gradient(135deg, #ede5d5, #e8dcc8, #ede5d5)",
                borderBottom: "1px solid rgba(184,150,90,0.25)",
              }}
            >
              {['top-2 left-3', 'top-2 right-3'].map((pos, j) => (
                <motion.div
                  key={pos}
                  className={`absolute ${pos} text-[#b8965a] text-[8px]`}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, delay: j * 1, repeat: Infinity }}
                >
                  ✦
                </motion.div>
              ))}

              <div className="text-center">
                <div
                  className="text-[#3a2e1e] font-semibold text-base mb-0.5"
                  style={{ fontFamily: 'var(--font-playfair-display)' }}
                >
                  {loc.name}
                </div>
                <div
                  className="text-xs tracking-[0.12em]"
                  style={{ fontFamily: 'var(--font-cormorant-garamond)' }}
                >
                  <span className="gold-shimmer">{loc.subtitle}</span>
                </div>
              </div>
              <span className="text-xl">{loc.icon}</span>
            </div>

            <div className="relative" style={{ height: "230px" }}>
              <iframe
                src={loc.embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={loc.name}
              />
            </div>

            <motion.a
              href={loc.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 text-sm tracking-[0.18em] uppercase relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #3a2e1e, #4a3c2a, #3a2e1e)",
                backgroundSize: "200% 200%",
                color: "#e8d9c0",
                fontFamily: 'var(--font-cormorant-garamond)',
              }}
              whileHover={{
                backgroundPosition: "100% 100%",
                letterSpacing: "0.22em",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📍
              </motion.span>
              <span>Open Directions</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
