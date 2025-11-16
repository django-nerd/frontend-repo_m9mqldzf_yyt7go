import { motion } from 'framer-motion'
import SafeSpline from './SafeSpline'
import { TelegramIcon } from './icons/TelegramIcon'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <SafeSpline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.7)]" />
          Live alpha • 3+ premium signals daily
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Daily VIP Memecoin Signals
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-white/70"
        >
          Early MC gems, low-cap rockets and high-risk, high-reward setups delivered in real-time. Built like a premium crypto SaaS — designed for serious degen energy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#join"
            className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-lg font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] transition-transform hover:scale-105"
          >
            <TelegramIcon className="h-6 w-6" />
            Join Telegram
            <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/30 to-fuchsia-600/30 blur-xl" />
          </a>
          <a href="#how" className="text-white/70 hover:text-white">How it works</a>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-80 bg-[radial-gradient(closest-side,rgba(56,189,248,0.25),transparent)] blur-3xl" />
      </div>
    </section>
  )
}
