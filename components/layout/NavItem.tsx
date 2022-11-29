import Link from 'next/link';
import { useRouter } from 'next/router';

export interface NavLinkProps {
  to: string;
  text: string;
}

export default function NavLink({ text, to }: NavLinkProps) {
  const router = useRouter();
  return (
    <li>
      <Link
        href={to}
        className={`block h-full relative py-2 md:py-6 ${
          router.pathname == to ? 'active' : ''
        }`}
      >
        {text}
      </Link>
    </li>
  );
}
