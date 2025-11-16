import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section className="relative bg-[#050509] py-24 text-white" id="pricing">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold">
          VIP Access
        </motion.h2>
        <p className="mt-3 text-white/60">Unlock premium signals, faster entries and full performance tracking.</p>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 shadow-[0_0_40px_rgba(99,102,241,0.25)]">
            <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 blur-2xl" />
            <div className="relative">
              <div className="text-white/70">Monthly</div>
              <div className="mt-2 text-5xl font-extrabold tracking-tight">$49</div>
              <ul className="mt-6 space-y-2 text-left text-white/80">
                <li>• 3+ exclusive calls every day</li>
                <li>• Early MC gems and low-cap plays</li>
                <li>• Real-time push alerts</li>
                <li>• Transparent results board</li>
              </ul>
              <a href="#join" className="mt-8 inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-6 py-3 text-lg font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.45)] transition-transform hover:scale-105">Join VIP</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
