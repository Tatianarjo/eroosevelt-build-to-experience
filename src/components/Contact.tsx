import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './Contact.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgTextRef  = useRef<HTMLDivElement>(null)
  const leftRef    = useRef<HTMLDivElement>(null)
  const rightRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // parallax drift on ghost text
      gsap.to(bgTextRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
        x: -120,
        ease: 'none',
      })

      // reveal left column
      gsap.from(leftRef.current?.children ?? [], {
        scrollTrigger: { trigger: leftRef.current, start: 'top 85%' },
        y: 60, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out',
      })

      // reveal right column
      gsap.from(rightRef.current?.children ?? [], {
        scrollTrigger: { trigger: rightRef.current, start: 'top 85%' },
        y: 40, opacity: 0, stagger: 0.12, duration: 0.85, ease: 'power3.out',
        delay: 0.15,
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className={styles.section}>
      <div ref={bgTextRef} className={styles.bgText} aria-hidden="true">
        Roosevelt
      </div>

      <div className={styles.grid}>
        {/* Left */}
        <div ref={leftRef} className={styles.left}>
          <div className="section-eyebrow light">Get In Touch</div>
          <h2 className={styles.heading}>
            Let's Build<br />Something
          </h2>

          <div className={styles.detail}>
            <span className={styles.detailLabel}>Email</span>
            <a href="mailto:info@rooseveltallen.com" className={styles.detailValue}>
              info@rooseveltallen.com
            </a>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Company</span>
            <span className={styles.detailValue}>A Rosebud Group Company</span>
          </div>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>Services</span>
            <span className={styles.detailValue}>Art · Design · Consulting</span>
          </div>
        </div>

        {/* Right */}
        <div ref={rightRef} className={styles.right}>
          <p className={styles.pitch}>
            Thoughtfully curated art and design has the power to transform
            spaces, evoke emotions, and enhance brand experiences. Let's
            create something that lasts.
          </p>

          <a href="mailto:info@rooseveltallen.com" className={styles.cta} data-cursor-hover="true">
            <span className={styles.ctaFill} />
            <span className={styles.ctaText}>Start a Project</span>
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className={styles.footer}>
        <span className={styles.footerLogo}>Roosevelt Allen</span>
        <span className={styles.footerMeta}>© 2025 Roosevelt Allen. All rights reserved.</span>
        <span className={styles.footerMeta}><a href="https://eyecodeglitter.com/" data-cursor-hover="true">Powered by eyeCodeGlitter</a></span>
        <ul className={styles.footerLinks}>
          <li><a href="#" data-cursor-hover="true">Instagram</a></li>
          <li><a href="#" data-cursor-hover="true">LinkedIn</a></li>
          <li><a href="#" data-cursor-hover="true">Privacy</a></li>
        </ul>
      </div>
    </section>
  )
}
