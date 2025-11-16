import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1649972904349-c4f3f2f2c1f9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1639754390597-82fae4b1e004?q=80&w=1200&auto=format&fit=crop',
]

export default function Showcase() {
  return (
    <section className="relative bg-[#050509] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-bold">
          Verified Call Screenshots
        </motion.h2>
        <p className="mt-3 text-white/60">A few examples from the feed. Replace with your own proofs.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={src} alt="Signal proof" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(closest-side,rgba(56,189,248,0.3),transparent)] blur-3xl" />
    </section>
  )
}
