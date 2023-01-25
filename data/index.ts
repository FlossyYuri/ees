import BG1Logo from '../assets/image/bg1.jpg';
import BG2Logo from '../assets/image/bg2.jpg';
import BGXLogo from '../assets/image/bgx.jpg';
import MissionLogo from '../assets/image/home/slider-box1.png';
import VisionLogo from '../assets/image/home/slider-box2.png';
import ValueLogo from '../assets/image/home/slider-icon1.png';
import BG3Logo from '../assets/image/irrigacao.png';
import { CarouselItemProps } from '../components/home/CarouselItem';

export const CAROUSEL_ITEMS = (t: any): CarouselItemProps[] => [
  {
    image: BGXLogo,
    title: t.carousel.item1.title,
    subtitle: t.carousel.item1.subtitle,
    box: {
      image: MissionLogo,
      title: t.carousel.item1.box.title,
      text: t.carousel.item1.box.text,
    },
  },
  {
    image: BG1Logo,
    title: t.carousel.item2.title,
    subtitle: t.carousel.item2.subtitle,
    box: {
      image: VisionLogo,
      title: t.carousel.item2.box.title,
      text: t.carousel.item2.box.text,
    },
  },
  {
    image: BG2Logo,
    title: t.carousel.item3.title,
    subtitle: t.carousel.item3.subtitle,
    box: {
      image: ValueLogo,
      title: t.carousel.item3.box.title,
      text: t.carousel.item3.box.text,
    },
  },
  {
    image: BG3Logo,
    title: t.carousel.item4.title,
    subtitle: t.carousel.item4.subtitle,
    box: {
      image: ValueLogo,
      title: t.carousel.item4.box.title,
      text: t.carousel.item4.box.text,
    },
  },
];

export const PRODUCTS = (t: any) => ({
  shs: {
    title: t.productsList.item1.title,
    description: t.productsList.item1.description,
  },
  sp: {
    title: t.productsList.item2.title,
    description: t.productsList.item2.description,
  },
  cr: {
    title: t.productsList.item3.title,
    description: t.productsList.item3.description,
  },
  as: {
    title: t.productsList.item4.title,
    description: t.productsList.item4.description,
  },
});
