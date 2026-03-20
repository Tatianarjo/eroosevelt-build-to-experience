import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    if (!cursor || !ring) return

    let rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.08, overwrite: true })
      rx += (e.clientX - rx) * 0.12
      ry += (e.clientY - ry) * 0.12
    }

    let rafId: number
    const animateRing = () => {
      if (ring) {
        ring.style.left = rx + 'px'
        ring.style.top  = ry + 'px'
      }
      rafId = requestAnimationFrame(animateRing)
    }

    const onEnterLink = () => {
      gsap.to(cursor, { width: 32,  height: 32,  duration: 0.3 })
      gsap.to(ring,   { width: 64,  height: 64,  opacity: 0.5, duration: 0.3 })
    }

    const onLeaveLink = () => {
      gsap.to(cursor, { width: 12,  height: 12,  duration: 0.3 })
      gsap.to(ring,   { width: 40,  height: 40,  opacity: 1,   duration: 0.3 })
    }

    document.addEventListener('mousemove', onMove)
    animateRing()

    // attach hover effects to interactive elements
    const attachHovers = () => {
      document
        .querySelectorAll('a, button, [data-cursor-hover]')
        .forEach(el => {
          el.addEventListener('mouseenter', onEnterLink)
          el.addEventListener('mouseleave', onLeaveLink)
        })
    }

    // run once DOM is ready, then re-run on any mutation
    attachHovers()
    const observer = new MutationObserver(attachHovers)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return { cursorRef, ringRef }
}
