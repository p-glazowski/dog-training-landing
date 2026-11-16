import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import { brand, nav, services } from '../../data/content'
import { Container } from '../ui/Container'
import { Logo } from './Logo'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.cols}>
          <div>
            <h4 className={styles.colTitle}>Usługi</h4>
            <ul>
              {services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#uslugi">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={styles.colTitle}>PsiaKlasa</h4>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={styles.colTitle}>Kontakt</h4>
            <ul className={styles.contactList}>
              <li>
                <Phone size={16} />
                <a href={brand.phoneHref}>{brand.phone}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{brand.area}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={styles.colTitle}>Obserwuj nas</h4>
            <p className={styles.small}>Codzienne porady treningowe i psie historie.</p>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.brandRow}>
          <Logo inverted />
          <p className={styles.small}>
            Szkolenie psów metodami pozytywnymi · {brand.trainer} · {brand.hours}
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span>
            © 2026 {brand.name} · Projekt koncepcyjny – dane i opinie są przykładowe.
          </span>
          <span className={styles.credit}>
            Projekt i realizacja:{' '}
            <a href="https://glazowski-web.com" rel="author" target="_blank">
              glazowski-web.com
            </a>
          </span>
        </div>
      </Container>
    </footer>
  )
}
