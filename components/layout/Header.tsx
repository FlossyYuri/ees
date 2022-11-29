import Image from 'next/image';
import Hamburger from 'hamburger-react';
import Logo from '../../assets/image/logo2.png';
import NavLink, { NavLinkProps } from './NavItem';
import { useState } from 'react';

const links: NavLinkProps[] = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'About us',
    to: '/about-us',
  },
  {
    text: 'News',
    to: '/news',
  },
  {
    text: 'Contacts',
    to: '/contacts',
  },
];

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className='flex text-darker'>
      <div className='pl-4 md:px-12 md:border-r md:border-gray-300 flex-1 md:flex-none'>
        <Image height={80} src={Logo} alt='Epsilon LOGO' />
      </div>
      <nav className='flex-1 px-8 main-menu hidden md:flex'>
        <ul className='flex gap-8 font-semibold'>
          {links.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </ul>
      </nav>
      <div className='flex items-center p-4 z-50 md:hidden'>
        <Hamburger
          color={isOpen ? 'white' : '#ec7644'}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      <div
        className={`transition-all fixed h-screen bg-gray-700 z-20 p-4 w-80 sidebar text-white text-center block md:hidden ${
          isOpen ? 'right-0' : '-right-80'
        }`}
      >
        <div className='flex justify-end opacity-0'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <ul className='flex flex-col font-semibold'>
          {links.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </ul>
      </div>
    </header>
  );
}
