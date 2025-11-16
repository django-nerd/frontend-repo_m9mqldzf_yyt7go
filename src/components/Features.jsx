import { motion } from 'framer-motion'
import { Rocket, Zap, LineChart, ShieldCheck } from 'lucide-react'

const items = [
  { icon: <Rocket className="h-6 w-6" />, title: 'Early MC Calls', desc: 'We hunt microcaps before the crowd for asymmetric upside.' },
  { icon: <Zap className="h-6 w-6" />, title: 'Real-Time Signals', desc: 'Immediate entries with ticker, MC, liquidity and links.' },
  { icon: <LineChart className="h-6 w-6" />, title: 'Expert Analysis', desc: 'Concise breakdowns: catalysts, narratives, risks.' },
  { icon: <ShieldCheck className="h-6 w-6" />, title: 'Transparent Results', desc: 'Public ledger of calls with performance tracking.' },
]

export default function Features() {
  return (
    <section className="relative bg-[#050509] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold">
          Why Traders Choose Us
        </motion.h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-2 text-cyan-300 group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/30">{i.icon}</div>
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-white/70">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(closest-side,rgba(16,185,129,0.25),transparent)] blur-3xl" />
    </section>
  )
}
