import type { ReactNode } from 'react'
import styles from './Pill.module.css'

export function Pill({
  children,
  tone = 'green',
  className,
}: {
  children: ReactNode
  tone?: 'green' | 'soft' | 'orange'
  className?: string
}) {
  return <span className={[styles.pill, styles[tone], className].filter(Boolean).join(' ')}>{children}</span>
}
