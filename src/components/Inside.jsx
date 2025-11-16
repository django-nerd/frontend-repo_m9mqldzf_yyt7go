import { motion } from 'framer-motion'
import { Flame, Shield, BellRing } from 'lucide-react'

export default function Inside() {
  const items = [
    { icon: <BellRing className="h-6 w-6 text-cyan-300" />, title: '3+ Calls / Day', desc: 'Exclusive daily plays with entries, targets and risk levels.' },
    { icon: <Flame className="h-6 w-6 text-fuchsia-300" />, title: 'Early Gems', desc: 'Low MC opportunities before CT picks them up.' },
    { icon: <Shield className="h-6 w-6 text-emerald-300" />, title: 'Smart Risk', desc: 'Position sizing and stop concepts for high volatility.' },
  ]

  return (
    <section className="relative bg-[#050509] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold">
          What You Get Inside
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex rounded-lg bg-white/5 p-2">{i.icon}</div>
              <div className="text-lg font-semibold">{i.title}</div>
              <p className="mt-2 text-sm text-white/70">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(closest-side,rgba(56,189,248,0.25),transparent)] blur-3xl" />
    </section>
  )
}
