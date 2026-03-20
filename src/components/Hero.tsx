import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './Hero.module.css'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  { label: 'Opryland — Nashville, TN', cls: 'swatchDarkMetal', span: 'tall' },
  { label: "Slim & Husky's",           cls: 'swatchWarmGold',  span: 'normal' },
  { label: 'Experience ZUZU',          cls: 'swatchDeepTeal',  span: 'normal' },
  { label: 'Silver Tomato',            cls: 'swatchRustBrick', span: 'normal' },
  { label: 'Space / Exhibition',       cls: 'swatchSage',      span: 'normal' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const line1Ref   = useRef<HTMLHeadingElement>(null)
  const line2Ref   = useRef<HTMLHeadingElement>(null)
  const photosRef  = useRef<HTMLDivElement>(null)
  const subRef     = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 })

    tl.from(line1Ref.current, { y: 130, opacity: 0, duration: 1.1, ease: 'power4.out' })
      .from(line2Ref.current, { y: 130, opacity: 0, duration: 1.1, ease: 'power4.out' }, '-=0.65')
      .from(
        photosRef.current?.children ?? [],
        { y: 70, opacity: 0, stagger: 0.12, duration: 1.0, ease: 'power3.out' },
        '-=0.85',
      )
      .from(subRef.current, { y: 24, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.5')

    // parallax on photos while scrolling out
    const photos = photosRef.current?.children
    if (photos) {
      Array.from(photos).forEach((ph, i) => {
        gsap.to(ph, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
          y: (i % 2 === 0 ? 60 : 35) * (i * 0.25 + 0.5),
          ease: 'none',
        })
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="work" className={styles.hero}>

      {/* Headline */}
      <div className={styles.headline}>
        <h1 ref={line1Ref} className={styles.line}>BUILDING</h1>
        <h1 ref={line2Ref} className={styles.line}>EXPERIENCE</h1>
      </div>

      {/* Photo grid */}
      <div ref={photosRef} className={styles.grid}>
        {photos.map((p, i) => (
          <div
            key={i}
            className={`${styles.photo} ${styles[p.cls]} ${p.span === 'tall' ? styles.tall : ''}`}
          >
            <span className={styles.photoLabel}>{p.label}</span>
          </div>
        ))}
      </div>

      {/* Sub */}
      <div ref={subRef} className={styles.sub}>
        <p>Roosevelt Allen — Art. Design. Consultants.</p>
        <p className={styles.subMeta}>A Rosebud Group Company</p>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}
