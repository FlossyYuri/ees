import Image from 'next/image';
import Hamburger from 'hamburger-react';
import MozambiqueLogo from '../../assets/icons/mozambique.png';
import UsLogo from '../../assets/icons/united-states.png';
import Logo from '../../assets/image/logo2.png';
import NavLink, { NavLinkProps } from './NavItem';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { en, pt } from '../../translations';

export default function Header() {
  const router = useRouter();
  const t = router.locale === 'pt' ? pt : en;

  const handleLanguageToggle = () => {
    switch (router.locale) {
      case 'pt':
        router.push('/', '/', { locale: 'en' });
        break;
      case 'en':
        router.push('/', '/', { locale: 'pt' });
        break;

      default:
        break;
    }
  };

  const links: NavLinkProps[] = [
    {
      text: t.home,
      to: '/',
    },
    {
      text: t.aboutUs,
      to: '/about-us',
    },
    {
      text: t.news,
      to: '/news',
    },
    {
      text: t.contacts,
      to: '/contacts',
    },
  ];

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
      <div className='flex items-center mr-2 lg:mr-8'>
        <button
          className='p-2 flex gap-4 items-center'
          onClick={handleLanguageToggle}
          type='button'
        >
          <Image
            className='object-contain'
            height={32}
            src={router.locale === 'pt' ? MozambiqueLogo : UsLogo}
            alt='Locale language icon'
          />
          <span className='hidden md:flex'>
            {router.locale === 'en' ? 'English' : 'Português'}
          </span>
        </button>
      </div>
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
