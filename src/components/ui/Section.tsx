import type { ReactNode } from 'react'
import styles from './Section.module.css'

type Bg = 'white' | 'grey' | 'mint' | 'warm' | 'cta'

export function Section({
  id,
  bg = 'white',
  children,
  className,
  compact,
}: {
  id?: string
  bg?: Bg
  children: ReactNode
  className?: string
  compact?: boolean
}) {
  return (
    <section
      id={id}
      className={[styles.section, styles[bg], compact && styles.compact, className].filter(Boolean).join(' ')}
    >
      {children}
    </section>
  )
}
