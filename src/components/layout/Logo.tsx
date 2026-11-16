import { PawPrint } from 'lucide-react'
import { brand } from '../../data/content'
import styles from './Logo.module.css'

export function Logo({ inverted }: { inverted?: boolean }) {
  return (
    <a href="#top" className={[styles.logo, inverted && styles.inverted].filter(Boolean).join(' ')} aria-label={`${brand.name} – strona główna`}>
      <span className={styles.mark}>
        <PawPrint size={18} strokeWidth={2.2} />
      </span>
      <span className={styles.word}>
        Psia<b>Klasa</b>
      </span>
    </a>
  )
}
