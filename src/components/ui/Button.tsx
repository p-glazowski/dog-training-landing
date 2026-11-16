import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'outline' | 'dark' | 'link'

type Common = {
  variant?: Variant
  size?: 'md' | 'lg'
  block?: boolean
  icon?: ReactNode
  children: ReactNode
  className?: string
}

type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export function Button(props: AsLink | AsButton) {
  const { variant = 'primary', size = 'md', block, icon, children, className, ...rest } = props
  const cls = [styles.btn, styles[variant], styles[size], block && styles.block, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
      {variant === 'link' && (
        <span className={styles.chevron} aria-hidden>
          ›
        </span>
      )}
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
