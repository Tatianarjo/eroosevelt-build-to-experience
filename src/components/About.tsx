import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './About.module.css'

export default function About() {
  const leftRef  = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: 'up', delay: 0.15 })

  return (
    <section id="about" className={styles.about}>
      <div ref={leftRef} className={styles.left}>
        <div className={styles.bigNum}>25+</div>
        <p className={styles.numLabel}>Years of combined experience</p>
      </div>

      <div ref={rightRef} className={styles.right}>
        <div className="section-eyebrow">About</div>
        <h2 className={styles.heading}>
          Art Synced<br />With Vision
        </h2>
        <p className={styles.body}>
          Roosevelt Allen brings proven experience delivering multi-million-dollar
          projects across galleries, museums, hospitality, and commercial spaces.
          We specialize in executing complex creative environments — blending
          artistic vision, technical precision, and real-world build expertise
          into seamless, high-impact results.
        </p>
        <div className={styles.tag}>
          <span className={styles.tagLine} />
          A Rosebud Group Company
        </div>
      </div>
    </section>
  )
}
