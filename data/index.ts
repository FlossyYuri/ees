import Product1 from '../assets/image/products/1.jpg';
import Product2 from '../assets/image/products/2.jpg';
import Product3 from '../assets/image/products/3.jpg';
import Product4 from '../assets/image/products/4.jpg';
import Product5 from '../assets/image/products/5.jpg';
import Product6 from '../assets/image/products/6.jpg';
import Product7 from '../assets/image/products/7.jpg';
import Product8 from '../assets/image/products/8.jpg';
import Member1 from '../assets/image/members/1.jpg';
import Member2 from '../assets/image/members/2.jpg';
import Member3 from '../assets/image/members/3.jpg';
import Member4 from '../assets/image/members/4.png';
import Member5 from '../assets/image/members/5.jpg';
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
    images: [Product1, Product2, Product3],
    bg: Product3,
  },
  sp: {
    title: t.productsList.item2.title,
    description: t.productsList.item2.description,
    images: [Product4],
    bg: Product4,
  },
  cr: {
    title: t.productsList.item3.title,
    description: t.productsList.item3.description,
    images: [Product5, Product6],
    bg: Product5,
  },
  as: {
    title: t.productsList.item4.title,
    description: t.productsList.item4.description,
    images: [Product7, Product8],
    bg: Product7,
  },
});

export const MEMBERS = (t: any) => [
  {
    image: Member3,
    name: t.members.item1.name,
    title: t.members.item1.title,
    description: t.members.item1.description,
  },
  {
    image: Member1,
    name: t.members.item2.name,
    title: t.members.item2.title,
    description: t.members.item2.description,
  },
  {
    image: Member2,
    name: t.members.item3.name,
    title: t.members.item3.title,
    description: t.members.item3.description,
  },
  {
    image: Member4,
    name: t.members.item4.name,
    title: t.members.item4.title,
    description: t.members.item4.description,
  },
  {
    image: Member5,
    name: t.members.item5.name,
    title: t.members.item5.title,
    description: t.members.item5.description,
  },
];
