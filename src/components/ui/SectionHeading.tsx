import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import styles from './SectionHeading.module.css'

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  lead?: ReactNode
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <Reveal className={[styles.wrap, styles[align], className].filter(Boolean).join(' ')}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </Reveal>
  )
}
