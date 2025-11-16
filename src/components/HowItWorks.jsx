import { motion } from 'framer-motion'
import { ChartBar, GaugeCircle, BarChart3, BadgeDollarSign } from 'lucide-react'

export default function HowItWorks() {
  const items = [
    {
      icon: <GaugeCircle className="h-6 w-6 text-cyan-400" />,
      title: 'At Call: Market Cap Snapshot',
      desc: 'Each signal shows exact MC at the time of call with contract/liquidity details.'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-fuchsia-400" />,
      title: 'Live Tracking: Current MC',
      desc: 'We update performance as MC moves so you always see real-time progress.'
    },
    {
      icon: <ChartBar className="h-6 w-6 text-emerald-400" />,
      title: 'Profit + Drawdown',
      desc: 'Transparent PnL and risk metrics per call with visual progression.'
    },
    {
      icon: <BadgeDollarSign className="h-6 w-6 text-purple-400" />,
      title: 'Full Transparency',
      desc: 'All calls are timestamped with links and verifiable screenshots.'
    }
  ]

  return (
    <section id="how" className="relative z-10 bg-[#050509] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold">
          How the Calls Work
        </motion.h2>
        <p className="mt-3 text-white/60 max-w-2xl">We publish clear entries with risk context, track performance live, and keep a public ledger for accountability.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-white/5 p-2">{i.icon}</div>
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-white/70">{i.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(closest-side,rgba(168,85,247,0.25),transparent)] blur-3xl" />
    </section>
  )
}
