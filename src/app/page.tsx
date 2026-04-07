"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Envelope from "@/components/Envelope"
import Invitation from "@/components/Invitation"

export default function Home() {
  const [opened, setOpened] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f0e8] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Envelope onOpen={() => setOpened(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <Invitation />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
