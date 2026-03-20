import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './Gallery.module.css'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { label: 'Opryland / Nashville',  cls: 'swatchDarkMetal', tall: true  },
  { label: "Slim & Husky's",        cls: 'swatchWarmGold',  tall: false },
  { label: 'Experience ZUZU',       cls: 'swatchDeepTeal',  tall: true  },
  { label: 'Silver Tomato',         cls: 'swatchRustBrick', tall: false },
]

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cells = gridRef.current?.children
      if (!cells) return
      gsap.from(Array.from(cells), {
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
        y: 70,
        opacity: 0,
        stagger: 0.1,
        duration: 1.0,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.gallery}>
      <div ref={gridRef} className={styles.grid}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${styles.cell} ${item.tall ? styles.tall : ''}`}
            data-cursor-hover="true"
          >
            <div className={`${styles.fill} ${styles[item.cls]}`} />
            <span className={styles.caption}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
