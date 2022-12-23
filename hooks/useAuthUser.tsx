import { useState } from 'react';
export default function useAuthUser() {
  const auth = useState(false);

  return auth;
}
