/**
 * Gallery Configuration
 * Configurable data for the 5 carefully selected photographs of her.
 * Place her photographs in `/public/images/her/` named `her-01.jpg` through `her-05.jpg`.
 * Place your shared photograph in `/public/images/us/our-memory.jpg`.
 */

export const galleryPhotos = [
  {
    id: 1,
    src: '/images/her/her-01.jpg',
    fallback: '/images/her/her-01.svg',
    caption: 'That beautiful smile of yours ❤️',
    alt: 'Her beautiful smile - Cinematic Introduction',
    style: 'cinematic-intro', // First photograph: beautiful cinematic introduction
    aspect: 'portrait',
    objectPosition: 'center 38%',
    quote: 'The kind of smile that lights up the entire room.',
    tag: 'Introductory Highlight',
  },
  {
    id: 2,
    src: '/images/her/her-02.jpg',
    fallback: '/images/her/her-02.svg',
    caption: 'Too cute to be real, honestly.',
    alt: 'Radiant portrait in pink',
    style: 'polaroid', // Polaroid frame
    aspect: 'portrait',
    objectPosition: 'center 25%',
    quote: 'Effortlessly adorable in every little way.',
    tilt: '-2deg',
  },
  {
    id: 3,
    src: '/images/her/her-03.jpg',
    fallback: '/images/her/her-03.svg',
    caption: 'Just being you...',
    alt: 'Gentle aesthetic portrait',
    style: 'editorial-portrait', // Editorial portrait layout
    aspect: 'portrait',
    objectPosition: 'center 20%',
    quote: 'Natural, graceful, and completely irreplaceable.',
    tag: 'Editorial',
  },
  {
    id: 4,
    src: '/images/her/her-04.jpg',
    fallback: '/images/her/her-04.svg',
    caption: 'Pretty without even trying. 🙈',
    alt: 'Candid smile by the palace arches',
    style: 'polaroid', // Polaroid frame
    aspect: 'portrait',
    objectPosition: 'center 62%',
    quote: 'No effort, pure magic.',
    tilt: '2deg',
  },
  {
    id: 5,
    src: '/images/her/her-05.jpg',
    fallback: '/images/her/her-05.svg',
    caption: 'My favourite little view.',
    alt: 'Her stunning portrait by the sea - Final Visual Highlight',
    style: 'grand-highlight', // Fifth photograph: final visual highlight of the gallery
    aspect: 'square',
    objectPosition: 'center 30%',
    quote: 'Because some views are simply unforgettable.',
    tag: 'Final Highlight',
  },
]

export const ourMemoryData = {
  src: '/images/us/our-memory.jpg',
  fallback: '/images/us/our-memory.svg',
  heading: 'One of My Favourite Memories',
  subtitle: 'Some moments are simple, but somehow they stay with us a little longer.',
  caption: 'A little moment, a special place in my heart. ❤️',
  alt: 'A precious memory of both of us together',
}
