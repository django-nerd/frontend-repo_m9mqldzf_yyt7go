import { motion } from 'framer-motion'

function Sparkline({ points = [10, 15, 12, 18, 22, 20, 28], color = '#34d399' }) {
  const width = 240
  const height = 80
  const max = Math.max(...points)
  const min = Math.min(...points)
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * (width - 10) + 5
      const y = height - ((p - min) / (max - min)) * (height - 10) - 5
      return `${i === 0 ? 'M' : 'L'} ${x},${y}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="url(#grad)" strokeWidth="3" strokeLinecap="round" />
      {points.map((p, i) => (
        <circle key={i} cx={(i / (points.length - 1)) * (width - 10) + 5} cy={height - ((p - min) / (max - min)) * (height - 10) - 5} r="2.5" fill={color} />
      ))}
    </svg>
  )
}

export default function Performance() {
  const cards = [
    { title: 'Weekly ROI', points: [10, 12, 18, 15, 22, 28, 35], note: '+245% week-over-week' },
    { title: 'Hit Rate', points: [40, 45, 50, 52, 55, 58, 60], note: '60% profitable calls' },
    { title: 'Top Gainer', points: [1, 2, 3, 8, 12, 25, 40], note: 'Example: +40x from early entry' },
  ]

  return (
    <section className="relative bg-[#050509] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold">
          Performance & Results
        </motion.h2>
        <p className="mt-3 text-white/60">Sample metrics showcasing potential gains. Replace with real stats from your ledger.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((c, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-sm text-white/60">{c.title}</div>
              <Sparkline points={c.points} />
              <div className="mt-4 text-emerald-300">{c.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(closest-side,rgba(244,63,94,0.25),transparent)] blur-3xl" />
    </section>
  )
}
