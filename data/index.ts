import { CarouselItemProps } from '../components/home/CarouselItem';
import BG1Logo from '../assets/image/bg1.jpg';
import BG2Logo from '../assets/image/bg2.jpg';
import BG3Logo from '../assets/image/bg3.jpg';
import BG4Logo from '../assets/image/bg4.jpg';
import BG5Logo from '../assets/image/bg5.jpg';
import BG6Logo from '../assets/image/bg6.jpg';

export const CAROUSEL_ITEMS: CarouselItemProps[] = [
  {
    image: BG1Logo,
    title: `Iluminamos e desenvolvemos Moçambique.`,
    subtitle: `A world wide distributor of solar supplies and
    knowledgeable service`,
    box: {
      image: BG1Logo,
      title: 'Our Mission',
      text: 'Provide competitive, sustainable, and reliable solutions to both our off grid and on grid clients.',
    },
  },
  {
    image: BG2Logo,
    title: `Providing Value To Our ClientsThrough Ongoing Product &
    Innovation.`,
    subtitle: `A world wide distributor of solar supplies and
    knowledgeable service`,
    box: {
      image: BG2Logo,
      title: 'Our Vision',
      text: 'Accelerate the widespread access and use of clean energy in Mozambique, improving the quality of life and the economic potential of communities.',
    },
  },
  {
    image: BG2Logo,
    title: `Providing Value To Our ClientsThrough Ongoing Product &
    Innovation.`,
    subtitle: `A world wide distributor of solar supplies and
    knowledgeable service`,
    box: {
      image: BG2Logo,
      title: 'Our Values',
      text: 'We are locals and committed to deliver the best service.',
    },
  },
];
