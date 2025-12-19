'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLogin = localStorage.getItem("access_token");
    if (!isLogin) {
      router.replace("/login");
    }
  }, []);

  return <>{children}</>;
}
