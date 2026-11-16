import type { ReactNode } from 'react'
import styles from './Container.module.css'

export function Container({
  children,
  narrow,
  className,
}: {
  children: ReactNode
  narrow?: boolean
  className?: string
}) {
  return (
    <div className={[styles.container, narrow && styles.narrow, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
