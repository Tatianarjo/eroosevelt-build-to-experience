import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { buildSteps } from '../data/content'
import styles from './BuildToExperience.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function BuildToExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef   = useRef<HTMLDivElement>(null)
  const headerRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current?.children ?? [], {
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        y: 50, opacity: 0, stagger: 0.1, duration: 0.85, ease: 'power3.out',
      })
      gsap.from(stepsRef.current?.children ?? [], {
        scrollTrigger: { trigger: stepsRef.current, start: 'top 82%' },
        y: 55, opacity: 0, stagger: 0.14, duration: 0.85, ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className={styles.section}>
      <div className={styles.watermark} aria-hidden="true">Build</div>

      <div className={styles.inner}>
        <div ref={headerRef} className={styles.header}>
          <div className="section-eyebrow">Process</div>
          <h2 className={styles.heading}>
            Build-To-<br />Experience
          </h2>
        </div>

        <div ref={stepsRef} className={styles.steps}>
          {buildSteps.map(step => (
            <div key={step.num} className={styles.step} data-cursor-hover="true">
              <div className={styles.stepFill} />
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
