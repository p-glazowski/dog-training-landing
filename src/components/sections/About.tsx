import { Award, BadgeCheck, HeartHandshake } from 'lucide-react'
import { about } from '../../data/content'
import { images } from '../../data/images'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Pill } from '../ui/Pill'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './About.module.css'

export function About() {
  return (
    <Section id="o-mnie" bg="white">
      <Container>
        <div className={styles.split}>
          <Reveal className={styles.visual}>
            <div className={styles.blob} aria-hidden />
            <div className={styles.photo}>
              <img src={images.about.src} alt={images.about.alt} style={{ objectPosition: images.about.pos }} loading="lazy" />
            </div>
            <div className={styles.badgeCard}>
              <HeartHandshake size={22} strokeWidth={1.8} />
              <span>
                <b>100% bez kar</b>
                <small>tylko pozytywne metody</small>
              </span>
            </div>
          </Reveal>

          <div className={styles.copy}>
            <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" className={styles.heading} />
            <Reveal delay={0.1} className={styles.paras}>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>
            <Reveal delay={0.18}>
              <ul className={styles.creds}>
                {about.credentials.map((c) => (
                  <li key={c}>
                    <Award size={20} strokeWidth={1.8} />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.26} className={styles.badges}>
              {about.badges.map((b) => (
                <Pill key={b} tone="soft">
                  <BadgeCheck size={14} />
                  {b}
                </Pill>
              ))}
            </Reveal>
            <Reveal delay={0.32}>
              <Button variant="link" href="#kontakt">
                Porozmawiajmy o Twoim psie
              </Button>
            </Reveal>
          </div>
        </div>

        <div className={styles.process}>
          <SectionHeading
            eyebrow="Jak to działa"
            title="Od pierwszej rozmowy do spokojnego spaceru"
            className={styles.processHeading}
          />
          <ol className={styles.steps}>
            {about.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.15 + i * 0.1} className={styles.step}>
                <span className={styles.num}>{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
