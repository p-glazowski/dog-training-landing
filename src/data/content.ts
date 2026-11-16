import { images, type Photo } from './images'

export const brand = {
  name: 'PsiaKlasa',
  trainer: 'Marta Nowak',
  phone: '+48 123 456 789',
  phoneHref: 'tel:+48123456789',
  email: 'kontakt@psiaklasa.example',
  area: 'Warszawa i okolice (do 30 km)',
  hours: 'Pon–Pt 8:00–19:00 · Sob 9:00–14:00',
}

export const nav = [
  { label: 'Usługi', href: '#uslugi' },
  { label: 'O mnie', href: '#o-mnie' },
  { label: 'Opinie', href: '#opinie' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export const hero = {
  pill: 'Pozytywne metody · bez kar i przemocy',
  title: 'Spokojne spacery. Pewne przywołanie. Szczęśliwy pies.',
  lead: 'Uczę psy i ich opiekunów porozumienia opartego na zaufaniu. Treningi indywidualne w Twojej okolicy – od pierwszych dni szczeniaka po trudne zachowania.',
  primary: 'Umów bezpłatną konsultację',
  secondary: 'Zobacz programy',
  floatRating: { value: '4.9', label: '120 opinii Google' },
  floatLesson: { title: 'Kolejna lekcja', value: 'wt, 17:00 · Pola Mokotowskie' },
  stats: [
    { value: '10+', label: 'lat doświadczenia' },
    { value: '500+', label: 'wyszkolonych psów' },
    { value: '4.9★', label: 'średnia ocena' },
    { value: '24h', label: 'czas odpowiedzi' },
  ],
}

export type Service = {
  eyebrow: string
  title: string
  desc: string
  points: string[]
  price: string
  image: Photo
  featured?: boolean
}

export const services: Service[] = [
  {
    eyebrow: '2–6 miesięcy',
    title: 'Psie przedszkole',
    desc: 'Dobry start: socjalizacja, czystość w domu i pierwsze komendy bez stresu.',
    points: ['Nauka imienia i kontaktu', 'Gryzienie i czystość', 'Spokojne poznawanie świata'],
    price: 'od 160 zł / lekcja',
    image: images.services.puppy,
  },
  {
    eyebrow: 'Każdy wiek',
    title: 'Posłuszeństwo podstawowe',
    desc: 'Siad, waruj, zostań i niezawodne przywołanie – także w rozpraszającym otoczeniu.',
    points: ['Chodzenie na luźnej smyczy', 'Przywołanie w parku', 'Komendy w praktyce'],
    price: 'od 180 zł / lekcja',
    image: images.services.obedience,
  },
  {
    eyebrow: 'Konsultacja behawioralna',
    title: 'Problemy z zachowaniem',
    desc: 'Reaktywność, lęk separacyjny, ciągnięcie czy szczekanie – szukamy przyczyny, nie tylko objawów.',
    points: ['Analiza zachowania w domu', 'Indywidualny plan pracy', 'Wsparcie między spotkaniami'],
    price: 'od 260 zł / konsultacja',
    image: images.services.behavior,
    featured: true,
  },
  {
    eyebrow: '1 na 1',
    title: 'Trening indywidualny',
    desc: 'Pełna uwaga trenera i program szyty na miarę Twojego psa i Waszej codzienności.',
    points: ['Dojazd do klienta', 'Elastyczne terminy', 'Notatki po każdej lekcji'],
    price: 'od 190 zł / lekcja',
    image: images.services.private,
  },
  {
    eyebrow: 'Wideo',
    title: 'Konsultacja online',
    desc: 'Szybka pomoc bez wychodzenia z domu – idealna na pierwsze pytania lub dalszą kontrolę.',
    points: ['60 minut rozmowy', 'Plan ćwiczeń na piśmie', 'Kontakt po tygodniu'],
    price: 'od 140 zł / sesja',
    image: images.services.online,
  },
  {
    eyebrow: 'Małe grupy',
    title: 'Spacery socjalizacyjne',
    desc: 'Nauka spokojnego zachowania wśród innych psów pod okiem trenera.',
    points: ['Grupy do 5 psów', 'Bezpieczne, dobrane towarzystwo', 'Weekendowe terminy'],
    price: 'od 90 zł / spacer',
    image: images.services.social,
  },
]

export const about = {
  eyebrow: 'O mnie',
  title: 'Cześć, jestem Marta. Pomagam psom i ludziom lepiej się rozumieć.',
  paragraphs: [
    'Od ponad 10 lat szkolę psy metodami pozytywnymi. Zaczynałam od własnej, bardzo reaktywnej suczki – to ona nauczyła mnie cierpliwości i tego, że za każdym „trudnym” zachowaniem stoi jakaś potrzeba.',
    'Na treningach nie używam kolczatek, obroży elektrycznych ani kar. Pracuję na nagrodach, zrozumieniu emocji psa i drobnych krokach, które dają trwałe efekty.',
  ],
  credentials: [
    'Certyfikowany behawiorysta zwierząt (COAPE)',
    'Instruktor szkolenia psów – metody pozytywne',
    'Regularne szkolenia z pracy z psami lękowymi',
  ],
  badges: ['Force-free', 'COAPE', 'Pierwsza pomoc dla psów'],
  steps: [
    { title: 'Bezpłatna rozmowa', desc: '15 minut przez telefon – opowiadasz o psie, ja o tym, jak mogę pomóc.' },
    { title: 'Ocena psa', desc: 'Pierwsze spotkanie: obserwuję psa w jego otoczeniu i ustalamy cele.' },
    { title: 'Plan treningowy', desc: 'Dostajesz plan krok po kroku, dopasowany do Waszego rytmu dnia.' },
    { title: 'Wsparcie po kursie', desc: 'Jestem w kontakcie także po zakończeniu – pytania mile widziane.' },
  ],
}

export const testimonials = [
  {
    quote:
      'Luna ciągnęła na smyczy tak, że bałam się wychodzić na spacery. Po 5 spotkaniach z Martą chodzimy na luźnej smyczy nawet obok innych psów. Zmieniło to nasze życie!',
    name: 'Kasia',
    dog: 'Luna, golden retriever',
    problem: 'Ciągnięcie na smyczy',
    avatar: images.dogs.goldenFlowers,
  },
  {
    quote:
      'Max zostawał sam w domu tylko z wyciem i zniszczonymi drzwiami. Dzięki spokojnemu, stopniowemu planowi dziś potrafi zostać sam na kilka godzin bez stresu.',
    name: 'Tomek',
    dog: 'Max, labrador',
    problem: 'Lęk separacyjny',
    avatar: images.dogs.labrador,
  },
  {
    quote:
      'Psie przedszkole to najlepsza decyzja po przyjęciu szczeniaka. Bajtek zna podstawowe komendy, a my wiemy, jak z nim pracować. Polecam każdemu nowemu opiekunowi.',
    name: 'Ola i Michał',
    dog: 'Bajtek, corgi',
    problem: 'Start ze szczeniakiem',
    avatar: images.dogs.corgi,
  },
]

export const gallery = [images.dogs.puppyLeash, images.dogs.bulldogPuppy, images.dogs.malinoisPuppy]

export const cta = {
  title: 'Gotowy na spokojniejsze spacery?',
  lead: 'Pierwsza 15-minutowa rozmowa jest bezpłatna i do niczego nie zobowiązuje.',
  button: 'Zadzwoń teraz',
}

export const faq = [
  {
    q: 'Od jakiego wieku można zacząć szkolenie?',
    a: 'Najlepiej od razu po przyjęciu szczeniaka do domu, zwykle od 8. tygodnia życia. Ale na naukę nigdy nie jest za późno – pracuję także z psami dorosłymi i seniorami.',
  },
  {
    q: 'Czy stosujesz kary lub obroże kolczatki?',
    a: 'Nie. Pracuję wyłącznie metodami pozytywnymi: nagradzam pożądane zachowania i uczę alternatyw dla tych niechcianych. To skuteczne i buduje zaufanie między psem a opiekunem.',
  },
  {
    q: 'Ile spotkań będzie potrzebnych?',
    a: 'To zależy od psa i celu. Podstawy posłuszeństwa to zwykle 5–8 lekcji, praca nad problemami behawioralnymi bywa dłuższa. Szacunkową liczbę podam po pierwszej ocenie.',
  },
  {
    q: 'Gdzie odbywają się treningi?',
    a: 'Najczęściej u Ciebie w domu i w okolicy, w której na co dzień spacerujesz – tam, gdzie problem faktycznie występuje. Dojeżdżam na terenie Warszawy i do 30 km od miasta.',
  },
  {
    q: 'Czy pracujesz z psami agresywnymi lub reaktywnymi?',
    a: 'Tak, to jedna z moich specjalizacji. Zaczynamy od konsultacji behawioralnej, aby zrozumieć przyczynę zachowania i bezpiecznie zaplanować dalszą pracę.',
  },
  {
    q: 'Czy muszę uczestniczyć w treningach?',
    a: 'Tak – to Ty spędzasz z psem najwięcej czasu, więc uczę Was obu. Dostaniesz też proste ćwiczenia do wykonania między spotkaniami.',
  },
]

export const contact = {
  eyebrow: 'Kontakt',
  title: 'Napisz, opowiedz o swoim psie',
  lead: 'Odpowiadam w ciągu 24 godzin. Wspólnie dobierzemy najlepszą formę pomocy.',
}
