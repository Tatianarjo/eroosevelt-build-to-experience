import { useEffect, useId, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styles from './Nav.module.css'

gsap.registerPlugin(ScrollTrigger)

const links = ['Work', 'Services', 'About', 'Contact']

export default function Nav() {
  const navRef  = useRef<HTMLElement>(null)
  const lastDir = useRef<number>(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerId = useId()

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    // entrance
    gsap.from(nav, { y: -60, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 })

    // hide / show on scroll direction
    const st = ScrollTrigger.create({
      start: 120,
      onUpdate(self) {
        if (self.direction === lastDir.current) return
        lastDir.current = self.direction
        gsap.to(nav, {
          y: self.direction === 1 ? -90 : 0,
          duration: 0.4,
          ease: self.direction === 1 ? 'power2.in' : 'power3.out',
        })
      },
    })

    return () => st.kill()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav ref={navRef} className={styles.nav}>
      <a href="#" className={styles.logo}>Roosevelt Allen</a>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className={styles.link}>
              {l}
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={styles.menuButton}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-controls={drawerId}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(v => !v)}
      >
        <span className={styles.menuIcon} aria-hidden="true" />
      </button>

      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id={drawerId}
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Menu</span>
          <button type="button" className={styles.drawerClose} onClick={() => setMenuOpen(false)}>
            Close
          </button>
        </div>

        <ul className={styles.drawerLinks}>
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => {
                  scrollTo(l)
                  setMenuOpen(false)
                }}
                className={styles.drawerLink}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  )
}
