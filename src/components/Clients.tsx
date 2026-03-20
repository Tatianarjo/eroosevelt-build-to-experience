import { useScrollReveal } from '../hooks/useScrollReveal'
import { clientGroups } from '../data/content'
import styles from './Clients.module.css'

export default function Clients() {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' })
  const colsRef   = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.12, delay: 0.1 })

  return (
    <section id="about" className={styles.section}>
      <div ref={headerRef} className={styles.header}>
        <h2 className={styles.heading}>Clients</h2>
        <span className={styles.sub}>Trusted by leading brands &amp; developers</span>
      </div>

      <div ref={colsRef} className={styles.cols}>
        {clientGroups.map(group => (
          <div key={group.category} className={styles.col}>
            <h4 className={styles.category}>{group.category}</h4>
            <ul className={styles.list}>
              {group.clients.map(client => (
                <li key={client} className={styles.client}>{client}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
