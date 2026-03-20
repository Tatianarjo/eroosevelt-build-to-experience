import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { projects } from '../data/content'
import styles from './Projects.module.css'

gsap.registerPlugin(ScrollTrigger)

const swatchColors: Record<string, string> = {
  'swatch-dark-metal': 'radial-gradient(ellipse at 30% 40%, #555 0%, #222 55%, #0a0a0a 100%)',
  'swatch-warm-gold':  'radial-gradient(ellipse at 60% 30%, #e8b86d 0%, #c97f2e 40%, #7a4010 100%)',
  'swatch-deep-teal':  'radial-gradient(ellipse at 40% 50%, #3ec9c9 0%, #1a7a7a 40%, #0d3d3d 100%)',
  'swatch-rust-brick': 'radial-gradient(ellipse at 50% 40%, #d4602a 0%, #9e3a18 50%, #5a1a08 100%)',
  'swatch-sage':       'radial-gradient(ellipse at 35% 45%, #8db87a 0%, #4e7a3c 50%, #2a4820 100%)',
}

export default function Projects() {
  const listRef    = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const [previewGradient, setPreviewGradient] = useState('')
  const [previewVisible,  setPreviewVisible]  = useState(false)

  // mouse position for preview card
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!previewRef.current) return
      gsap.to(previewRef.current, {
        x: e.clientX + 24,
        y: e.clientY - 80,
        duration: 0.35,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // stagger-in rows on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children ?? [], {
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      })
      gsap.from(listRef.current?.children ?? [], {
        scrollTrigger: { trigger: listRef.current, start: 'top 82%' },
        x: -50, opacity: 0, stagger: 0.09, duration: 0.75, ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  const handleEnter = (swatchClass: string) => {
    setPreviewGradient(swatchColors[swatchClass] ?? swatchColors['swatch-dark-metal'])
    setPreviewVisible(true)
    gsap.to(previewRef.current, { opacity: 1, scale: 1, rotate: 0, duration: 0.3, ease: 'power3.out' })
  }

  const handleLeave = () => {
    setPreviewVisible(false)
    gsap.to(previewRef.current, { opacity: 0, scale: 0.9, rotate: -2, duration: 0.25 })
  }

  return (
    <section id="work" className={styles.section}>

      {/* Floating preview */}
      <div
        ref={previewRef}
        className={styles.preview}
        style={{
          background: previewGradient,
          opacity: 0,
          transform: 'scale(0.9) rotate(-2deg)',
          pointerEvents: 'none',
        }}
      >
        {previewVisible && (
          <span className={styles.previewLabel}>View Project →</span>
        )}
      </div>

      <div ref={headerRef} className={styles.header}>
        <h2 className={styles.heading}>Selected<br />Work</h2>
        <a href="#" className={styles.viewAll}>View All Projects</a>
      </div>

      <div ref={listRef} className={styles.list}>
        {projects.map(p => (
          <div
            key={p.id}
            className={styles.row}
            onMouseEnter={() => handleEnter(p.swatchClass)}
            onMouseLeave={handleLeave}
            data-cursor-hover="true"
          >
            <div className={styles.rowFill} />
            <span className={styles.rowNum}>{p.num}</span>
            <span className={styles.rowName}>{p.name}</span>
            <span className={styles.rowType}>{p.type}</span>
            <span className={styles.rowYear}>{p.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
