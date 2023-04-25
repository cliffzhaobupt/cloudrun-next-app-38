import { useAsyncFn } from 'react-use';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../firebaseApp';

export function useLogin() {
  const [state, login] = useAsyncFn(
    async ({ email, password }: { email: string; password: string }) => {
      const auth = getAuth(firebaseApp);
      auth.tenantId = process.env
        .NEXT_PUBLIC_IDENTITY_PROVIDER_TENANT_ID as string;

      return signInWithEmailAndPassword(auth, email, password);
    }
  );

  return {
    isLoading: state.loading,
    isError: !!state.error,
    loggedInUserCredential: state.value,
    login,
  };
}
