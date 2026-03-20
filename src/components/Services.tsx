import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './Services.module.css'

gsap.registerPlugin(ScrollTrigger)

interface ServiceNode {
  label:   string
  color:   string
  symbol:  string
  posX:    string
  posY:    string
}

const nodes: ServiceNode[] = [
  { label: 'Art Curation',       color: 'rgba(210,140,80,0.28)',   symbol: '🖼',  posX: '18%',  posY: '10%' },
  { label: 'Custom Artwork',     color: 'rgba(100,180,200,0.28)',  symbol: '✦',  posX: '62%',  posY: '6%'  },
  { label: 'Concept & Strategy', color: 'rgba(160,200,120,0.28)',  symbol: '⬡',  posX: '2%',   posY: '36%' },
  { label: 'Design Development', color: 'rgba(200,120,160,0.28)',  symbol: '◈',  posX: '74%',  posY: '30%' },
  { label: 'Fabrication',        color: 'rgba(180,160,100,0.28)',  symbol: '⬢',  posX: '5%',   posY: '65%' },
  { label: 'Project Management', color: 'rgba(120,140,200,0.28)',  symbol: '▲',  posX: '70%',  posY: '62%' },
  { label: 'Installation',       color: 'rgba(200,160,120,0.28)',  symbol: '◎',  posX: '26%',  posY: '80%' },
  { label: 'Long-Term Strategy', color: 'rgba(140,200,160,0.28)',  symbol: '∞',  posX: '58%',  posY: '78%' },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const nodesRef   = useRef<(HTMLDivElement | null)[]>([])
  const centerRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(centerRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
        scale: 0.75, opacity: 0, duration: 0.9, ease: 'power4.out',
      })

      nodesRef.current.forEach((node, i) => {
        if (!node) return
        gsap.from(node, {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
          scale: 0,
          opacity: 0,
          duration: 0.55,
          delay: 0.08 + i * 0.07,
          ease: 'back.out(1.5)',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className="section-eyebrow light">What We Do</div>
          <h2 className={styles.heading}>Our<br />Services</h2>
        </div>
        <p className={styles.subhead}>
          A dedicated team. A unified vision.<br />
          Transforming spaces from concept to installation.
        </p>
      </div>

      <div className={styles.mindmap}>
        {/* SVG connector lines */}
        <svg className={styles.svg} viewBox="0 0 1200 700" preserveAspectRatio="none">
          <path className={styles.line} d="M600 350 Q450 220 216 70"   />
          <path className={styles.line} d="M600 350 Q610 160 744 42"   />
          <path className={styles.line} d="M600 350 Q340 350 24 252"   />
          <path className={styles.line} d="M600 350 Q850 280 888 210"  />
          <path className={styles.line} d="M600 350 Q320 480 60 455"   />
          <path className={styles.line} d="M600 350 Q820 440 840 434"  />
          <path className={styles.line} d="M600 350 Q500 540 312 560"  />
          <path className={styles.line} d="M600 350 Q660 540 696 546"  />
        </svg>

        {/* Center */}
        <div ref={centerRef} className={styles.center}>
          <h3 className={styles.centerText}>Art Meets<br />Architecture</h3>
        </div>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <div
            key={node.label}
            ref={el => { nodesRef.current[i] = el }}
            className={styles.node}
            style={{ left: node.posX, top: node.posY }}
          >
            <div className={styles.bubble}>
              <div className={styles.icon} style={{ background: node.color }}>
                {node.symbol}
              </div>
              <span className={styles.nodeLabel}>{node.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mobileList}>
        <ul className={styles.mobileCards}>
          {nodes.map(node => (
            <li key={node.label} className={styles.mobileCard}>
              <div className={styles.mobileCardIcon} style={{ background: node.color }}>
                {node.symbol}
              </div>
              <div className={styles.mobileCardText}>
                <span className={styles.mobileCardLabel}>{node.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
