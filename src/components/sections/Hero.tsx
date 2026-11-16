import { CalendarCheck, Star } from 'lucide-react'
import { hero } from '../../data/content'
import { images } from '../../data/images'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Pill } from '../ui/Pill'
import { Reveal } from '../ui/Reveal'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <Reveal>
              <Pill>{hero.pill}</Pill>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className={styles.title}>{hero.title}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className={styles.lead}>{hero.lead}</p>
            </Reveal>
            <Reveal delay={0.24} className={styles.ctas}>
              <Button href="#kontakt" size="lg">
                {hero.primary}
              </Button>
              <Button href="#uslugi" variant="outline" size="lg">
                {hero.secondary}
              </Button>
            </Reveal>
          </div>

          <div className={styles.visual}>
            <div className={styles.circle} aria-hidden />
            <Reveal className={styles.photoWrap} delay={0.1}>
              <img
                className={styles.photo}
                src={images.hero.src}
                style={{ objectPosition: images.hero.pos }}
                alt={images.hero.alt}
                fetchPriority="high"
              />
            </Reveal>

            <Reveal className={[styles.float, styles.floatRating].join(' ')} delay={0.35}>
              <span className={styles.floatIconOrange}>
                <Star size={18} fill="currentColor" strokeWidth={0} />
              </span>
              <span>
                <b className={styles.floatBig}>{hero.floatRating.value}</b>
                <span className={styles.floatSmall}>{hero.floatRating.label}</span>
              </span>
            </Reveal>

            <Reveal className={[styles.float, styles.floatLesson].join(' ')} delay={0.5}>
              <span className={styles.floatIconGreen}>
                <CalendarCheck size={18} strokeWidth={2} />
              </span>
              <span>
                <span className={styles.floatSmall}>{hero.floatLesson.title}</span>
                <b className={styles.floatMid}>{hero.floatLesson.value}</b>
              </span>
            </Reveal>
          </div>
        </div>

        <Reveal className={styles.stats} delay={0.2}>
          {hero.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
