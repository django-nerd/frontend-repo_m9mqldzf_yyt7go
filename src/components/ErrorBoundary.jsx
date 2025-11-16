import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('UI ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
          <div className="max-w-lg text-center">
            <h1 className="text-2xl font-bold mb-3">Something went wrong.</h1>
            <p className="text-white/70">The page failed to render. Try refreshing, or visit the Test page to diagnose.</p>
            <a href="/test" className="inline-block mt-6 px-4 py-2 rounded bg-white/10 hover:bg-white/20">Open Test Page</a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
