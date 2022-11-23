import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/image/logo.png';
import NavLink, { NavLinkProps } from './NavItem';

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
  return (
    <header className='flex text-darker'>
      <div className='px-12 border-r border-gray-300'>
        <Image height={80} src={Logo} alt='Epsilon LOGO' />
      </div>
      <nav className='flex flex-1 px-8 main-menu'>
        <ul className='flex gap-8 font-semibold'>
          {links.map((link) => (
            <NavLink key={link.to} {...link} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
