import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { brand, nav } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from './Logo'
import styles from './Header.module.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={[styles.header, (scrolled || open) && styles.scrolled].filter(Boolean).join(' ')}>
      <Container className={styles.inner}>
        <Logo />

        <nav className={styles.nav} aria-label="Główna nawigacja">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={brand.phoneHref} className={styles.phone}>
            <Phone size={16} strokeWidth={2} />
            {brand.phone}
          </a>
          <Button href="#kontakt" className={styles.cta}>
            Umów konsultację
          </Button>
          <button
            className={styles.burger}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <div className={[styles.mobile, open && styles.mobileOpen].filter(Boolean).join(' ')}>
        <Container>
          <nav className={styles.mobileNav} aria-label="Menu mobilne">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileActions}>
            <Button href="#kontakt" block onClick={() => setOpen(false)}>
              Umów bezpłatną konsultację
            </Button>
            <Button href={brand.phoneHref} variant="outline" block icon={<Phone size={18} />}>
              {brand.phone}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
