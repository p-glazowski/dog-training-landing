import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import styles from './Reveal.module.css'

/** Fades + springs an element up when it scrolls into view (useme-style). */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className,
  style,
}: {
  children: ReactNode
  delay?: number
  as?: ElementType
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={[styles.reveal, visible && styles.visible, className].filter(Boolean).join(' ')}
      style={{ ...style, transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
