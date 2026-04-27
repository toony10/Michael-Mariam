"use client"

import { useCallback, useEffect, useState, type FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { supabase } from "@/lib/supabase"

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE_OUT_EXPO },
  }),
}

type ToastState = { message: string; variant: "success" | "error" } | null

const inputClassName =
  "box-border w-full rounded-md px-4 py-3.5 text-[15px] leading-relaxed text-[#3a2e1e] placeholder:text-[#6b5d4a]/55 " +
  "outline-none transition-[box-shadow,border-color] duration-200 " +
  "border-2 border-solid border-[#5a4a35] bg-[#fffdf8] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] " +
  "focus:border-[#3a2e1e] focus:ring-2 focus:ring-[rgba(58,46,30,0.2)] focus:ring-offset-1 focus:ring-offset-[#ede5d5] " +
  "disabled:cursor-not-allowed disabled:opacity-60"

export default function MessageForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [nameError, setNameError] = useState("")
  const [messageError, setMessageError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<ToastState>(null)

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(null), 4800)
    return () => window.clearTimeout(id)
  }, [toast])

  const dismissToast = useCallback(() => setToast(null), [])

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dismissToast()

      const trimmedName = name.trim()
      const trimmedMessage = message.trim()
      let hasError = false

      if (!trimmedName) {
        setNameError("Please enter your name.")
        hasError = true
      } else {
        setNameError("")
      }

      if (!trimmedMessage) {
        setMessageError("Please write a message.")
        hasError = true
      } else {
        setMessageError("")
      }

      if (hasError) return

      const url = process.env.NEXT_PUBLIC_SUPABASE_URL
      const key =
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
      if (!url || !key) {
        setToast({
          variant: "error",
          message: "Message sending is not configured yet.",
        })
        return
      }

      setIsSubmitting(true)
      const { error } = await supabase.from("messages").insert({
        name: trimmedName,
        message: trimmedMessage,
      })
      setIsSubmitting(false)

      if (error) {
        setToast({
          variant: "error",
          message: error.message || "Something went wrong. Please try again.",
        })
        return
      }

      setToast({ variant: "success", message: "Your message was sent. Thank you!" })
      setName("")
      setMessage("")
    },
    [dismissToast, message, name]
  )

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
          Leave us a message
        </h2>
        <p
          className="text-xs tracking-[0.15em] uppercase mt-3"
          style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
        >
          <span className="gold-shimmer">We would love to hear from you!</span>
        </p>
        <motion.div
          className="text-sm mt-4"
          animate={ { opacity: [0.5, 1, 0.5] } }
          transition={ { duration: 4, delay: 2, repeat: Infinity } }
        >
          <span className="gold-shimmer">❧ ✦ ❧</span>
        </motion.div>
      </motion.div>

      <motion.form
        variants={ fadeInUp }
        initial="hidden"
        whileInView="visible"
        viewport={ { once: true, margin: "-40px" } }
        custom={ 0.15 }
        onSubmit={ handleSubmit }
        className="w-full max-w-lg relative mx-4 px-7 pb-9 pt-10 sm:mx-0 sm:px-9 sm:pb-10 sm:pt-11"
        noValidate
      >
        { ['top-4 right-5', 'bottom-4 left-5', 'bottom-4 right-5'].map((pos, i) => (
          <motion.div
            key={ pos }
            className={ `absolute ${ pos } text-[#b8965a] text-[10px] pointer-events-none z-0 opacity-80` }
            animate={ { opacity: [0.35, 0.75, 0.35], scale: [0.95, 1.05, 0.95] } }
            transition={ { duration: 3, delay: i * 0.5, repeat: Infinity } }
          >
            ✦
          </motion.div>
        )) }

        <div className="relative z-1 flex flex-col gap-9">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="guest-name"
              className="block w-full text-center text-sm font-semibold tracking-[0.12em] uppercase text-[#3a2e1e]"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              Name
            </label>
            <input
              id="guest-name"
              name="name"
              type="text"
              placeholder="Enter your name here..."
              autoComplete="name"
              value={ name }
              onChange={ (ev) => {
                setName(ev.target.value)
                if (nameError) setNameError("")
                if (toast) dismissToast()
              } }

              className={ inputClassName }
              style={ { fontFamily: 'var(--font-cormorant-garamond)', border: '1px solid #b8965a', borderRadius: '4px' } }
              disabled={ isSubmitting }
              aria-invalid={ Boolean(nameError) }
              aria-describedby={ nameError ? "guest-name-error" : undefined }
            />
            { nameError ? (
              <p id="guest-name-error" className="text-center text-sm text-[#7a2e12]" role="alert">
                { nameError }
              </p>
            ) : null }
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="guest-message"
              className="block w-full text-center text-sm font-semibold tracking-[0.12em] uppercase text-[#3a2e1e]"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              Message
            </label>
            <textarea
              id="guest-message"
              name="message"
              rows={ 5 }
              placeholder="Write your message here..."
              value={ message }
              onChange={ (ev) => {
                setMessage(ev.target.value)
                if (messageError) setMessageError("")
                if (toast) dismissToast()
              } }
              className={ `${ inputClassName } resize-y min-h-[140px]` }
              style={ { fontFamily: 'var(--font-cormorant-garamond)', border: '1px solid #b8965a', borderRadius: '4px' } }
              disabled={ isSubmitting }
              aria-invalid={ Boolean(messageError) }
              aria-describedby={ messageError ? "guest-message-error" : undefined }
            />
            { messageError ? (
              <p id="guest-message-error" className="text-center text-sm text-[#7a2e12]" role="alert">
                { messageError }
              </p>
            ) : null }
          </div>

          <motion.button
            type="submit"
            disabled={ isSubmitting }
            className="w-full flex items-center justify-center gap-2 py-3.5 text-sm tracking-[0.18em] uppercase relative overflow-hidden rounded-md disabled:cursor-not-allowed disabled:opacity-70"
            style={ {
              background: "linear-gradient(135deg, #3a2e1e, #4a3c2a, #3a2e1e)",
              backgroundSize: "200% 200%",
              color: "#e8d9c0",
              fontFamily: 'var(--font-cormorant-garamond)',
            } }
            whileHover={
              isSubmitting
                ? undefined
                : {
                  backgroundPosition: "100% 100%",
                  letterSpacing: "0.22em",
                }
            }
            transition={ { duration: 0.3 } }
          >
            { isSubmitting ? "Sending…" : "Send message" }
          </motion.button>
        </div>
      </motion.form>

      <AnimatePresence>
        { toast ? (
          <motion.div
            key={ toast.variant + toast.message }
            role={ toast.variant === "error" ? "alert" : "status" }
            aria-live="polite"
            initial={ { opacity: 0, y: -24 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0, y: -12 } }
            transition={ { duration: 0.35, ease: EASE_OUT_EXPO } }
            className="fixed left-1/2 z-200 flex max-w-[min(420px,calc(100vw-2rem))] -translate-x-1/2 flex-col gap-2 rounded-lg px-5 py-4 shadow-[0_12px_40px_rgba(58,46,30,0.35)]"
            style={ {
              top: "max(1.5rem, env(safe-area-inset-top, 0px))",
              background:
                toast.variant === "success"
                  ? "linear-gradient(135deg, #3a2e1e, #4f4030, #3a2e1e)"
                  : "linear-gradient(135deg, #4a2c20, #5c3828, #4a2c20)",
              border: "1px solid rgba(212,184,122,0.45)",
            } }
          >
            <p
              className="text-center text-[15px] leading-snug text-[#f5ead8]"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              { toast.variant === "success" ? (
                <span className="gold-shimmer text-[16px] font-medium">{ toast.message }</span>
              ) : (
                toast.message
              ) }
            </p>
            <button
              type="button"
              onClick={ dismissToast }
              className="self-center text-[11px] uppercase tracking-[0.2em] text-[#d4b87a]/90 hover:text-[#f0e4cc] transition-colors"
              style={ { fontFamily: 'var(--font-cormorant-garamond)' } }
            >
              Dismiss
            </button>
          </motion.div>
        ) : null }
      </AnimatePresence>
    </section>
  )
}
