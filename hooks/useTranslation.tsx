import { useRouter } from 'next/router';
import { en, pt } from '../translations';
export default function useTranslation() {
  const router = useRouter();
  const t = en;

  return t;
}
