import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Direction = 'up' | 'in' | 'left'

interface RevealOptions {
  direction?: Direction
  delay?: number
  stagger?: number
  start?: string
}

export function useScrollReveal<T extends HTMLElement>(opts: RevealOptions = {}) {
  const ref = useRef<T>(null)
  const { direction = 'up', delay = 0, stagger = 0, start = 'top 88%' } = opts

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger > 0 ? Array.from(el.children) : [el]

    const from: gsap.TweenVars = {
      opacity: 0,
      ...(direction === 'up'   ? { y: 70 } : {}),
      ...(direction === 'left' ? { x: -50 } : {}),
    }

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
        ...from,
        duration: direction === 'in' ? 0.8 : 0.95,
        delay,
        stagger,
        ease: 'power3.out',
        clearProps: 'all',
      })
    })

    return () => ctx.revert()
  }, [direction, delay, stagger, start])

  return ref
}
