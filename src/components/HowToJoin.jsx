import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function HowToJoin() {
  return (
    <section id="join" className="relative bg-[#050509] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold">
          How to Join
        </motion.h2>
        <p className="mt-3 text-white/60">DM us on Telegram to get your invite link and start receiving VIP calls instantly.</p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-lg font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] transition-transform hover:scale-105"
          >
            <Send className="h-5 w-5" />
            Message @your_username
          </a>
          <span className="text-white/60">or search: VIP Memecoin Signals</span>
        </div>
      </div>
    </section>
  )
}
