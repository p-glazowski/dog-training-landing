import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { gallery, testimonials } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Testimonials.module.css'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length
  const go = (d: number) => setIndex((i) => (i + d + count) % count)

  return (
    <Section id="opinie" bg="grey">
      <Container>
        <div className={styles.split}>
          <div className={styles.side}>
            <SectionHeading
              eyebrow="Opinie"
              title="Co mówią opiekunowie moich podopiecznych"
              align="left"
              className={styles.heading}
            />
            <Reveal delay={0.1} className={styles.rating}>
              <span className={styles.ratingValue}>4.9</span>
              <span>
                <span className={styles.stars} aria-label="5 gwiazdek">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className={styles.ratingLabel}>na podstawie 120 opinii Google</span>
              </span>
            </Reveal>
            <Reveal delay={0.18} className={styles.gallery}>
              {gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt} style={{ objectPosition: g.pos }} loading="lazy" />
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className={styles.carousel}>
            <div className={styles.viewport}>
              <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <figure key={t.name} className={styles.card} aria-hidden={i !== index}>
                    <Quote className={styles.quoteIcon} size={36} strokeWidth={1.5} />
                    <span className={styles.problem}>{t.problem}</span>
                    <blockquote>{t.quote}</blockquote>
                    <figcaption className={styles.author}>
                      <img src={t.avatar.src} alt={t.avatar.alt} style={{ objectPosition: t.avatar.pos }} loading="lazy" />
                      <span>
                        <b>{t.name}</b>
                        <small>{t.dog}</small>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className={styles.controls}>
              <div className={styles.dots}>
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    className={[styles.dot, i === index && styles.dotActive].filter(Boolean).join(' ')}
                    aria-label={`Opinia ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <div className={styles.arrows}>
                <button className={styles.arrow} onClick={() => go(-1)} aria-label="Poprzednia opinia">
                  <ArrowLeft size={20} />
                </button>
                <button
                  className={[styles.arrow, styles.arrowActive].join(' ')}
                  onClick={() => go(1)}
                  aria-label="Następna opinia"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
