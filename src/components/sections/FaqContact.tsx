import { useState, type FormEvent } from 'react'
import { ChevronDown, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { brand, contact, cta, faq } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './FaqContact.module.css'

function FaqItem({ q, a, open, onToggle, id }: { q: string; a: string; open: boolean; onToggle: () => void; id: string }) {
  return (
    <div className={[styles.item, open && styles.itemOpen].filter(Boolean).join(' ')}>
      <button className={styles.question} aria-expanded={open} aria-controls={id} onClick={onToggle}>
        <span>{q}</span>
        <ChevronDown size={20} className={styles.chevron} />
      </button>
      <div id={id} className={styles.answerWrap} role="region">
        <div className={styles.answerInner}>
          <p className={styles.answer}>{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FaqContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Placeholder – sending logic comes later.
  const handleSubmit = (e: FormEvent) => e.preventDefault()

  return (
    <>
      {/* CTA band */}
      <Section bg="cta" compact>
        <Container>
          <Reveal className={styles.cta}>
            <h2>{cta.title}</h2>
            <p>{cta.lead}</p>
            <Button href={brand.phoneHref} variant="dark" size="lg" icon={<Phone size={18} />}>
              {cta.button}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section id="faq" bg="white">
        <Container narrow>
          <SectionHeading
            eyebrow="FAQ"
            title="Najczęściej zadawane pytania"
            lead="Nie znalazłeś odpowiedzi? Napisz – chętnie pomogę."
          />
          <Reveal className={styles.list}>
            {faq.map((f, i) => (
              <FaqItem
                key={f.q}
                id={`faq-${i}`}
                q={f.q}
                a={f.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="kontakt" bg="mint">
        <Container>
          <div className={styles.contact}>
            <div className={styles.info}>
              <SectionHeading eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} align="left" className={styles.contactHeading} />
              <Reveal delay={0.1}>
                <ul className={styles.infoList}>
                  <li>
                    <span className={styles.infoIcon}><Phone size={20} /></span>
                    <span>
                      <small>Telefon</small>
                      <a href={brand.phoneHref}>{brand.phone}</a>
                    </span>
                  </li>
                  <li>
                    <span className={styles.infoIcon}><Mail size={20} /></span>
                    <span>
                      <small>E-mail</small>
                      <a href={`mailto:${brand.email}`}>{brand.email}</a>
                    </span>
                  </li>
                  <li>
                    <span className={styles.infoIcon}><MapPin size={20} /></span>
                    <span>
                      <small>Obszar działania</small>
                      <b>{brand.area}</b>
                    </span>
                  </li>
                  <li>
                    <span className={styles.infoIcon}><Clock size={20} /></span>
                    <span>
                      <small>Godziny</small>
                      <b>{brand.hours}</b>
                    </span>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={0.18} className={styles.reply}>
                <MessageCircle size={18} />
                Odpowiadam w ciągu 24 godzin
              </Reveal>
            </div>

            <Reveal delay={0.12}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Wyślij wiadomość</h3>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Imię</span>
                  <input type="text" name="name" placeholder="np. Anna" autoComplete="given-name" />
                </label>
                <label className={styles.field}>
                  <span>Telefon lub e-mail</span>
                  <input type="text" name="contact" placeholder="np. 500 000 000" />
                </label>
              </div>
              <div className={styles.row}>
                <label className={styles.field}>
                  <span>Rasa psa</span>
                  <input type="text" name="breed" placeholder="np. labrador" />
                </label>
                <label className={styles.field}>
                  <span>Wiek psa</span>
                  <select name="age" defaultValue="">
                    <option value="" disabled>
                      Wybierz
                    </option>
                    <option>Szczeniak (do 6 mies.)</option>
                    <option>Junior (6–18 mies.)</option>
                    <option>Dorosły</option>
                    <option>Senior (8+ lat)</option>
                  </select>
                </label>
              </div>
              <label className={styles.field}>
                <span>W czym mogę pomóc?</span>
                <textarea name="message" rows={4} placeholder="Opisz krótko zachowanie psa lub cel treningu…" />
              </label>
              <Button type="submit" size="lg" block icon={<Send size={18} />}>
                Wyślij wiadomość
              </Button>
              <p className={styles.note}>Wysyłając formularz, zgadzasz się na kontakt w sprawie zapytania.</p>
            </form>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
