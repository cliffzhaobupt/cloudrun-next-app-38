import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

export function useGuestRedirect() {
  const { isLoading: isLoadingAuth, isLoggedIn } = useAuth();
  const { replace: routerReplace } = useRouter();

  useEffect(() => {
    if (!isLoadingAuth && !isLoggedIn) {
      routerReplace('/');
    }
  }, [isLoadingAuth, isLoggedIn, routerReplace]);
}
