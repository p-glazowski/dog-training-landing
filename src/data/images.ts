/**
 * All photos in one place, bundled locally in src/assets/photos.
 * Free licenses (Unsplash License / Pexels License): commercial use allowed,
 * no attribution required. Sources:
 *   hero-trainer-labrador      pexels.com/photo/5255554
 *   about-trainer-two-dogs     pexels.com/photo/36653754
 *   service-puppy-pointer      pexels.com/photo/27177031
 *   service-obedience-sit      pexels.com/photo/28536059
 *   service-behavior-weimaraner pexels.com/photo/32183093
 *   service-private-high-five  pexels.com/photo/7516476
 *   service-online-hug         unsplash.com/photos/ISg37AI2A-s
 *   service-social-two-dogs    unsplash.com/photos/T-0EW-SEbsE
 *   avatar-labrador            unsplash.com/photos/c7bUIRBqapA
 *   avatar-golden-flowers      unsplash.com/photos/F99ck4IlmjA
 *   avatar-corgi               unsplash.com/photos/pt7xfbhRLoQ
 *   gallery-puppy-leash        unsplash.com/photos/wQzmEm52F_8
 *   gallery-bulldog-puppy      unsplash.com/photos/nW_RUJfrgIw
 *   gallery-malinois-puppy     pexels.com/photo/10013055
 * Swap these for the trainer's own photos later.
 *
 * `pos` = CSS object-position: the focal point that must stay visible when the
 * photo is cropped into its frame (x% y%). Checked against each frame's aspect ratio.
 */
import hero from '../assets/photos/hero-trainer-labrador.jpg'
import about from '../assets/photos/about-trainer-two-dogs.jpg'
import puppy from '../assets/photos/service-puppy-pointer.jpg'
import obedience from '../assets/photos/service-obedience-sit.jpg'
import behavior from '../assets/photos/service-behavior-weimaraner.jpg'
import privateSession from '../assets/photos/service-private-high-five.jpg'
import online from '../assets/photos/service-online-hug.jpg'
import social from '../assets/photos/service-social-two-dogs.jpg'
import labrador from '../assets/photos/avatar-labrador.jpg'
import goldenFlowers from '../assets/photos/avatar-golden-flowers.jpg'
import corgi from '../assets/photos/avatar-corgi.jpg'
import puppyLeash from '../assets/photos/gallery-puppy-leash.jpg'
import bulldogPuppy from '../assets/photos/gallery-bulldog-puppy.jpg'
import malinoisPuppy from '../assets/photos/gallery-malinois-puppy.jpg'

export type Photo = { src: string; alt: string; pos: string }

export const images = {
  // Landscape 3:2 → near-square frame. Keep dog (left) + trainer (right) both in view.
  hero: {
    src: hero,
    alt: 'Trenerka nagradza psa smakołykiem podczas treningu w parku',
    pos: '42% 50%',
  },
  // Landscape 5:4 → 4:5 portrait frame. Trainer kneeling between two dogs.
  about: {
    src: about,
    alt: 'Trenerka pracuje z dwoma psami na łące',
    pos: '47% 50%',
  },

  // Service cards use a 4:3 frame.
  services: {
    puppy: {
      src: puppy,
      alt: 'Szczeniak wyżła patrzy na rękę ze smakołykiem',
      pos: '55% 50%',
    },
    obedience: {
      src: obedience,
      alt: 'Pies siedzi na komendę obok opiekuna',
      pos: '58% 55%',
    },
    behavior: {
      src: behavior,
      alt: 'Spokojny wyżeł weimarski siedzi na smyczy przy opiekunie',
      pos: '50% 22%',
    },
    private: {
      src: privateSession,
      alt: 'Trenerka uczy psa przybijania piątki',
      pos: '50% 11%',
    },
    online: {
      src: online,
      alt: 'Mężczyzna przytula szczęśliwego psa',
      pos: '50% 55%',
    },
    social: {
      src: social,
      alt: 'Dwa psy biegną razem polną drogą',
      pos: '50% 40%',
    },
  },

  // Square crops (avatars + gallery tiles).
  dogs: {
    labrador: { src: labrador, alt: 'Labrador retriever', pos: '50% 28%' },
    goldenFlowers: {
      src: goldenFlowers,
      alt: 'Golden retriever wśród żółtych kwiatów',
      pos: '58% 50%',
    },
    corgi: { src: corgi, alt: 'Uśmiechnięty corgi', pos: '40% 45%' },
    puppyLeash: {
      src: puppyLeash,
      alt: 'Szczeniak golden retrievera biegnie na smyczy',
      pos: '50% 72%',
    },
    bulldogPuppy: {
      src: bulldogPuppy,
      alt: 'Szczeniak buldoga patrzy na rękę opiekuna',
      pos: '38% 50%',
    },
    malinoisPuppy: {
      src: malinoisPuppy,
      alt: 'Szczeniak owczarka belgijskiego siedzi i patrzy na opiekuna',
      pos: '50% 82%',
    },
  },
} satisfies Record<string, Photo | Record<string, Photo>>
