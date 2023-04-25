import { getAuth, signOut } from 'firebase/auth';
import { useAsyncFn } from 'react-use';
import { firebaseApp } from '../firebaseApp';

export function useLogout() {
  const [state, logout] = useAsyncFn(async () => {
    const auth = getAuth(firebaseApp);
    auth.tenantId = process.env
      .NEXT_PUBLIC_IDENTITY_PROVIDER_TENANT_ID as string;

    return signOut(auth);
  });

  return {
    isLoading: state.loading,
    isError: !!state.error,
    logout,
  };
}
