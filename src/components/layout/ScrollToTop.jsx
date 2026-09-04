import { useEffect, useState } from 'react'
import './ScrollToTop.css'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 360)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollHome = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button className={`scroll-to-top${isVisible ? ' scroll-to-top--visible' : ''}`} type="button" aria-label="Back to home" onClick={scrollHome}>
      <span aria-hidden="true">↑</span>
    </button>
  )
}

export default ScrollToTop
