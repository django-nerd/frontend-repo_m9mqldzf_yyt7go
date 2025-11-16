import { useEffect, useState } from 'react'

export default function SafeSpline({ scene, className = '', style = {} }) {
  const [SplineComp, setSplineComp] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const mod = await import('@splinetool/react-spline')
        if (mounted) setSplineComp(() => mod.default)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn('Failed to load Spline, falling back:', e)
        setError(e)
      }
    })()
    return () => { mounted = false }
  }, [])

  if (error) return null
  if (!SplineComp) return null
  return <SplineComp scene={scene} className={className} style={style} />
}
