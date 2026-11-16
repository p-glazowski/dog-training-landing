import { Check } from 'lucide-react'
import { services } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Pill } from '../ui/Pill'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Services.module.css'

export function Services() {
  return (
    <Section id="uslugi" bg="mint">
      <Container>
        <SectionHeading
          eyebrow="Programy szkoleniowe"
          title="Trening dopasowany do Twojego psa"
          lead="Każdy pies jest inny. Wybierz program, od którego chcesz zacząć – resztę dopasujemy razem podczas pierwszej rozmowy."
        />

        <div className={styles.grid}>
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={0.08 * (i % 3)}
              className={[styles.card, s.featured && styles.featured].filter(Boolean).join(' ')}
            >
              {s.featured && <Pill className={styles.badge}>Najczęściej wybierane</Pill>}
              <div className={styles.media}>
                <img src={s.image.src} alt={s.image.alt} style={{ objectPosition: s.image.pos }} loading="lazy" />
              </div>
              <div className={styles.body}>
                <span className={styles.eyebrow}>{s.eyebrow}</span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <ul className={styles.points}>
                  {s.points.map((p) => (
                    <li key={p}>
                      <Check size={18} strokeWidth={2.5} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className={styles.footer}>
                  <span className={styles.price}>{s.price}</span>
                  <Button variant="link" href="#kontakt">
                    Szczegóły
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.more}>
          <Button href="#kontakt" variant="outline">
            Nie wiesz, co wybrać? Zapytaj
          </Button>
        </Reveal>
      </Container>
    </Section>
  )
}
