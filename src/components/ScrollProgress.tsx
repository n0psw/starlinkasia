import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const h = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setProgress(scrollHeight > clientHeight ? (scrollTop / (scrollHeight - clientHeight)) * 100 : 0)
    }
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: 'rgba(255,255,255,0.06)' }}>
      <div className="h-full bg-white/30 transition-all duration-100" style={{ width: `${progress}%` }}/>
    </div>
  )
}

export default ScrollProgress
