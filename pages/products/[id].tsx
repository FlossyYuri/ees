import { useRouter } from 'next/router';
import Product from '../../components/Product';
import { PRODUCTS } from '../../data';
import useTranslation from '../../hooks/useTranslation';

export default function Home() {
  const router = useRouter();
  const t = useTranslation();
  const { id } = router.query;
  return <Product {...PRODUCTS(t)[id as 'shs' | 'cr' | 'as' | 'sp']} />;
}
