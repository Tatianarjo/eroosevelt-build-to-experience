import { useRef } from 'react'
import { marqueeItems } from '../data/content'
import styles from './Marquee.module.css'

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  const items = [...marqueeItems, ...marqueeItems] // duplicate for seamless loop

  return (
    <div className={styles.wrapper}>
      <div
        ref={trackRef}
        className={styles.track}
        onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }}
        onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }}
      >
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  )
}
