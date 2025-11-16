export default function Debug() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', color: '#0ff', fontFamily: 'system-ui, sans-serif' }}>
      <div>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>Debug Page</h1>
        <p>If you can see this, the router and React are working.</p>
        <p><a href="/" style={{ color: '#8ef' }}>Go back home</a></p>
      </div>
    </div>
  )
}
