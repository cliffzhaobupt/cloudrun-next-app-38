import { useAsyncFn } from 'react-use';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../firebaseApp';

export function useRegisterUser() {
  const [state, registerUser] = useAsyncFn(
    async ({ email, password }: { email: string; password: string }) => {
      const auth = getAuth(firebaseApp);
      auth.tenantId = process.env
        .NEXT_PUBLIC_IDENTITY_PROVIDER_TENANT_ID as string;

      return createUserWithEmailAndPassword(auth, email, password);
    }
  );

  return {
    isLoading: state.loading,
    isError: !!state.error,
    registeredUserCredential: state.value,
    registerUser,
  };
}
