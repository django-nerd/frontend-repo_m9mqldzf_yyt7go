export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white/60">
      <div className="mx-auto max-w-6xl px-6 text-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} VIP Memecoin Signals. All rights reserved.</p>
          <div className="space-x-6">
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#join" className="hover:text-white">Join</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-white/50">
          Educational purposes only. Crypto trading involves significant risk. This is not financial advice. Past performance does not guarantee future results.
        </p>
      </div>
    </footer>
  )
}
