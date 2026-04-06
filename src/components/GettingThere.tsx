"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const locations = [
  {
    name: "كنيسة مارجرجس",
    subtitle: "Church of Saint George",
    icon: <Image src="/images/wedding-svgrepo-com.svg" alt="Church" width={ 32 } height={ 32 } />,
    mapSrc:
      "https://www.google.com/maps?q=https://maps.app.goo.gl/aTt9PhngzdhkWWMK9&output=embed",
    embedSrc:
      "https://maps.google.com/maps?q=30.0626,31.2497&z=16&output=embed",
    directionsUrl: "https://maps.app.goo.gl/aTt9PhngzdhkWWMK9",
  },
  {
    name: "قاعة الملكة",
    subtitle: "Al Maleka Hall",
    icon: <Image src="/images/wedding-cake-cook-svgrepo-com.svg" alt="Wedding Hall" width={ 32 } height={ 32 } />,
    embedSrc:
      "https://maps.google.com/maps?q=30.0444,31.2357&z=16&output=embed",
    directionsUrl: "https://maps.app.goo.gl/oyiriCSWCvMAQHCD7",
  },
];

export default function GettingThere() {
  return (
    <section className="py-16 px-4 flex flex-col items-center">
      {/* Title */ }
      <motion.div
        initial={ { opacity: 0, y: 20 } }
        whileInView={ { opacity: 1, y: 0 } }
        viewport={ { once: true } }
        transition={ { duration: 0.8 } }
        className="text-center mb-10"
      >
        <div className="text-[#b8965a] text-sm mb-3">❧ ✦ ❧</div>
        <h2
          className="text-[#3a2e1e] italic text-2xl md:text-3xl mb-2"
          style={ { fontFamily: "'Playfair Display', serif" } }
        >
          Getting There
        </h2>
        <div className="text-[#b8965a] text-sm mt-3">❧ ✦ ❧</div>
      </motion.div>

      {/* Maps */ }
      <div className="flex flex-col gap-8 w-full max-w-lg">
        { locations.map((loc, i) => (
          <motion.div
            key={ loc.name }
            initial={ { opacity: 0, y: 30 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            transition={ { duration: 0.8, delay: i * 0.2 } }
            className="rounded-md overflow-hidden"
            style={ {
              boxShadow: "0 8px 32px rgba(90,70,45,0.18)",
              border: "1px solid #c9b896",
            } }
          >
            {/* Card header */ }
            <div
              className="px-5 py-4 flex items-center gap-2 justify-center"
              style={ {
                background: "linear-gradient(135deg, #ede5d5, #e0d5c0)",
                borderBottom: "1px solid #c9b896",
              } }
            >
              <div>
                <div
                  className="text-[#3a2e1e] font-semibold text-base"
                  style={ { fontFamily: "'Playfair Display', serif" } }
                >
                  { loc.name }
                </div>
                <div
                  className="text-[#8B7355] text-xs tracking-wider"
                  style={ { fontFamily: "'Cormorant Garamond', serif" } }
                >
                  { loc.subtitle }
                </div>
              </div>
              <span className="text-xl">{ loc.icon }</span>
            </div>

            {/* Map iframe */ }
            <div className="relative" style={ { height: "220px" } }>
              <iframe
                src={ loc.embedSrc }
                width="100%"
                height="100%"
                style={ { border: 0 } }
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={ loc.name }
              />
            </div>

            {/* Directions button */ }
            <a
              href={ loc.directionsUrl }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm tracking-widest uppercase transition-all"
              style={ {
                background: "linear-gradient(135deg, #3a2e1e, #5a4a35)",
                color: "#e8d9c0",
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.15em",
              } }
            >
              <span>📍</span>
              <span>Open Directions</span>
            </a>
          </motion.div>
        )) }
      </div>
    </section>
  );
}
